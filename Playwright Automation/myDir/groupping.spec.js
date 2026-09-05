import { test, expect } from "@playwright/test";

test.skip("groupping", async ({ page }) => {
  // ways of test login function
  /**
   * 1. login with valid user
   * 2. login with Invalid user
   * 3. login with valid username and invalid password
   * 3. login with invalid username and valid password
   * 5. login with invalid username and invalid password
   * 6. login with empty username and not empty password
   * 7. login with not empty username and empty password
   * 8. both field are empty
   */
});


test.describe("STORY123", async () => {
  test("task 1", async ({ page }) => {
    console.log("Task 1");
    await page.waitForTimeout(5000);
  });
  test("task 2", async ({ page }) => {
    console.log("Task 2");
  });
  test("task 3", async ({ page }) => {
    console.log("Task 3");
  });
  test("task 4", async ({ page }) => {
    console.log("Task 4");
  });
});

test.describe("STORY456", async () => {
  test("task 11", async ({ page }) => {
    console.log("Task 11");
    await page.waitForTimeout(5000);
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
});
