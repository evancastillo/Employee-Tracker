const inquirer = require('inquirer');
const mysql = require('mysql2/promise');
require('dotenv').config();
const { Departments, Roles, Employees } = require('./lib');

let db;

const mainPrompts = [
  {
    type: 'list',
    name: 'action',
    loop: false,
    message: 'Home Menu',
    loop: false,
    pageSize: 20,
    choices:
      [
        'View employees',
        'Add an employee',
        'Update an employee',
        'Delete an employee',
        'View departments',
        'View department budget',
        'Add a department',
        'Delete a department',
        'View roles',
        'Add a role',
        'Delete a role',
        'Quit',
      ]
  }
];

function mainMenu() {
  console.log('');
  inquirer.prompt(mainPrompts)
    .then(actionData => {
      switch (actionData.action) {
        case 'View employees':
          Employees.viewEmployees(db).then(mainMenu);
          break;

        case 'Add an employee':
          Employees.addEmployee(db).then(mainMenu);
          break;

        case 'Update an employee':
          Employees.updateEmployee(db).then(mainMenu);
          break;

        case 'Delete an employee':
          Employees.deleteEmployee(db).then(mainMenu);
          break;

        case 'View departments':
          Departments.viewDepartments(db).then(mainMenu);
          break;

        case 'View department budget':
          Departments.viewBudget(db).then(mainMenu);
          break;

        case 'Add a department':
          Departments.addDepartment(db).then(mainMenu);
          break;

        case 'Delete a department':
          Departments.deleteDepartment(db).then(mainMenu);
          break;

        case 'View roles':
          Roles.viewRoles(db).then(mainMenu);
          break;

        case 'Add a role':
          Roles.addRole(db).then(mainMenu);
          break;

        case 'Delete a role':
          Roles.deleteRole(db).then(mainMenu);
          break;

        default:
          console.log('\nHave a nice day!\n');
          process.exit(0);
      }
    })
    .catch(error => {
      console.log(error);
    });
}


mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: 'employees'
})
  .then(conn => {
    db = conn;
    console.clear();
    console.log(`
   EMPLOYEE TRACKER`);
    mainMenu();
  });
