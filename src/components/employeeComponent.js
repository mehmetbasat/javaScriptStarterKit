import Employee from "../models/employee.js";
import EmployeeService from "../services/employeeService.js";

let employeeService = new EmployeeService()
let employeeToAdd = new Employee(1, "Merve", "Basat", "Ankara", 18, 18000)

employeeService.add(employeeToAdd)
console.log(employeeService.employees)


