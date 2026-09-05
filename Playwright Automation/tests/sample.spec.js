import {test, expect} from '@playwright/test'

// test function 1
test('Sample program 1', async({page})=>{
    await page.goto("https://www.facebook.com/login/");
    await page.waitForTimeout(2000);
}) //1

// // test function 2
// test('Sample program 2', async({page})=>{
//     await page.goto("https://www.facebook.com/login/");
//     await page.waitForTimeout(1000);
// }) ///1

// test('Sample program 3', async({page})=>{
//     await page.goto("https://www.facebook.com/login/");
//     await page.waitForTimeout(1000);
// }) //1

// test('Sample program 4', async({page})=>{
//     await page.goto("https://www.facebook.com/login/");
//     await page.waitForTimeout(1000);
// })//1

// test('Sample program 5', async({page})=>{
//     await page.goto("https://www.facebook.com/login/");
//     await page.waitForTimeout(1000);
// }) //5

