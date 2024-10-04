# Softmania Timesheet Application

### Visit Live preview : [Softmania Timesheet App](https://softmania-timesheet.web.app/)

![image](https://github.com/user-attachments/assets/cdd6535a-7e4c-45e1-8f67-fb6401d1a230)


## Overview
Softmania is a timesheet application designed to track and manage work hours for employees. This application allows users to log hours, view summaries, and generate reports.

## Features
- User authentication and authorization
- Dashboard with summary of hours worked
- Log work hours with descriptions
- View and edit logged hours
- Generate and download reports
- Admin panel for managing users and settings

## Technologies Used
- Frontend: React, Vite
- Backend: Express.js, Node.js
- Database: MongoDB

## Getting Started

### Prerequisites
- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/SoftManiaTech/Timesheet-App.git
    cd Timesheet-App
    ```

2. Install frontend dependencies:
    ```bash
    npm install
    npm run dev
    ```

3. Set up MongoDB:
    - Ensure MongoDB is running and accessible

4. Configure environment variables:
    - Create a `.env` file in the root directory and add the necessary configurations.

## Usage

### Logging In
1. Navigate to the login page
2. Enter your credentials
3. Click 'Login'

### Logging Work Hours
1. Navigate to the timesheet page
2. Click 'Add Entry'
3. Enter the date, hours worked, and a description
4. Click 'Save'

### Viewing Reports
1. Navigate to the reports page
2. Select the date range
3. Click 'Generate Report'
4. Download the report as a PDF or Excel file

## Contact
For any inquiries or feedback, please contact us at [info@softmania.com](mailto:kaliyappanr.tech@gmail.com).


## Release Notes
### v1.0.0 - First Stable Version

### v1.0.0 Features:

* **Website Access:**
  * Users can navigate to the website and start tracking their timesheets.

* **User Authentication:**
  * Google Login for fast and secure access.
  * Manual Signup option with name, email, and password registration.

* **Timesheet Submission:**
  * Input fields for Name, Date, Attendance, Work Hours, Topics, and Description.
  * Confirmation message after successful submission.

* **Admin Panel:**
  * View, edit, and delete submitted timesheets.
  * Generate reports in PDF, Excel, or CSV formats by selecting a date range.

* **Team Management:**
  * Add, edit, and delete team members with Name, Role, and Contact Info.
  * Verify pagination functionality in the team management section.

* **Logout Functionality:**
  * Secure logout from the admin panel, redirecting users back to the login page.

* **Responsive Design:**
  * Fully responsive design ensuring functionality across different devices.

### Deployment:

* **Firebase Hosting:**
  * The application has been deployed using Firebase, ensuring fast and secure web hosting.
  * Navigate to [SoftMania Timesheet](https://softmania-timesheet.web.app) for live access to the platform.

### v1.0.1:

* **Google auth name fetch:**
  * Auto-retrieve Google or login name for verification as completed [#21](https://github.com/SoftManiaTech/Timesheet-App/pull/21)
