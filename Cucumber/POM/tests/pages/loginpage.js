import { expect } from "@playwright/test";
import TesData from "../TestData/DDTestdata.json";
export class LoginPage {
  constructor(page) {
    this.page = page;
    this.userName = page.locator("#username");
    this.password = page.locator('[name="password"]');
    this.button = page.locator('[class="login_button"]');
  }

  async navigate() {
    await this.page.goto("https://adactinhotelapp.com/");
  }
  async login(user, password) {
    await this.userName.fill(user);
    await this.password.fill(password);
    await this.button.click();
    // await expect(this.page).not.toHaveURL('https://adactinhotelapp.com/')
  }
}
