import DataError from "../models/dataError.js";
import { customer } from "../models/customer.js"



export default class CustomerService {
    constructor(loggerService) {
        this.customers = []
        this.loggerService = loggerService
        this.errors = []
    }


    checkCustomerValidityForErrors(customer) {
        let requiredFields = "id firstName lastName age city creditCardNumber".split(" ")
        let hasErrors = false
        for (const field of requiredFields) {
            if (!customer[field]) {
                hasErrors = true
                this.errors.push(new DataError(`Validation Problem. ${field} is required`, customer))
            }
        }

        if (Number.isNaN(Number.parseInt(+customer.age))) {
            hasErrors = true
            this.errors.push(new DataError(`Validation Problem. ${customer.age} is not a number`, customer))
        }

        return hasErrors
    }

    
    add(customer) {
        if (!this.checkCustomerValidityForErrors(customer)) {
            this.customers.push(customer)
        }

        //this.loggerService.log(customer)

    }

    listCustomers() {
        return this.customers
    }

    getCustomerById(id) {
        return this.customers.find(u => u.id == id)
    }

    getCustomersSorted() {
        return this.customers.sort((customer1, customer2) => {
            if (customer1.firstName < customer2.firstName) {
                return -1
            } else if(customer1.firstName===customer2.firstName) {
                return 0
            } else {
                return 1
            }
        })
    }


    

}