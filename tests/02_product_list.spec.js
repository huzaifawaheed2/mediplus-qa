// @ts-check

const { test, expect, _android } = require("@playwright/test");

test.describe("Product Catalog Tests", () => {
  test("TC_PROD_001 - should display product catalog and navigate to product details", async () => {
    const [device] = await _android.devices();

    // Ensure clean app launch
    await device.shell("am force-stop com.saucelabs.mydemoapp.android");
    await device.shell(
      "am start -n com.saucelabs.mydemoapp.android/com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
    );

    // Wait for catalog screen to load
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/productIV" });

    // Verify first product is displayed in catalog
    const firstProduct = await device.info({
      res: "com.saucelabs.mydemoapp.android:id/titleTV",
    });
    expect(firstProduct.text).toContain("Sauce Labs Backpack");

    // Tap on the product card to view details
    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/productIV" });

    // Verify product details screen loaded with title and price
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/productTV" });
    const detailTitle = await device.info({
      res: "com.saucelabs.mydemoapp.android:id/productTV",
    });
    expect(detailTitle.text).toContain("Sauce Labs Backpack");

    const detailPrice = await device.info({
      res: "com.saucelabs.mydemoapp.android:id/priceTV",
    });
    expect(detailPrice.text).toContain("$ 29.99");
  });
});
