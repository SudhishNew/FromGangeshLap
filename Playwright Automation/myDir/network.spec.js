import { test, expect } from "@playwright/test";

test("task 11", async ({ page }) => {
  console.log("Task 11");
});
test("task 12", async ({ page }) => {
  console.log("Task 12");
});
test("task 13", async ({ page }) => {
  console.log("Task 13");
});
test("task 14", async ({ page }) => {
  console.log("Task 14");
});

// 1. run by titile - npx playwright test -g "task 11"
// 2. run by function line num - npx playwright test network.spec.js:13 
// 3. run by paritcular file with titile - npx playwright test network.spec.js -g "task 11"