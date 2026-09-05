class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameInput = page.locator('#username');
    this.passwordInput = page.locator('#password');
    this.adminRadio = page.locator('#usertype[value="admin"]');
    this.userRadio = page.locator('#usertype[value="user"]');
    this.termsCheckbox = page.locator('#terms');
    this.signInButton = page.locator('#signInBtn');
    this.cancelButton = page.locator('#cancelBtn');
    this.okayButton = page.locator('#okayBtn');
    this.dropdown = page.locator('select');
  }

  async goto() {
    await this.page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  }

  async login({ username, password, role = 'admin', termsAccepted = true }) {
    await this.usernameInput.fill(username);
    await this.passwordInput.fill(password);
    if (role === 'admin') {
      await this.adminRadio.check();
    } else {
      await this.userRadio.check();
    }
    if (termsAccepted) {
      await this.termsCheckbox.check();
    }
    await this.signInButton.click();
  }

  async selectDropdownOption(option) {
    await this.dropdown.selectOption({ label: option });
  }

  async assertPageLoaded() {
    await this.usernameInput.waitFor({ state: 'visible' });
    await this.passwordInput.waitFor({ state: 'visible' });
    await this.signInButton.waitFor({ state: 'visible' });
  }
}

module.exports = { LoginPage };
