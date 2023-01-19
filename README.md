# Interview Scheduler
### Wesley Matthee LHL

---

## Project Desrciption

The interview scheduler is an web application that tracks student interviews built with the latest tools to optimize ones user experience! We utilaize React's bult-in and custom hooks that allows user to add, edit, and delete appointments in real time! Data is stored by the API server using PSQL (PostgreSQL. Using JSON the client application is able to communicate with the API server over HTTP in a JSON format. Quality control is important, so this project follows best practicies of TDD (Test Driven Development), where individual components are tested in isloation and End-To-End testing is preformed!

---
### Project Features
- Appointment days (Monday to Friday) are displayed and colour-coordinated depending on availability
- The days show the number of slots available as a snapshot of the week as well as updates as appointments are scheduled, rescheduled or deleted!
- A user can switch between days and see detailed information
- Booked and available slots are clearly differentiated
- A user can book interviews by typing in a student name and clicking on an interviewer from a list of interviewers
- A user can change the details of an existing interview by pressing the edit icon
- A user can cancel an existing interview, a message in the appointment will ask to confirm the action before permanently deleting an interview as well as display 

---
## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
