const connection = require("./connection")

class DB {
    constructor(connection){
        this.connection = connection
    }

    findAllManagers(employeeId){
        return this.connection.query(
            "SELECT id, first_name, last_name FROM employee WHERE id != ?",
            employeeID
        );
    }
    createEmployee(employee){
        return this.connection.query (`INSERT INTO employee SET ?"`, employee)
    }
    updateRole(empployeeID, roleID) {
        return this.connection.query(
            "UPDATE employee SET role_id ? WHERE id = ?",
            [roleID, employeeID]
        );
    }
    createRole(role) {
        return this.connection.query("INSERT into role SET?", role);
    }
    removeRole(roleID){
        return this.connection.query(`DELETE FROM role WHERE id =?`, roleID);
    }
    findALLDepartments(){
        return this.connection.query(
            "SELECT department.id, department.name, SUM(role.salary) AS utilized_budget FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department on role.department_id = department.id GROUP BY department.id, department.name;"
        );
    }
    removeDepartment(departmentID){
        return this.connection.query(
            `DELETE FROM department WHERE id = ?`,
            departmentiD
        );
    }
    createDepartment(department){
        return this.connection.query("INSERT INTO department SET?", department);
    }
    findAllEmployeesByDepartment(departmentId){
        return this.connection.query(
            //What the heck
            "SELECT employee.id, employee.first_name, employee.last_name, role.title FROM employee LEFT JOIN role on employee.role_id = role.id LEFT JOIN department ON department.id = role.department_id WHERE manager_id = ?",
            managerID
        );
    }
}
module.exports = new DB(connection)