// @ts-check

const { test, expect, _android } = require("@playwright/test");

test.describe("Authentication Tests", () => {
  test("TC_AUTH_001 - should login with valid credentials", async () => {
    const [device] = await _android.devices();

    // Ensure clean app launch
    await device.shell("am force-stop com.saucelabs.mydemoapp.android");
    await device.shell(
      "am start -n com.saucelabs.mydemoapp.android/com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
    );

    // Go to login page
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/menuIV" });
    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/menuIV" });
    await device.wait({ text: "Log In" });
    await device.tap({ text: "Log In" });

    // Fill credentials and submit
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/loginBtn" });
    await device.fill(
      { res: "com.saucelabs.mydemoapp.android:id/nameET" },
      "bod@example.com",
    );
    await device.fill(
      { res: "com.saucelabs.mydemoapp.android:id/passwordET" },
      "10203040",
    );
    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/loginBtn" });

    // Verify session is active by checking for the presence of the logout menu item
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/menuIV" });
    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/menuIV" });
    const logoutItem = await device.info({ text: "Log Out" });
    expect(logoutItem.text).toBe("Log Out");

    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/menuIV" });
  });
});
