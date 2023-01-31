import Employee from "../models/employee.js";
import EmployeeService from "../services/employeeService.js";

let employeeService = new EmployeeService()
let employeeToAdd = new Employee(1,"Merve", "BASAT", "Ankara", 18, 48111)

employeeService.add(employeeToAdd)
console.log(employeeService.employees)
console.log(employeeService.errors)

