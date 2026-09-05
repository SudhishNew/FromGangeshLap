import{test} from "@playwright/test"
test.only("single file", async({page})=>{   //"C:\Users\user\OneDrive\Documents\file1.txt"
    //[id="filesToUpload"]
    await page.goto('https://testautomationpractice.blogspot.com/')
    await page.locator('[id="singleFileInput"]').scrollIntoViewIfNeeded()
    await page.locator('[id="singleFileInput"]').setInputFiles(['C:\\Users\\user\\OneDrive\\Documents\\file1.txt'])
    await page.locator('[id="multipleFilesInput"]').setInputFiles(['../ScreenShots/submitbtn.png','../ScreenShots/TestLoginFullPage.jpeg','../ScreenShots/TestLoginFullPage.jpeg'])
    await page.waitForTimeout(3000)

})

test("Upload Multiple File", async ({ page }) => {
  await page.goto("https://davidwalsh.name/demo/multiple-file-upload.php");

  // await page.waitForTimeout(3000);

  //   uploading files
  await page.locator("#filesToUpload").setInputFiles(["../ScreenShots/submitbtn.png","../ScreenShots/TestLoginFullPage.jpeg","../ScreenShots/TestLoginPage.png"]);

  await page.waitForTimeout(3000); 

//   await expect(await page.locator("#fileList li:nth-child(1)")).toHaveText(
//     "File1.txt"
//   );
//   await expect(await page.locator("#fileList li:nth-child(2)")).toHaveText(
//     "File2.txt"
//   );

  // await page.waitForTimeout(3000);

  //   removing files
  // await page.locator("#filesToUpload").setInputFiles([]);

  // await page.waitForTimeout(2000);
});
