// @ts-check

const { test, expect, _android } = require("@playwright/test");

test.describe("Cart Flow Tests", () => {
  test("TC_CART_001 - should add product to cart and verify cart badge counter", async () => {
    const [device] = await _android.devices();

    // Ensure clean app launch
    await device.shell("am force-stop com.saucelabs.mydemoapp.android");
    await device.shell(
      "am start -n com.saucelabs.mydemoapp.android/com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
    );

    // Open product details
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/productIV" });
    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/productIV" });

    // Tap Add to Cart Button
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/cartBt" });
    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/cartBt" });

    // Verify cart badge counter shows 1 item
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/cartTV" });
    const cartBadge = await device.info({
      res: "com.saucelabs.mydemoapp.android:id/cartTV",
    });
    expect(cartBadge.text).toBe("1");

    // Open the Cart Screen
    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/cartRL" });

    // Verify item is present in the cart
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/titleTV" });
    const cartItemTitle = await device.info({
      res: "com.saucelabs.mydemoapp.android:id/titleTV",
    });
    expect(cartItemTitle.text).toContain("Sauce Labs Backpack");

    // Verify item quantity inside the cart
    const cartItemQty = await device.info({
      res: "com.saucelabs.mydemoapp.android:id/noTV",
    });
    expect(cartItemQty.text).toBe("1");
  });
});
