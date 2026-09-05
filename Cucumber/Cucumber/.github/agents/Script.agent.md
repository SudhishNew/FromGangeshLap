---
name: Script
description: "Use when: generating Playwright spec files from Cucumber feature files; orchestrates framework analysis, feature parsing, and spec generation"
category: "Testing"
---

# Script Agent: Cucumber Feature to Playwright Spec Generator

## Activation
- **Trigger**: `/generateSpecs` command or when feature files are selected
- **Scope**: Workspace agent for Cucumber test automation projects
- **Purpose**: Automate conversion of Gherkin feature files into Playwright test specifications

## Workflow

### Stage 1: Framework Discovery & Analysis
The system will:

1. **Scan the test framework**
   - Read all files in `/tests/pages/` to catalog available page objects
   - List step definitions in `/tests/StepDefenition/`
   - Check `/tests/hooks/` for test lifecycle hooks
   - Review existing `.spec.js` files as templates for code style

2. **Extract framework patterns**
   - Identify page object class names and methods
   - Document step definition signatures
   - Note any custom helpers or utilities

### Stage 2: Feature File Analysis
For the selected feature file(s), extract:

- **Metadata**
  - Feature name and description
  - Tags (e.g., @datadriven, @smoke)
  - File location

- **Scenarios**
  - Scenario name and type (regular or Outline)
  - All Given/When/Then steps
  - Examples table data (for Scenario Outlines)

### Stage 3: Spec File Generation
Generate a production-ready `.spec.js` file with:

- **File Structure**
  ```
  tests/[FeatureName].spec.js
  ```

- **Code Generation Rules**
  - One test per example row (for Scenario Outlines)
  - Import necessary page objects and utilities
  - Map Gherkin steps to page object methods
  - Use Playwright `test()` and `expect()` APIs
  - Include parameterized tests using `test.each()`

- **Output Quality**
  - Readable, maintainable code
  - Inline comments explaining step mappings
  - Proper error handling where needed
  - Follows existing code style in the project

## Setup Instructions

When invoked, this agent will:

1. **Analyze your Cucumber framework**
   - Cataloging page objects, step definitions, and existing patterns

2. **Generate spec file(s)**
   - Convert feature scenarios into Playwright tests
   - Create output file(s) in `/tests/` directory with `.spec.js` extension
   - Maintain 1:1 mapping: `DataDriven.feature` → `DataDriven.spec.js`

3. **Output the generated code**
   - Display the spec file for review
   - Ready to save or modify as needed

## Usage

### Command Line
```bash
/generateSpecs
```

Then provide:
- Path or name of the feature file to convert
- Or select from available feature files

### Expected Output
- Newly generated `.spec.js` file ready for execution
- Spec file uses current project structure and patterns
- All Gherkin steps mapped to executable code

## Integration with Existing Tests

The generated spec files will:
- ✅ Import existing page objects from `/tests/pages/`
- ✅ Follow Playwright test structure (`test.describe()`, `test()`, etc.)
- ✅ Use configured Playwright settings from `playwright.config.js`
- ✅ Support execution with existing test runners and CI/CD pipelines

## Notes

- The agent reads and analyzes the framework on each run for accuracy
- Feature tags are preserved in generated test metadata
- Example table data is automatically converted to `test.each()` parameters
- Generated files include helpful comments for maintainability
