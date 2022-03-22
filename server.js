const inquirer = require("inquirer");
const db = require("./config/connection");
require("console.table");

const {
  startApplication,
  addEmployee,
  addRole,
  addDepartment,
  roleUpdate,
} = require("./prompts/prompt");

const initialPrompt = () => {
  inquirer.prompt(startApplication).then((response) => {
    switch (response.selections) {
      case "View All Departments":
        viewDepartments();
        break;
      case "View All Roles":
        viewRoles();
        break;
      case "View All Employees":
        viewEmployees();
        break;
      case "Add a Department":
        newDepartment();
        break;
      case "Add a Role":
        newRole();
        break;
      case "Add an Employee":
        newEmployee();
        break;
      case "Update an Employee's Role":
        updateRole();
        break;
      case "Quit":
        db.end();
        break;
      default:
        db.end();
    }
  });
};

const viewDepartments = () => {
  db.query("SELECT * FROM department", (err, res) => {
    if (err) {
      console.log(err);
    } else {
      console.table(res);
      initialPrompt();
    }
  });
};

const viewRoles = () => {
  db.query("SELECT * FROM roles", (err, res) => {
    err ? console.log(err) : console.table(res);
    initialPrompt();
  });
};

const viewEmployees = () => {
  db.query("SELECT * FROM employee", (err, res) => {
    err ? console.log(err) : console.table(res);
    initialPrompt();
  });
};

const newDepartment = () => {
  inquirer.prompt(addDepartment).then((response) => {
    db.query(
      "INSERT INTO department (names) VALUES (?)",
      response.departmentNames,
      (err, res) => {
        err
          ? console.log(err)
          : console.log(
              `The ${response.departmentNames} department has been added to the database.`
            );
        initialPrompt();
      }
    );
  });
};

const newRole = () => {
  inquirer.prompt(addRole).then((response) => {
    db.query(
      `INSERT INTO roles (title, salary, department_id) VALUES (?, ?, ?)`,
      [response.title, response.salary, response.department],
      (err, res) => {
        err
          ? console.log(err)
          : console.log(
              `The ${response.title} has been added to the database.`
            );
        initialPrompt();
      }
    );
  });
};

const newEmployee = () => {
  inquirer.prompt(addEmployee).then((response) => {
    db.query(
      "INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)",
      [response.firstName, response.lastName, response.role, response.manager],
      (err, res) => {
        err
          ? console.log(err)
          : console.log(
              `${response.firstName} ${response.lastName} has been added to the database.`
            );
        initialPrompt();
      }
    );
  });
};

const updateRole = () => {
  inquirer.prompt(roleUpdate).then((response) => {
    db.query(
      "UPDATE employee SET role_id = ? WHERE id = ?",
      [response.update, response.newRole],
      (err, res) => {
        err
          ? console.log(err)
          : console.log("Employee profile has been updated.");
        initialPrompt();
      }
    );
  });
};

initialPrompt();
