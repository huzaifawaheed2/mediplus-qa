# MediPlus Pharmacy - Mobile Application QA Suite

### Enterprise QA Testing Sandbox & Test Artifacts Repository

[![QA Status](https://img.shields.io/badge/QA%20Status-In%20Progress-0052CC.svg)](#)
[![Target Platform](<https://img.shields.io/badge/Platform-Android%2013%20(API%2033)-3DDC84.svg?logo=android&logoColor=white>)](#)
[![Virtual Device](https://img.shields.io/badge/Device-Pixel%204-4285F4.svg?logo=google&logoColor=white)](#)
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
├── app/
│   └── mda-2.3.0-27.apk                                      # Stand-in APK for sandbox execution
├── docs/                                                     # Quality Assurance documentation & artifacts
│   ├── overview/
│   │   └── Task1_MediPlus_Pharmacy_QA_Project_Overview.pdf   # Executive project overview brief
│   ├── screenshots/
│   │   └── emulator_setup.png                                # Pixel 4 API 33 emulator verification proof
│   └── test-cases/
│       └── MediPlus_Test_Cases.xlsx                          # 15-scenario functional & negative test matrix
└── README.md                                                 # Repository documentation & QA guide
```

---

## QA Sandbox & Test Environment Architecture

The testing environment is configured to mirror real-world customer device specifications:

- **Virtual Device:** Google Pixel 4
- **OS Version:** Android 13.0 (Tiramisu)
- **API Level:** API 33
- **Screen Resolution:** 1080 x 2280 px (440 dpi, x86_64 architecture)
- **Host Platform:** Android Studio Virtual Device Manager (Hardware Acceleration enabled)
- **Test Binary:** `mda-2.3.0-27.apk` (located in [`/app`](./app/))
- **Strategy Document:** Available in [`docs/overview/Task1_MediPlus_Pharmacy_QA_Project_Overview.pdf`](./docs/overview/Task1_MediPlus_Pharmacy_QA_Project_Overview.pdf)

### Sandbox Setup & Verification

1. Clone the repository:
   ```bash
   git clone https://github.com/huzaifawaheed2/mediplus-qa.git
   cd mediplus-qa
   ```
2. Launch the **Pixel 4 (API 33)** virtual device in Android Studio.
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

The full matrix is versioned in [`docs/test-cases/MediPlus_Test_Cases.xlsx`](./docs/test-cases/MediPlus_Test_Cases.xlsx) and actively maintained via Google Sheets.

---

## QA Engineering Milestones & Deliverables

- [x] **Milestone 1:** QA Sandbox Architecture Setup & Strategy Overview Brief
- [x] **Milestone 2:** Functional Test Case Matrix Design & User Flow Mapping
- [ ] **Milestone 3:** Multi-Device Test Execution & Defect Lifecycle Management
- [ ] **Milestone 4:** 90-Minute Timeboxed Exploratory Testing Charter
- [ ] **Milestone 5:** Risk-Based Regression Suite & GitHub Actions CI/CD Pipeline
- [ ] **Milestone 6:** Final QA Deliverables Package Handover & Stakeholder Quality Report

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

This repository contains deliverables and test artifacts completed for the client **MediPlus Pharmacy** under the **Ezitech Software House SQA Program**.

The project demonstrates practical applications of:

- Mobile Application Quality Assurance & Sandbox Environment Setup
- Test Plan & Test Case Matrix Design
- Multi-Device Execution & Defect Reporting
- Exploratory Testing Charters
- Playwright / Automated Regression Suites via GitHub Actions CI/CD
- End-to-End QA Deliverable Reporting

⭐ If you found this repository useful, consider giving it a star!
