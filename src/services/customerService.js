import CustomerValidate from "../crossCuttingConcerns/validation/customerValidate.js";

export default class CustomerService {
    constructor(loggerService) {
        this.customers = []
        this.loggerService = loggerService
        this.customerValidate = new CustomerValidate()
    }

    add(customer) {
        if (this.customerValidate.checkValidityForErrors(customer) && this.customerValidate.checkAgeIsANumber(customer)) {
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