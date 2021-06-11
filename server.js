const mysql = require('mysql2');
const inquirer = require('inquirer');
const cTable = require('console.table');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3001,
    user: 'root',
    password: 'Evanwow1992',
    database: 'employees'
});

const messagePrompts = {
    viewAllDepartments: "View all Departments",
    viewAllRoles: "View all Roles",
    viewAllEmployees: "View all Employees",
    addDepartment: "Add a Department",
    addRoll: "Add a Role",
    addEmployee: "Add an Employee",
    updateRole: "Update an Employee Role",
    exit: "Exit"
};