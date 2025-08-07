[![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.16763281.svg)](https://doi.org/10.5281/zenodo.16763281)
# Reproduction Package: Energy, Time, and Carbon Efficiency Study

This repository contains all scripts, configurations, and artifacts necessary to reproduce the experiments from the paper "A Comparative Study on Energy, Time, and Carbon Efficiency of Web Application Technology Stacks". Below you will find instructions for setting up and running the tests.

## 📁 Repository Structure

### `/cypress` - Automated testing files
- **`/e2e`** - Test scripts by technology stack
  - `angular+django/` - Angular with Django tests
  - `kvision+springboot/` - KVision with Spring Boot tests
  - `react+rubyonrails/` - React with Ruby on Rails tests
### `/node_modules` - Node.js dependencies for Cypress

### `/results_sheets` - Measurement results
  - `angular+django/` - Angular with Django results
  - `kvision+springboot/` - KVision with Spring Boot results
  - `react+rubyonrails/` - React with Ruby on Rails results
  - `Analise geral (todas as implementações)` - Results from all test scenarios across the 3 technology stacks
## 📄 Key Files

| File | Purpose |
|------|---------|
| `codeCarbon_cypress.py` | Main test runner that:<br>• Coordinates Cypress tests<br>• Measures energy/emissions via CodeCarbon<br>• Generates result files |
| `List_of_disabled_services_in_Ubuntu_22.04.txt` | Documents Ubuntu services disabled during testing |

## ⚙️ Prerequisites
- **OS**: Ubuntu 22.04 LTS (recommended)
- **Python**: ≥3.8
- **Node.js**: ≥16.x
- **Dependencies**:
  ```bash
  pip install codecarbon

## 🚀 Setup & Execution

**System Preparation**
- Disable services listed in List_of_disabled_services_in_Ubuntu_22.04.txt
- Disable Bluetooth/Wi-Fi/system updates
- Clone the repository from any of the [RealWorld App implementation sets](https://codebase.show/projects/realworld). For example: [Kvision + SpringBoot](https://github.com/rjaros/kvision-realworld-example-app-fullstack)
- Reboot and wait 3 minutes before testing
- Start the servers
  
**Automated Run**

⚠️ You must run the script as an administrator for CodeCarbon to properly access RAPL.
  ```bash

  sudo python codeCarbon_cypress.py
