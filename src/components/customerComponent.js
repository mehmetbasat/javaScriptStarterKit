import Customer from "../models/customer.js";
import CustomerService from "../services/customerService.js";

let customerService = new CustomerService()


let customerToAdd = new Customer(1,"Mehmet","Basat", "Ankara", 20, "7789789")
customerService.add(customerToAdd)
console.log(customerService.customers)
//console.log(customerService.getCustomerById(1))

