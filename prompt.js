const db = require('../config/connection');

const startApplication = [
    {
        type: "list",
        name: "selections",
        message: "What would you like to do?",
        choices: ["View All Departments", "View All Roles", "View All Employees", "Add a Department", "Update an Employee Role"],
        default: "View All Department"
    }
];

const addEmployee = [
    {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?"
    },
    {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?"
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's role?",
        choices: async () => {
            try {
                const outcome = await db.promise().query('SELECT title AS name, id AS value FROM roles')
                return outcome[0];
            } catch (err) {
                throw err;
            }
        }
    },
    {
        type: "list",
        name: "manager",
        message: "Who is this employee's manager? (If Applicable)",
        choices: async () => {
            try {
                const outcome = await db.promise().query('SELECT CONCAT(first_name, " ", last_name) AS name, id AS value FROM employee')
                return outcome[0];
            } catch (err) {
                throw err;
            }
        }
    }
]



// function selectDepartment() {
//     inquirer
//         .prompt([
//             {
//                 type: "list",
//                 name: "select_department",
//                 message: "What is the name of the department?",
//                 choices: ["Platform","Human Relations","Sales","Customer Success","Data QA"]
//             },
//         ])
// }

// function closeApplication()