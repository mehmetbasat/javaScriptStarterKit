function addToCart(quantity, productName = "Elma") {
    console.log("Sepete Eklendi : ürün :  " + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart(15)

let sayHello = ()=>{
    console.log("hello world ! ")
}

sayHello()

let sayHello2 = function () {
    console.log("hello world 2 ! ")
}

sayHello2()


function addToCart2(productName, quantity, unitPrice) {
    console.log("Sepete " + productName + " " + " eklendi. " + "Adet : " + " " + quantity + " Fiyat : " + unitPrice)
}

addToCart2("Elma", 5, 10)
addToCart2("Armut", 2, 20)
addToCart2("Limon", 3, 15)

let product1 = {productName:"Elma", unitPrice: 10, quantity:5}


function addToCart3(product) {
    console.log("Ürün : " +product.productName)
    console.log("Adet : " +product.quantity)
    console.log("Fiyat : " +product.unitPrice)
}

addToCart3(product1)

let product2 = {productName:"Elma", unitPrice: 10, quantity:5}
let product3 = {productName:"Elma", unitPrice: 10, quantity:5}

product2 = product3
product2.productName = "KARPUZ"
console.log(product3.productName)
 
let sayi1 = 10
let sayi2 = 20
sayi1 = sayi2
sayi2 = 100
console.log(sayi1)
sayi1 = sayi2
console.log(sayi1)


function addToCart4(products) {
    console.log(products)
}


let products = [
    {productName:"Elma", unitPrice: 10, quantity:5},
    {productName:"Armut", unitPrice: 10, quantity:5},
    {productName:"Karpuz", unitPrice: 10, quantity:5}
]

addToCart4(products)

function add(bisey,...numbers) { //rest
    let total = 0
    for (let i = 0; i < numbers.length; i++) {
        total = total + numbers[i]
    }

    console.log(total)
    console.log(bisey)
}


add(10,20)
//add(10,20,30)

let numbers = [1,55,87,4,544,84,99,54]
//console.log(...numbers)
console.log(Math.max(...numbers))

let [icAnadolu,marmara,akdeniz,[icAnadoluSehirleri,marmaraSehirleri]] = [
    {name:"İç Anadolu", populations : "20M"},
    {name:"Marmara", populations : "30M"},
    {name:"Akdeniz", populations : "10M"},
    [
        ["Ankara", "Eskişehir"],
        ["İstanbul", "Bursa"],
        ["Antalya", "Adana"],
    ]
]

// console.log(icAnadolu.name)
// console.log(icAnadolu.populations)
console.log(marmaraSehirleri)

let newProductName, newUnitPrice, newQuantity
({productName:newProductName, unitPrice:newUnitPrice, quantity:newQuantity} 
= {productName : "Elma", unitPrice : 10 ,quantity : 5})

console.log(newProductName)