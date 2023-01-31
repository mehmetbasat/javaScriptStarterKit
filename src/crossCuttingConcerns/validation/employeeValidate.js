import DataError from "../../models/dataError.js"

export default class EmployeeValidate {
    checkValidityForErrors(employee) {
        let requiredFields = "id firstName lastName city age salary".split(" ")
        let hasErrors = true
        for (const field of requiredFields) {
            if (!employee[field]) {
                hasErrors = false
                console.log(new DataError(`Validation Problem. ${field} is required`, employee))
            }
        }
        return hasErrors
    }

    checkAgeIsANumber(employee) {
        let hasErrors = true
        if (Number.isNaN(Number.parseInt(+employee.age))) {
            hasErrors = false
            new DataError(`Validation Problem. ${employee.age} is not a number`, employee)
        }
        return hasErrors

    }


}