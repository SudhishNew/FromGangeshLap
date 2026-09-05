---
name: generate-spec-from-feature
description: "Use when: generating Playwright spec files from Gherkin feature files in a Cucumber test framework"
---

# Generate Playwright Spec from Feature File

## Task
Convert a Gherkin feature file into a corresponding Playwright spec file (.spec.js).

## Analysis Steps

### 1. Framework Analysis
- Examine the Cucumber project structure in `/tests/`
- Identify page objects in `/tests/pages/`
- Review existing step definitions in `/tests/StepDefenition/`
- Check hooks in `/tests/hooks/` for setup/teardown
- Review existing .spec.js files as templates

### 2. Feature File Analysis
Parse the feature file to extract:
- **Feature description** → becomes test suite (describe block)
- **Scenario Outline** → parameterized test using data from Examples table
- **Given/When/Then steps** → map to page object methods or assertions
- **Tags** (e.g., @datadriven) → apply to test group

### 3. Spec File Generation

Create a `.spec.js` file following this structure:

```javascript
const { test, expect } = require('@playwright/test');
const { Before, After, Given, When, Then } = require('@cucumber/cucumber');

// Import page objects
const [PageObject] = require('../pages/[PageName]');

test.describe('[Feature Name]', () => {
  let [pageObjectInstance];

  test.beforeEach(async ({ page }) => {
    [pageObjectInstance] = new [PageObject](page);
    // Initialize page
  });

  test.afterEach(async () => {
    // Cleanup if needed
  });

  // Generate test from each scenario
  test('should [scenario description]', async ({ page }) => {
    // Implement Given steps
    // Implement When steps
    // Implement Then steps (assertions)
  });

  // For Scenario Outline, use test.each() with Examples data
  test.each([
    { userName: 'Trends', password: 'trends123' },
    { userName: 'Sudhish', password: 'Sudhi1408' }
  ])('should test with $userName and $password', async ({ page, userName, password }) => {
    // Implementation using parameters
  });
});
```

## Key Rules

1. **File Naming**: `DataDriven.feature` → `DataDriven.spec.js`
2. **Output Location**: `/tests/` directory
3. **Page Objects**: Use existing page classes from `/tests/pages/`
4. **Assertions**: Use Playwright expect() for validations
5. **Data Mapping**: Extract Examples table data into test.each() parameters
6. **Reusability**: Leverage existing step definitions and page methods

## Output

Generate a production-ready .spec.js file that:
- ✅ Imports required dependencies
- ✅ Initializes page objects
- ✅ Maps all Gherkin steps to code
- ✅ Handles parameterized data from Examples
- ✅ Includes proper test lifecycle (beforeEach, afterEach)
- ✅ Uses descriptive test names
- ✅ Has inline comments explaining complex logic
