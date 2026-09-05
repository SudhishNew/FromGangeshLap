import { test, expect } from "@playwright/test";

test("single file uploading", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const sigleFileBtn = await page.locator("#singleFileInput");
  await sigleFileBtn.setInputFiles("myDir/myFile/sample.txt");

  await page.waitForTimeout(3000);

  await page.locator("//button[text()='Upload Single File']").click();

  await page.waitForTimeout(7000);
});

test("Multiple file uploading", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");

  const sigleFileBtn = await page.locator("#multipleFilesInput");
  await sigleFileBtn.setInputFiles([
    "myDir/myFile/sample.txt",
    "myDir/myFile/demo.txt",
    "myDir/myFile/image.jpg",
  ]);

  await page.waitForTimeout(3000);

  await page.locator("//button[text()='Upload Multiple Files']").click();

  await page.waitForTimeout(7000);
});

test.only("download file", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/p/download-files_25.html",
  );

  await page
    .locator("//textarea[@id='inputText']")
    .fill("this is user triggerd file download");

  await page.click("//button[@id='generateTxt']");

  //    const dPromis = page.waitForEvent("download");

  //    await page.click("//a[@id='txtDownloadLink']"); //actual clicking btn

  //    const downloadPromise = await dPromis;

  //    await downloadPromise.saveAs("myDir/myFile/info.txt");

  const [download] = await Promise.all([
    page.waitForEvent("download"),
    page.click("//a[@id='txtDownloadLink']"),
  ]);

//   const fileName = await download.suggestedFilename();

  await download.saveAs("myDir/myFile/"+download.suggestedFilename());

  await page.waitForTimeout(3000);
});
