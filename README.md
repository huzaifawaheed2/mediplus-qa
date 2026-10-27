# MediPlus Pharmacy - Mobile App QA Project

### QA Sandbox & Testing Suite using Sauce Labs My Demo App as Stand-in

[![QA Status](https://img.shields.io/badge/QA%20Status-In%20Progress-0052CC.svg)](#)
[![Target Platform](<https://img.shields.io/badge/Platform-Android%2013%20(API%2033)-3DDC84.svg?logo=android&logoColor=white>)](#)
[![Virtual Device](https://img.shields.io/badge/Device-Pixel%204-4285F4.svg?logo=google&logoColor=white)](#)
[![Stand-in App](https://img.shields.io/badge/Demo%20App-Sauce%20Labs%20v2.3.0-EA4335.svg)](#)
[![Repository License](https://img.shields.io/badge/License-MIT-blue.svg)](#)

---

## Project Overview

- Client: MediPlus Pharmacy
- Project: Mobile Application Quality Assurance & Test Strategy
- Intern / SQA Engineer: Muhammad Huzaifa Waheed

MediPlus Pharmacy wants a customer-facing mobile application to allow users to view medication info, refill prescriptions, and locate nearby pharmacy stores. Because MediPlus does not currently have an existing mobile app build, this repository establishes a representative QA Testing Sandbox using the industry-standard Sauce Labs My Demo App as a stand-in application.

This sandbox is used to define end-to-end QA processes, test matrices, manual exploratory charters, regression suites, and CI/CD pipelines for MediPlus Pharmacy.

---

## Test Environment & Sandbox Configuration

- Virtual Device: Google Pixel 4
- OS Version: Android 13.0 (Tiramisu)
- API Level: API 33
- Screen Resolution: 1080 x 2280 (440 dpi)
- Architecture: x86_64
- Test Artifact / Binary: mda-2.3.0-27.apk (located in /app)

---

## Repository Structure

```text
mediplus-qa/
├── app/
│   └── mda-2.3.0-27.apk                                      # Stand-in APK for test execution
├── docs/                                                     # QA documentation & test artifacts
│   ├── overview/
│   │   └── Task1_MediPlus_Pharmacy_QA_Project_Overview.pdf   # Executive project overview brief
│   └── screenshots/                                          # Emulator verification & test evidence
└── README.md                                                 # Repository & sandbox documentation
```

---

## Sandbox Setup & Execution Guide

1. Clone the Repository:
   ```bash
   git clone https://github.com/huzaifawaheed2/mediplus-qa.git
   cd mediplus-qa
   ```
2. Launch Android Virtual Device:
   - Open Android Studio -> Device Manager.
   - Start the Pixel 4 (API 33) virtual device.
3. Install APK to Sandbox:
   ```bash
   adb install app/mda-2.3.0-27.apk
   ```
   (Or drag and drop app/mda-2.3.0-27.apk onto the running emulator screen).

---

## QA Deliverables Roadmap

- [x] Task 1: QA Project Repository Setup & Demo App Sandbox Acquisition
- [ ] Task 2: Demo App Exploration & Test Case Matrix
- [ ] Task 3: Multi-Device Test Execution & Bug Reporting
- [ ] Task 4: 90-Minute Exploratory Testing Charter
- [ ] Task 5: Risk-Based Regression Suite & GitHub Actions CI
- [ ] Task 6: Final QA Package Handover & Stakeholder Report

---

## Author

### Muhammad Huzaifa Waheed

SQA Engineer | QA Automation & Manual Testing

#### Connect With Me

- GitHub: [huzaifawaheed2](https://github.com/huzaifawaheed2)
- LinkedIn: [Muhammad Huzaifa Waheed](https://www.linkedin.com/in/muhammad-huzaifa-waheed-70043338b)
- Email: [huzaifawaheed1258@gmail.com](mailto:huzaifawaheed1258@gmail.com)

---

## Acknowledgements

This repository contains deliverables and test artifacts completed during the Ezitech Software House SQA Internship for the client MediPlus Pharmacy.

The project demonstrates practical applications of:

- Mobile Application Quality Assurance & Sandbox Environment Setup
- Test Plan & Test Case Matrix Design
- Multi-Device Execution & Defect Reporting
- Exploratory Testing Charters
- Playwright / Automated Regression Suites via GitHub Actions CI/CD
- End-to-End QA Deliverable Reporting

⭐ If you found this repository useful, consider giving it a star!
