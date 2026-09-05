---
description: "Cucumber test automation framework - defines agent workflows and testing patterns"
---

# Cucumber Test Automation Workflow

## Project Overview

This is a Cucumber + Playwright test automation framework that converts Gherkin feature files into Playwright spec files.

**Directory Structure**
- `/tests/` - Test suite root
  - `/feature/` - Gherkin feature files (input)
  - `/pages/` - Page object models
  - `/StepDefenition/` - Step definitions and step mappings
  - `/hooks/` - Test lifecycle hooks
  - `*.spec.js` - Generated Playwright test files (output)

## Agent Workflows

### Script Agent: Feature to Spec Generation
**Trigger**: `/generateSpecs` command

**What it does**:
1. Analyzes the complete Cucumber framework structure
2. Reads Gherkin feature files from `/tests/feature/`
3. Generates corresponding Playwright spec files in `/tests/`
4. Creates 1:1 mapping: `DataDriven.feature` → `DataDriven.spec.js`

**How to use**:
```
Type in chat: /generateSpecs
Select or enter feature file name
Agent generates and displays the .spec.js file
```

**Output locations**:
- Generated specs go to `/tests/[FeatureName].spec.js`
- Prompt definitions available in `.github/prompts/`
- Agent configuration in `.github/agents/Script.agent.md`

## Framework Technologies

- **Test Runner**: Playwright (`@playwright/test`)
- **BDD Framework**: Cucumber (`@cucumber/cucumber`)
- **Reporting**: Allure Reports (`allure-cucumberjs`, `allure-playwright`)
- **Project Config**: `playwright.config.js`, `cucumber.js`

## Key Files

| File | Purpose |
|------|---------|
| `.github/agents/Script.agent.md` | Script agent configuration and workflow definition |
| `.github/prompts/generate-spec-from-feature.prompt.md` | Prompt for spec file generation |
| `tests/feature/*.feature` | Source: Gherkin feature files |
| `tests/*.spec.js` | Generated: Playwright test specifications |
| `tests/pages/` | Page object models for UI interaction |
| `playwright.config.js` | Playwright test configuration |
| `cucumber.js` | Cucumber test configuration |

## Running Tests

Once spec files are generated:

```bash
# Run all tests
npm test

# Run specific spec file
npx playwright test tests/DataDriven.spec.js

# Run with headed browser
npx playwright test --headed

# Generate allure report
npm run report
```

## Development Workflow

1. **Create a feature file** in `tests/feature/` using Gherkin syntax
2. **Trigger the agent**: `/generateSpecs` in Copilot Chat
3. **Select your feature file**: Agent reads and analyzes it
4. **Review generated spec**: Modify as needed
5. **Save to `tests/` directory**: File is ready to run
6. **Execute tests**: Run with `npm test` or Playwright directly

## Agent Auto-Detection

The Script agent is configured to:
- Automatically appear in slash command suggestions (`/generateSpecs`)
- Analyze the framework structure on-demand
- Extract patterns from existing page objects and step definitions
- Generate production-ready Playwright code

## Customization

To modify agent behavior:
- **Agent workflow**: Edit `.github/agents/Script.agent.md`
- **Generation prompt**: Edit `.github/prompts/generate-spec-from-feature.prompt.md`
- **Framework rules**: Update both files to reflect project conventions

---

*Last updated: April 2026*
*Framework: Cucumber + Playwright + Allure Reports*
