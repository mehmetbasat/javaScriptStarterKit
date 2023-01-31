import DataError from "../../models/dataError.js"

export default class CustomerValidate {
    checkValidityForErrors(customer) {
        let requiredFields = "id firstName lastName city age creditCardNumber".split(" ")
        let hasErrors = true
        for (const field of requiredFields) {
            if (!customer[field]) {
                hasErrors = false
                console.log(new DataError(`Validation Problem. ${field} is required`, customer))
            }
        }
        return hasErrors
    }

    checkAgeIsANumber(customer) {
        let hasErrors = true
        if (Number.isNaN(Number.parseInt(+customer.age))) {
            hasErrors = false
            console.log(new DataError(`Validation Problem. ${customer.age} is not a number`, customer))
        }
        return hasErrors
    }

}

