import DataError from "../models/dataError.js";

export default class EmployeeService {
    constructor(loggerService) {
        this.employees = []
        this.errors = []
        this.loggerService = loggerService
    }

    checkEmployeeValidityForErrors(employee) {
        let requiredFields = "id firstName lastName city age salary".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!employee[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation Problem. ${field} is required`, employee))
            }
        }
        return hasErrors
    }

    
    

    add(employee) {
        if (!this.checkEmployeeValidityForErrors(employee)) {
            this.employees.push(employee)
        }

        //this.loggerService.log(customer)

    }

    list() {
        return this.employees
    }

    getEmployeeById(id) {
        return this.employees.find(e => e.id == id)
    }



    getEmployeesSorted() {
        return this.employees.sort((employee1, employee2) => {
            if (employee1.firstName < employee2.firstName) {
                return -1
            } else if (employee1.firstName === employee2.firstName) {
                return 0
            } else {
                return 1
            }
        })
    }
}