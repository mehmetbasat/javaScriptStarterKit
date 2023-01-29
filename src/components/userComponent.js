import { BaseLogger, ElasticLogger } from "../crossCuttingConcerns/logging/logger.js"
import Customer from "../models/customer.js"
import User from "../models/user.js"
import UserService from "../services/userService.js"

console.log("User component loaded")

let logger1 = new ElasticLogger()
let userService = new UserService(logger1)

// let user1 = new User(1,"Mehmet", "BASAT", "Ankara")
// let user2 = new User(2,"Barış", "BASAT", "Ankara")
// userService.add(user1)
// userService.add(user2)

//console.log(userService.list())

//console.log(userService.getById(2))



let customer = {
    id:1,
    firstName:"Mehmet"
}

//prototyping
customer.lastName = "BASAT"

console.log(customer.lastName)

console.log("--------------------------------------")
userService.load()

let customerToAdd = new Customer(6, "Engin", "Demiroğ", "Ankara",37)
customerToAdd.type = "customer"
userService.add(customerToAdd)


console.log(userService.customers)
console.log(userService.employees)
console.log(userService.errors)
console.log(userService.getCustomersSorted())