## Adult Home Care Management System
Overview
The Adult Home Care Management System is a comprehensive web application designed to manage employee shifts and payroll for a multi-branch adult home care company. This system provides tools for employee management, shift scheduling, and payroll calculation across multiple care facilities.

## Features
Core Functionality
Multi-branch Support: Manage three distinct care facilities (Janice AFH, Hawthorne AFH, Southhill AFH) under one parent company

Employee Management: Track care workers with employment status, hourly wages, and branch assignment

Shift Scheduling: Assign and track shifts with start/end times and shift notes

Payroll Calculation: Automatically calculate pay based on hours worked and hourly wages

## User Experience
Responsive Design: Fully functional on desktop, tablet, and mobile devices

Intuitive Interface: Clean, professional UI tailored for the care industry

Role-based Access: Secure authentication system

## Technical Stack
Frontend
Framework: React.js

State Management: Context API

Styling: CSS Modules

Routing: React Router

Calendar: react-calendar

## Backend 
Framework: Python with Flask

Database: PostgreSQL (separate databases per branch)

Authentication: JWT

Installation
Prerequisites
Node.js (v16 or higher)

npm (v8 or higher)

## Setup Instructions
Clone the repository:

bash
git clone https://github.com/your-repo/room_and_care.git
cd room_and_care/frontend
Install dependencies:

bash
npm install
Configure environment variables:
Create a .env file in the frontend directory with the following variables:

text
REACT_APP_API_BASE_URL=http://localhost:5000
REACT_APP_ENV=development
Start the development server:

bash
npm start
Open your browser to:

text
http://localhost:3000
##Project Structure
text
frontend/
├── src/
│   ├── assets/            # Static assets and styles
│   ├── components/        # Reusable UI components
│   │   ├── auth/          # Authentication components
│   │   ├── common/        # Shared components
│   │   ├── employees/     # Employee management
│   │   ├── shifts/        # Shift management
│   │   └── payroll/       # Payroll components
│   ├── context/           # Application state management
│   ├── hooks/             # Custom React hooks
│   ├── pages/             # Main application views
│   ├── services/          # API service modules
│   ├── utils/             # Utility functions
│   ├── App.jsx            # Main application component
│   └── index.jsx          # Application entry point
##Available Scripts
In the project directory, you can run:

npm start
Runs the app in development mode.
Open http://localhost:3000 to view it in your browser.

npm test
Launches the test runner in interactive watch mode.

npm run build
Builds the app for production to the build folder.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

Deployment
For production deployment:

Build the application:

bash
npm run build
Deploy the contents of the build folder to your hosting service.

## Environment Variables
The following environment variables can be configured:

Variable	Description	Default
REACT_APP_API_BASE_URL	Base URL for API requests	http://localhost:5000
REACT_APP_ENV	Application environment (development/production)	development
Contributing
Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

## License
This project is licensed under the [Company Name] Proprietary License - see the LICENSE file for details.

## Support
For support or questions, please contact:

Technical Support: tech-support@roomandcare.com

Administrative Questions: admin@roomandcare.com

