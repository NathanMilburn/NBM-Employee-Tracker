const inquirer = require('inquirer');

function createTable() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "add_department",
                message: "What would you like to do?",
                choices: ["Add Department", "Close Application"],
            },
        ])
        .then((data) => {
            if (data.add_department === "Add Department") {
                selectDepartment();
            } else {
                closeApplication();
            }
        })
}

function selectDepartment() {
    inquirer
        .prompt([
            {
                type: "list",
                name: "select_department",
                message: "What is the name of the department?",
                choices: ["Platform","Human Relations","Sales","Customer Success","Data QA"]
            },
        ])
}

function closeApplication()