#!/usr/bin/env node

const fs = require("fs");
const path = require("path");

const packDir = process.argv[2];

if (!packDir) {
  console.error("Usage: node scripts/validate-book2skill.js <skill-pack-dir>");
  process.exit(2);
}

const root = path.resolve(process.cwd(), packDir);
const errors = [];
const warnings = [];

function exists(rel) {
  return fs.existsSync(path.join(root, rel));
}

function read(rel) {
  return fs.readFileSync(path.join(root, rel), "utf8");
}

function fail(message) {
  errors.push(message);
}

function warn(message) {
  warnings.push(message);
}

function checkRequiredFiles() {
  const required = [
    "README.md",
    "BOOK_OVERVIEW.md",
    "INDEX.md",
    "source/SOURCE.md",
    "verified.md",
    "candidates/frameworks.md",
    "candidates/principles.md",
    "candidates/cases.md",
    "candidates/counter-examples.md",
    "candidates/glossary.md",
    "rejected/rejected-units.md"
  ];

  for (const rel of required) {
    if (!exists(rel)) fail(`Missing required file: ${rel}`);
  }
}

function skillDirs() {
  return fs
    .readdirSync(root, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .filter((name) => !["source", "candidates", "rejected"].includes(name))
    .filter((name) => exists(`${name}/SKILL.md`));
}

function checkFrontmatter(skill, text) {
  if (!text.startsWith("---\n")) {
    fail(`${skill}: missing YAML frontmatter`);
    return;
  }

  const end = text.indexOf("\n---", 4);
  if (end === -1) {
    fail(`${skill}: unterminated YAML frontmatter`);
    return;
  }

  const yaml = text.slice(4, end);
  for (const field of ["name:", "description:", "source_book:", "source_chapter:", "tags:", "related_skills:"]) {
    if (!yaml.includes(field)) fail(`${skill}: frontmatter missing ${field}`);
  }

  const nameMatch = yaml.match(/^name:\s*(\S+)/m);
  if (!nameMatch) fail(`${skill}: frontmatter name is empty`);
  if (nameMatch && nameMatch[1] !== skill) {
    fail(`${skill}: directory name does not match frontmatter name "${nameMatch[1]}"`);
  }
}

function checkSections(skill, text) {
  const sections = [
    "## R",
    "## I",
    "## A1",
    "## A2",
    "## E",
    "## B",
    "## 相关 skills",
    "## 审计信息"
  ];

  for (const section of sections) {
    if (!text.includes(section)) fail(`${skill}: missing section ${section}`);
  }

  const quotedLines = text
    .split("\n")
    .filter((line) => line.startsWith("> "))
    .map((line) => line.replace(/^>\s*/, "").trim())
    .filter((line) => line && !line.startsWith("来源"));

  if (quotedLines.length === 0) {
    fail(`${skill}: R section has no block quote`);
  }

  for (const quote of quotedLines) {
    if ([...quote].length > 180) {
      warn(`${skill}: quote is longer than 180 chars; check book2skill quote limit`);
    }
  }
}

function checkTestPrompts(skill) {
  const rel = `${skill}/test-prompts.json`;
  if (!exists(rel)) {
    fail(`${skill}: missing test-prompts.json`);
    return;
  }

  let parsed;
  try {
    parsed = JSON.parse(read(rel));
  } catch (error) {
    fail(`${skill}: invalid JSON in test-prompts.json: ${error.message}`);
    return;
  }

  if (parsed.skill !== skill) fail(`${skill}: test skill field does not match directory`);
  if (parsed.darwin_compatible !== true) fail(`${skill}: darwin_compatible must be true`);
  if (!Array.isArray(parsed.test_cases)) fail(`${skill}: test_cases must be an array`);

  const cases = parsed.test_cases || [];
  if (cases.length < 6) fail(`${skill}: expected at least 6 test cases`);

  const types = new Set(cases.map((item) => item.type));
  for (const requiredType of ["should_trigger", "should_not_trigger", "edge_case"]) {
    if (!types.has(requiredType)) fail(`${skill}: missing ${requiredType} test case`);
  }

  const shouldNot = cases.filter((item) => item.type === "should_not_trigger");
  if (shouldNot.length < 2) fail(`${skill}: expected at least 2 should_not_trigger cases`);

  for (const item of cases) {
    for (const field of ["id", "type", "prompt", "expected_behavior", "notes"]) {
      if (!item[field]) fail(`${skill}: test case missing ${field}`);
    }
  }
}

function checkIndexLinks(skills) {
  if (!exists("INDEX.md")) return;

  const index = read("INDEX.md");
  const linkedSkills = new Set();
  const linkPattern = /\]\((?:\.\/)?([^/)]+)\/SKILL\.md\)/g;
  let match;

  while ((match = linkPattern.exec(index)) !== null) {
    linkedSkills.add(match[1]);
  }

  for (const linkedSkill of linkedSkills) {
    if (!skills.includes(linkedSkill)) {
      fail(`INDEX.md links to missing skill: ${linkedSkill}`);
    }
  }

  for (const skill of skills) {
    if (!linkedSkills.has(skill)) {
      fail(`INDEX.md does not link to skill: ${skill}`);
    }
  }
}

function main() {
  if (!fs.existsSync(root)) {
    console.error(`Pack directory not found: ${root}`);
    process.exit(2);
  }

  checkRequiredFiles();

  const skills = skillDirs();
  if (skills.length === 0) fail("No skill directories found");

  for (const skill of skills) {
    const text = read(`${skill}/SKILL.md`);
    checkFrontmatter(skill, text);
    checkSections(skill, text);
    checkTestPrompts(skill);
  }

  checkIndexLinks(skills);

  if (warnings.length) {
    console.log("Warnings:");
    for (const message of warnings) console.log(`- ${message}`);
  }

  if (errors.length) {
    console.error("Validation failed:");
    for (const message of errors) console.error(`- ${message}`);
    process.exit(1);
  }

  console.log(`Validation passed: ${path.relative(process.cwd(), root)} (${skills.length} skills)`);
}

main();
