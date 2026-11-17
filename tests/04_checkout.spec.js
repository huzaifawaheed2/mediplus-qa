// @ts-check

const { test, expect, _android } = require("@playwright/test");

test.describe("Checkout Flow Tests", () => {
  test("TC_CHK_001 - should complete end-to-end checkout and place order", async () => {
    const [device] = await _android.devices();

    // Ensure clean app launch
    await device.shell("am force-stop com.saucelabs.mydemoapp.android");
    await device.shell(
      "am start -n com.saucelabs.mydemoapp.android/com.saucelabs.mydemoapp.android.view.activities.SplashActivity",
    );

    // Open first product and verify Product Details screen loaded
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/productIV" });
    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/productIV" });

    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/productTV" });
    const productDetail = await device.info({
      res: "com.saucelabs.mydemoapp.android:id/productTV",
    });
    expect(productDetail.text).toContain("Sauce Labs Backpack");

    // Add product to cart
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/cartBt" });
    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/cartBt" });

    // Open cart and verify Cart screen loaded
    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/cartRL" });
    await device.wait({
      res: "com.saucelabs.mydemoapp.android:id/productTV",
    });
    const cartHeader = await device.info({
      res: "com.saucelabs.mydemoapp.android:id/productTV",
    });
    expect(cartHeader.text).toContain("My Cart");

    // Verify item is inside the cart
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/titleTV" });
    const cartItem = await device.info({
      res: "com.saucelabs.mydemoapp.android:id/titleTV",
    });
    expect(cartItem.text).toContain("Sauce Labs Backpack");

    // Tap Proceed To Checkout
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/cartBt" });
    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/cartBt" });

    // login Module Handle
    try {
      await device.wait(
        { res: "com.saucelabs.mydemoapp.android:id/loginBtn" },
        { timeout: 3000 },
      );
      await device.fill(
        { res: "com.saucelabs.mydemoapp.android:id/nameET" },
        "bod@example.com",
      );
      await device.fill(
        { res: "com.saucelabs.mydemoapp.android:id/passwordET" },
        "10203040",
      );
      await device.tap({ res: "com.saucelabs.mydemoapp.android:id/loginBtn" });
      console.log("User logged in successfully during checkout");
    } catch (error) {
      console.log("User is already logged in");
    }

    // Verify navigation to Shipping address screen
    await device.wait({
      res: "com.saucelabs.mydemoapp.android:id/enterShippingAddressTV",
    });
    const addressHeader = await device.info({
      res: "com.saucelabs.mydemoapp.android:id/enterShippingAddressTV",
    });
    expect(addressHeader.text).toContain("Enter a shipping address");

    // Fill Shipping Address
    await device.fill(
      { res: "com.saucelabs.mydemoapp.android:id/fullNameET" },
      "Huzaifa Waheed",
    );
    await device.fill(
      { res: "com.saucelabs.mydemoapp.android:id/address1ET" },
      "Main Mall Rd",
    );
    await device.fill(
      { res: "com.saucelabs.mydemoapp.android:id/cityET" },
      "Rawalpindi",
    );
    await device.fill(
      { res: "com.saucelabs.mydemoapp.android:id/stateET" },
      "Punjab",
    );
    await device.fill(
      { res: "com.saucelabs.mydemoapp.android:id/zipET" },
      "46000",
    );
    await device.fill(
      { res: "com.saucelabs.mydemoapp.android:id/countryET" },
      "Pakistan",
    );
    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/paymentBtn" });

    // Verify navigation to Payment Method Screen
    await device.wait({
      res: "com.saucelabs.mydemoapp.android:id/enterPaymentMethodTV",
    });
    const paymentHeader = await device.info({
      res: "com.saucelabs.mydemoapp.android:id/enterPaymentMethodTV",
    });
    expect(paymentHeader.text).toContain("Enter a payment method");

    // Fill Payment Details
    await device.fill(
      { res: "com.saucelabs.mydemoapp.android:id/nameET" },
      "Huzaifa Waheed",
    );
    await device.fill(
      { res: "com.saucelabs.mydemoapp.android:id/cardNumberET" },
      "325812657568789",
    );
    await device.fill(
      { res: "com.saucelabs.mydemoapp.android:id/expirationDateET" },
      "03/28",
    );
    await device.fill(
      { res: "com.saucelabs.mydemoapp.android:id/securityCodeET" },
      "123",
    );
    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/paymentBtn" });

    // Verify navigation to Review Order screen and Place Order
    await device.wait({
      res: "com.saucelabs.mydemoapp.android:id/enterShippingAddressTV",
    });
    const reviewHeader = await device.info({
      res: "com.saucelabs.mydemoapp.android:id/enterShippingAddressTV",
    });
    expect(reviewHeader.text).toContain("Review your order");

    // Tap "Place Order" button
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/paymentBtn" });
    await device.tap({ res: "com.saucelabs.mydemoapp.android:id/paymentBtn" });

    // Verify navigation to Checkout Complete screen
    await device.wait({ res: "com.saucelabs.mydemoapp.android:id/completeTV" });
    const completeMessage = await device.info({
      res: "com.saucelabs.mydemoapp.android:id/completeTV",
    });
    expect(completeMessage.text).toContain("Checkout Complete");
  });
});
