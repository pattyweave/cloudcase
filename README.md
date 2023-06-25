# Onboarding Form and Tax Calculation Application 

## Description
This project provides a design and implementation of a new staff member onboarding form. It captures necessary information for new employees and uses this information to calculate their annual tax and retirement contributions based on provided rates. The implementation language is JavaScript and it is integrated into a HTML form. 

## Table of Contents
1. [Onboarding Form Design](#step-1-onboarding-form-design)
2. [Design Choices](#step-2-design-choices)
3. [Tax and Retirement Calculation Program](#step-3-tax-and-retirement-calculation-program)
4. [Tests for the Calculation Program](#step-4-tests-for-the-calculation-program)

## Step 1: Onboarding Form Design
The onboarding form is designed to capture the following information: 

1. Full Name
2. Email Address
3. Date of Birth
4. Address
5. Annual Salary
6. Retirement Contribution Percentage (minimum of 10%)

Each piece of information has its own input field with appropriate type. The form also has a submit button which initiates the calculations and displays the results. 

## Step 2: Design Choices
These information fields were chosen based on standard onboarding processes and for the requirements of the calculation program. 

- Full Name, Email Address, Date of Birth, and Address are basic information needed when onboarding a new staff member. 
- The Annual Salary and Retirement Contribution Percentage are needed for calculating the annual tax and retirement contributions. 

We have employed responsive design principles to ensure the form can be effectively viewed and filled on various device sizes. 

## Step 3: Tax and Retirement Calculation Program
The calculation program is implemented as a JavaScript function that takes an annual salary and retirement contribution percentage as parameters. It calculates the tax based on the provided salary, following the tax brackets specified. It also calculates the retirement contributions based on the given percentage of the salary.

The tax and retirement contribution calculations are returned as an object, making it easy to access and use these values in the user interface. 

## Step 4: Tests for the Calculation Program
A number of tests have been written to validate the calculation program. These tests use different salary values, ensuring coverage across the different tax brackets. Different retirement contribution percentages are also used to confirm correct calculation of the retirement contributions. 

These tests are executed using the console.assert() function in JavaScript, checking that the function returns the expected results for each test case. If any of these tests fail, a message will be printed to the console, allowing the issue to be diagnosed and fixed.

### Running the tests

To run the tests, simply open the developer console in your browser when running the application. If any tests fail, a message will be displayed in the console.

### Conclusion

This application provides an efficient way to onboard new staff members and immediately provide them with important financial information, enhancing the onboarding process.