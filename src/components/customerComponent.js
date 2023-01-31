import Customer from "../models/customer.js";
import CustomerService from "../services/customerService.js";

let customerService = new CustomerService()


let customerToAdd = new Customer(
    1,
    "Mehmet",
    "Basat",
    "Ankara",
    20,
    "324234"
)

customerService.add(customerToAdd)
console.log(customerService.customers)
console.log(customerService.errors)
console.log(customerService.getCustomerById(1))

