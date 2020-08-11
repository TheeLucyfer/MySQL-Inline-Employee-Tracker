const db = require("./db")

require("console.table")
const {prompt} = require("inquirer")


startPrompt()
async function startPrompt(){
    const {choice} = await prompt([
        {
            type: "list",
            name: "choice",
            message: "What do you want to do?",
            choices: [
                {
                 name: "View Employees",
                 value: "View_Employees"
                },
                {
                    name: "View Employees By Department",
                    value: "View_By_Department"
                },
                {
                    name: "Add Employee",
                    value: "Add_Employee"
                },
                {
                    name: "Remove Employee",
                    value: "Remove_Employee"
                },
                {
                    name: "Update Employee Role",
                    value: "Update_Employee_Role"
                },
                {
                    name: "Update Employee Manager",
                    value: "Update_Employee_Manager"
                },
                {
                    name: "View All Roles",
                    value: "View_Roles"
                },
                {
                    name: "Remove Role",
                    value: "Remove_Department "
                },
                {
                    name: "Quit",
                    value: "Quit"
                }
            ]
        }
    ])
};