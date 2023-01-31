import EmployeeValidate from "../crossCuttingConcerns/validation/employeeValidate.js"

export default class EmployeeService {
    constructor(loggerService) {
        this.employees = []
        this.loggerService = loggerService
        this.employeeValidate = new EmployeeValidate()
    }


    add(employee) {
        if (this.employeeValidate.checkValidityForErrors(employee) && this.employeeValidate.checkAgeIsANumber(employee)) {
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