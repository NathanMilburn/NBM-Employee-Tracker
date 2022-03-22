const db = require("../config/connection");

const startApplication = [
  {
    type: "list",
    name: "selections",
    message: "What would you like to do?",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add a Department",
      "Add a Role",
      "Add an Employee",
      "Update an Employee's Role",
      "Quit",
    ],
    default: "View All Departments",
  },
];

const addEmployee = [
  {
    type: "input",
    name: "firstName",
    message: "What is the employee's first name?",
  },
  {
    type: "input",
    name: "lastName",
    message: "What is the employee's last name?",
  },
  {
    type: "list",
    name: "role",
    message: "What is the employee's role?",
    choices: async () => {
      try {
        const outcome = await db
          .promise()
          .query("SELECT title AS name, id AS value FROM roles");
        return outcome[0];
      } catch (err) {
        throw err;
      }
    },
  },
  {
    type: "list",
    name: "manager",
    message: "Who is this employee's manager? (If Applicable)",
    choices: async () => {
      try {
        const outcome = await db
          .promise()
          .query(
            'SELECT CONCAT(first_name, " ", last_name) AS name, id AS value FROM employee'
          );
        return outcome[0];
      } catch (err) {
        throw err;
      }
    },
  },
];

const addRole = [
  {
    type: "input",
    name: "title",
    message: "What is the name of the role?",
  },
  {
    type: "input",
    name: "salary",
    message: "What is the salary for this role?",
  },
  {
    type: "list",
    name: "department",
    message: "Which department is this role in?",
    choices: async () => {
      try {
        const outcome = await db
          .promise()
          .query("SELECT names AS name, id AS value FROM department");
        return outcome[0];
      } catch (err) {
        throw err;
      }
    },
  },
];

const addDepartment = [
  {
    type: "input",
    name: "departmentNames",
    message: "Please add a department.",
  },
];

const roleUpdate = [
  {
    type: "list",
    name: "updateEmployee",
    message: "Which employee's role would you like to update?",
    choices: async () => {
      try {
        const outcome = await db
          .promise()
          .query('SELECT CONCAT(first_name, " ", last_name) AS name, id AS value FROM employee');
        return outcome[0];
      } catch (err) {
        throw err;
      }
    }
  },
  {
    type: "list",
    name: "newRole",
    message: "What is the employee's new role?",
    choices: async () => {
      try {
        const outcome = await db
          .promise()
          .query("SELECT title AS name, id AS value FROM roles");
        return outcome[0];
      } catch (err) {
        throw err;
      }
    },
  },
];

module.exports = {
  startApplication,
  addEmployee,
  addRole,
  addDepartment,
  roleUpdate,
};
