# MediPlus Pharmacy - Mobile Application QA Suite

### Enterprise QA Testing Sandbox & Test Artifacts Repository

[![QA Status](https://img.shields.io/badge/QA%20Status-Completed%20%2F%20Handed%20Over-brightgreen.svg)](#)
[![Release Verdict](https://img.shields.io/badge/Release%20Verdict-CONDITIONAL%20NO--GO-orange.svg)](#)
[![Android Regression Suite](https://github.com/huzaifawaheed2/mediplus-qa/actions/workflows/qa.yml/badge.svg)](https://github.com/huzaifawaheed2/mediplus-qa/actions/workflows/qa.yml)
[![Target Platform](https://img.shields.io/badge/Platform-Android%2013%20%7C%20Android%2011-3DDC84.svg?logo=android&logoColor=white)](#)
[![Virtual Devices](<https://img.shields.io/badge/Devices-Pixel%204%20(API%2033)%20%7C%20Nexus%205X%20(API%2030)-4285F4.svg?logo=google&logoColor=white>)](#)
[![Stand-in App](https://img.shields.io/badge/Sandbox%20App-Sauce%20Labs%20v2.3.0-EA4335.svg)](#)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](#)

---

## Project Overview

- **Client Organization:** MediPlus Pharmacy
- **Project:** Mobile Application Quality Assurance & Test Strategy
- **Lead SQA Engineer:** Muhammad Huzaifa Waheed
- **Supervising Body:** Ezitech Software House

MediPlus Pharmacy is digitalizing its healthcare services by developing a native Android mobile application to enable prescription refills, medication catalog browsing, and store location services. As the client's proprietary mobile build is currently under active development, this repository establishes the official **QA Testing Sandbox** using the industry-standard **Sauce Labs My Demo App (v2.3.0)** as a representative proxy.

This sandbox enables the QA team to define quality gates, build comprehensive test matrices, conduct exploratory testing, and establish automated regression pipelines before the final production rollout.

---

## Repository Architecture

```text
mediplus-qa/
├── .github/
│   └── workflows/
│       └── qa.yml                                                  # GitHub Actions CI workflow (Android Emulator + Playwright)
├── app/
│   └── mda-2.3.0-27.apk                                            # Stand-in APK for sandbox execution
├── docs/                                                           # Quality Assurance documentation & artifacts
│   ├── overview/
│   │   ├── Task1_MediPlus_Pharmacy_QA_Project_Overview.pdf         # Executive project overview brief
│   │   ├── MediPlus_Exploratory_Testing_Charter_Notes.pdf          # 90-min exploratory testing charter & session notes
│   │   ├── MediPlus_Automated_Regression_Suite_and_CI_Pipeline.pdf # Automated Playwright regression & CI pipeline architecture
│   │   └── MediPlus_QA_Executive_Summary_Report.pdf                # Final C-level QA handover & quality release report
│   ├── screenshots/
│   │   ├── emulator_setup.png                                      # Pixel 4 API 33 emulator verification proof
│   │   ├── Playwright_Android_CI_Passed.png                        # GitHub Actions CI 100% green execution proof
│   │   └── Bug_Screenshots/                                        # Visual evidence for logged defects (BUG_001 to BUG_008)
│   └── test-cases/
│       └── MediPlus_Test_Cases.xlsx                                # Master QA workbook (Test Cases, Execution Matrix, Bug Log)
├── tests/                                                          # Automated Playwright regression test suite
│   ├── 01_login.spec.js                                            # TC_AUTH_001: Authentication regression test
│   ├── 02_product_list.spec.js                                     # TC_PROD_001: Catalog & product details regression test
│   ├── 03_add_to_cart.spec.js                                      # TC_CART_001: Add-to-cart & badge counter regression test
│   └── 04_checkout.spec.js                                         # TC_CHK_001: End-to-end checkout & order placement test
├── .gitignore                                                      # Excluded directories (node_modules, reports, artifacts)
├── package.json                                                    # Node.js project manifest & execution scripts
├── playwright.config.js                                            # Playwright test runner configuration
└── README.md                                                       # Repository documentation & QA guide
```

---

## QA Sandbox & Test Environment Architecture

The testing sandbox incorporates multiple virtual device profiles to validate backward compatibility, responsive scaling, and OS fragmentation across Android versions:

| Environment Parameter     | Primary Device (Modern)                     | Secondary Device (Legacy)                   |
| :------------------------ | :------------------------------------------ | :------------------------------------------ |
| **Device Model**          | Google Pixel 4                              | Google Nexus 5X                             |
| **Android OS Version**    | Android 13.0 (Tiramisu)                     | Android 11.0 (R)                            |
| **API Level**             | API 33                                      | API 30                                      |
| **Screen Specifications** | 5.7" Display (1080 x 2280 px, 440 dpi)      | 5.2" Display (1080 x 1920 px, 420 dpi)      |
| **CPU Architecture**      | x86_64 (Hardware Acceleration)              | x86 (Hardware Acceleration)                 |
| **Host Tool**             | Android Studio Device Manager               | Android Studio Device Manager               |
| **Target Application**    | Sauce Labs My Demo App (`mda-2.3.0-27.apk`) | Sauce Labs My Demo App (`mda-2.3.0-27.apk`) |

### Sandbox Setup & Execution

1. Clone the repository:
   ```bash
   git clone https://github.com/huzaifawaheed2/mediplus-qa.git
   cd mediplus-qa
   ```
2. Launch either the **Pixel 4 (API 33)** or **Nexus 5X (API 30)** virtual device in Android Studio.
3. Install the sandbox binary:
   ```bash
   adb install app/mda-2.3.0-27.apk
   ```

---

## Test Case Design & Functional Coverage Matrix

A comprehensive 15-scenario test case matrix was designed covering both primary happy-path journeys and critical negative validation paths across 5 core mobile user flows:

- **Authentication Flow (TC_AUTH_001 – TC_AUTH_003):** Verified successful login with valid credentials, error messaging for invalid passwords, and access denial for locked-out accounts.
- **Product & Medication Browsing (TC_PROD_001 – TC_PROD_004):** Verified catalog grid rendering, detailed product page navigation, and multi-criteria sorting (Name A-Z/Z-A, Price Low-to-High/High-to-Low).
- **Cart Management (TC_CART_001 – TC_CART_003):** Verified adding items to the cart, real-time cart badge counter increments, item quantity adjustments (+/-), and cart empty-state handling.
- **Checkout Flow (TC_CHK_001 – TC_CHK_003):** Verified transition to checkout, shipping address input validation, payment details processing, and order confirmation generation.
- **Error Handling & Negative Testing (TC_ERR_001 – TC_ERR_002):** Verified mandatory field validation triggers for blank address inputs and rejected transactions for invalid/expired payment cards.

---

## Multi-Device Test Execution & Defect Lifecycle Management

All 15 test scenarios were executed across both configured environments (Pixel 4 API 33 vs. Nexus 5X API 30). Comparative execution yielded **11 Passed** test cases and **4 Critical Failures**, alongside observed UI performance latency during item removal on the legacy Nexus 5X device.

### Scripted Defect Inventory (IEEE 829 / ISTQB Standard)

A formal Bug Report Log was assembled tracking initial functional defects:

|  Defect ID  |  Linked TC  |   Severity   | Priority | Defect Summary & Observed Impact                                                                                             | Status |
| :---------: | :---------: | :----------: | :------: | :--------------------------------------------------------------------------------------------------------------------------- | :----: |
| **BUG_001** | TC_AUTH_002 | **Critical** |   High   | **Authentication Bypass:** System accepts incorrect passwords and logs users in without validation error.                    | `OPEN` |
| **BUG_002** | TC_PROD_001 |  **Medium**  |  Medium  | **Developer Syntax Exposure:** Product titles leak raw test code syntax `Test.allTheThings()`.                               | `OPEN` |
| **BUG_003** | TC_PROD_001 |   **Low**    |   Low    | **Taxonomy Inconsistency:** Primary variants omit color labels, and long-sleeve pullovers are mislabeled as T-Shirts.        | `OPEN` |
| **BUG_004** | TC_PROD_002 | **Critical** |   High   | **Application Hard Crash:** Tapping any product beyond initial viewport causes immediate application crash to home launcher. | `OPEN` |
| **BUG_005** | TC_ERR_002  |  **Major**   |   High   | **Payment Length Bypass:** System processes checkout successfully with short, invalid 5-digit card numbers.                  | `OPEN` |

---

## Exploratory Testing Charter & Boundary Defect Analysis

A structured 90-minute timeboxed exploratory testing session was conducted on the **Google Pixel 4 (Android 13 / API 33)** emulator, shifting focus from scripted requirements to **unexpected user actions**, aggressive input boundary testing, and session lifecycle interruptions.

### Charter Objectives & Heuristics

- **Input Boundary Tampering:** Tested multi-byte UTF-8, script fragments, emoji injection, and boundary character lengths across shipping address forms.
- **Payment Gateway Boundaries:** Tested arbitrary non-standard card digit lengths, Luhn algorithm compliance, and past expiration dates.
- **Session State Isolation:** Evaluated cart data persistence and isolation across user account logout, re-authentication, and process termination.

### Exploratory Defect Log Extension

|  Defect ID  |  Severity  | Priority | Defect Summary & Impact                                                                                                                                                                             | Status |                                               Visual Evidence                                                |
| :---------: | :--------: | :------: | :-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :----: | :----------------------------------------------------------------------------------------------------------: |
| **BUG_006** | **Medium** |  Medium  | **Emoji & Special Character Injection in Address:** Shipping fields accept multi-byte emojis (`Huzaifa😀#`) without sanitization, propagating unvalidated strings directly into the payment screen. | `OPEN` | [`BUG_006.png`](./docs/screenshots/Bug_Screenshots/BUG_006_Emoji_Special_Characters_In_Shipping_Address.png) |
| **BUG_007** |  **High**  |   High   | **Expired Expiry Dates & Arbitrary Card Lengths Accepted:** Payment gateway accepts past expiration dates (`03/25` in 2026) and arbitrary lengths, bypassing client validation.                     | `OPEN` |    [`BUG_007.png`](./docs/screenshots/Bug_Screenshots/BUG_007_Expired_Card_Date_And_Length_Accepted.png)     |
| **BUG_008** |  **High**  |   High   | **Cart Session Leak Across User Logout:** Logging out invalidates the user auth token but fails to clear active cart cache, exposing prior user cart items to guest sessions.                       | `OPEN` |      [`BUG_008.png`](./docs/screenshots/Bug_Screenshots/BUG_008_Cart_Session_Persists_After_Logout.png)      |

The complete exploratory charter, timebox breakdown, heuristics, and engineering recommendations are documented in [`docs/overview/MediPlus_Exploratory_Testing_Charter_Notes.pdf`](./docs/overview/MediPlus_Exploratory_Testing_Charter_Notes.pdf).

The complete master workbook containing test design, dual-device execution results, and full defect logs is maintained in [`docs/test-cases/MediPlus_Test_Cases.xlsx`](./docs/test-cases/MediPlus_Test_Cases.xlsx). Visual proofs for all defects are archived under [`docs/screenshots/Bug_Screenshots/`](./docs/screenshots/Bug_Screenshots/).

---

## Automated Risk-Based Regression Suite (Playwright & CI/CD)

As part of **Phase 5 (Automated Quality Gating & Continuous Verification)**, a comprehensive risk-based automated regression suite was assembled using **Playwright Mobile** (`@playwright/test` v1.65.0) over native Android ADB / UIAutomator. The suite executes automatically on every `push` and `pull_request` via **GitHub Actions** on hosted Ubuntu runners equipped with hardware-accelerated (KVM) Android Emulators (API 33).

### Automated Regression Test Inventory

| Test Spec File                                                     | Test Case ID  | User Journey Flow   | Verification Focus & Assertions                                                                                                                                  | Execution Status |
| :----------------------------------------------------------------- | :------------ | :------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------- | :--------------: |
| [`tests/01_login.spec.js`](./tests/01_login.spec.js)               | `TC_AUTH_001` | Authentication      | Valid login credentials (`bod@example.com`), session token creation, and logout menu presence                                                                    |     `PASSED`     |
| [`tests/02_product_list.spec.js`](./tests/02_product_list.spec.js) | `TC_PROD_001` | Catalog & Details   | Catalog grid rendering, product title assertion, detail page transition, and price verification                                                                  |     `PASSED`     |
| [`tests/03_add_to_cart.spec.js`](./tests/03_add_to_cart.spec.js)   | `TC_CART_001` | Cart Management     | Add-to-cart button trigger, real-time cart badge counter increment (`1`), and cart item quantity assertion                                                       |     `PASSED`     |
| [`tests/04_checkout.spec.js`](./tests/04_checkout.spec.js)         | `TC_CHK_001`  | End-to-End Checkout | Complete purchase flow: Product add ➔ Cart review ➔ Dynamic auth handle ➔ Shipping address input ➔ Payment processing ➔ Order confirmation (`Checkout Complete`) |     `PASSED`     |

### CI/CD Workflow Pipeline (`.github/workflows/qa.yml`)

The continuous integration pipeline is defined in [`.github/workflows/qa.yml`](./.github/workflows/qa.yml) and executes the following automated lifecycle on `ubuntu-latest`:

1. **Repository Checkout & Setup:** Checks out repository, provisions Node.js 20 LTS, and installs pinned dependencies via `npm ci`.
2. **KVM Hardware Acceleration:** Configures Linux kernel udev rules (`/dev/kvm`) granting full virtualization permissions for high-speed emulator execution.
3. **Automated Emulator Provisioning:** Leverages `reactivecircus/android-emulator-runner@v2` to spin up a headless Pixel Android 13 (API 33) AVD.
4. **Binary Deployment & Test Execution:** Installs `app/mda-2.3.0-27.apk` onto the booted virtual device and triggers `npm test`.
5. **Execution Verification:** Validated 100% green pass in 3m 55s (Workflow Run `#44158084542`). Visual proof archived in [`docs/screenshots/Playwright_Android_CI_Passed.png`](./docs/screenshots/Playwright_Android_CI_Passed.png).
6. **Artifact Publishing:** Archives full HTML test execution reports and traces (`playwright-report/`) retained for 7 days.

### Running Regression Tests Locally

Ensure the Android emulator is active, then execute:

```bash
# Run all automated regression tests
npm test

# Run a specific test spec
npx playwright test tests/01_login.spec.js
npx playwright test tests/02_product_list.spec.js
npx playwright test tests/03_add_to_cart.spec.js
npx playwright test tests/04_checkout.spec.js
```

---

## Client Deliverables Handover Package & Executive Summary (Phase 6)

To fulfill the final client deliverable (**Phase 6: Quality Governance & Project Handover**), all testing artifacts, execution matrices, exploratory session reports, automated regression pipelines, and C-level executive summaries have been compiled into a formal public client package.

- **Client Handover Package (Google Drive):** [MediPlus QA Package](https://drive.google.com/drive/folders/1ugW4e5PfBL_1yI_kP9Du3qCiKA3tLI5A?usp=drive_link)
- **Executive Summary & Release Quality Report (PDF):** [`docs/overview/MediPlus_QA_Executive_Summary_Report.pdf`](./docs/overview/MediPlus_QA_Executive_Summary_Report.pdf)
- **Automated Regression Suite Architecture (PDF):** [`docs/overview/MediPlus_Automated_Regression_Suite_and_CI_Pipeline.pdf`](./docs/overview/MediPlus_Automated_Regression_Suite_and_CI_Pipeline.pdf)

### Release Recommendation & Quality Gate Verdict

> **FINAL QUALITY VERDICT: CONDITIONAL NO-GO FOR PRODUCTION RELEASE**
>
> While core user journeys achieved a **73.3% Pass Rate** across 15 structured test cases and a **100% Green Pass Rate** on automated CI regression pipelines, the application is **NOT production-ready**.
>
> Production deployment is strictly blocked until developers resolve **BUG_001** (Critical Authentication Password Bypass) and **BUG_004** (Critical Catalog Crash on Deep Scroll).

| Metric Category                       | Count / Value       | Status / Evaluation                           |
| :------------------------------------ | :------------------ | :-------------------------------------------- |
| **Total Test Scenarios Executed**     | 15 Scenarios        | 11 Passed, 4 Failed (73.3% Pass Rate)         |
| **Total Confirmed Defects Logged**    | 8 Bugs              | 2 Critical, 3 Major, 2 Medium, 1 Low          |
| **Automated Playwright CI Suite**     | 4 Tests (100% Pass) | Ubuntu CI Runner (Run #44158084542 in 3m 55s) |
| **Formal Client Deliverable Package** | 6 Core Artefacts    | Published to Public Google Drive              |

---

## QA Engineering Milestones & Deliverables

- [x] **Milestone 1:** QA Sandbox Architecture Setup & Strategy Overview Brief
- [x] **Milestone 2:** Functional Test Case Matrix Design & User Flow Mapping
- [x] **Milestone 3:** Multi-Device Test Execution & Defect Lifecycle Management
- [x] **Milestone 4:** 90-Minute Timeboxed Exploratory Testing Charter & Boundary Analysis
- [x] **Milestone 5:** Risk-Based Regression Suite & GitHub Actions CI/CD Pipeline
- [x] **Milestone 6:** Final QA Deliverables Package Handover & Stakeholder Quality Report

---

## Author

### Muhammad Huzaifa Waheed

SQA Engineer | Quality Assurance & Test Automation

#### Connect With Me

- **GitHub:** [huzaifawaheed2](https://github.com/huzaifawaheed2)
- **LinkedIn:** [Muhammad Huzaifa Waheed](https://www.linkedin.com/in/muhammad-huzaifa-waheed-70043338b)
- **Email:** [huzaifawaheed1258@gmail.com](mailto:huzaifawaheed1258@gmail.com)

---

## Acknowledgements

This repository contains the complete quality engineering deliverables completed for the client **MediPlus Pharmacy** in collaboration with **Ezitech Software House**.

The project demonstrates practical applications of:

- Mobile Application Quality Assurance & Sandbox Environment Setup
- Test Plan & Test Case Matrix Design
- Multi-Device Execution & Defect Reporting
- Exploratory Testing Charters
- Playwright / Automated Regression Suites via GitHub Actions CI/CD
- End-to-End QA Deliverable Reporting

⭐ If you found this repository useful, consider giving it a star!
