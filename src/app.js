//console.log("what up, bitch!!!")

// JS type safe değildir

let dolarBugun = 9.30
var dolarDun = 9.20

{
    var dolarDun = 9.10
}

//console.log(dolarDun)

const euroDun = 11.2
//euroDun = 11

//console.log(euroDun)

//array
//camelCasing
let konutKredileri = ["Konut Kredisi", "Emlak Konut Kredisi", "Kamu Konut Kredisi"]

//console.log("<ul>")

for (let i = 0; i < konutKredileri.length; i++) {
    //console.log("<li>" +konutKredileri[i]+ "</li>")
}

//console.log("</ul>")


let student = { id: 1, name: "basat" }

function save(ogrenci, puan = 10) {
    //console.log(ogrenci.name + " : " + puan)
}

save(student, 100)

let students = ["mehmet", "barış", "merve", "safiye"]

let students2 = [students, { id: 1, name: "basat" }, "Ankara", { city: "İstanbul" }]

//console.log(students2)

//rest
let showProducts = function (id, ...products) {
    console.log(id)
    console.log(products[0])
}

//console.log(typeof showProducts)
//showProducts(10, "what", "up", "bitch!") 

//spread = ayrıştırmak
let points = [1, 2, 3, 4, 56, 7, 8, 9, 6]
console.log(...points)
console.log(Math.max(...points))
console.log(..."ABC", "D", ..."EFG", "H")

//destructuring
let populations = [10000, 20000, 30000, [40000, 100000]]
let [small, medium, high, [veryHigh, maximum]] = populations

console.log(small)
console.log(medium)
console.log(high)
console.log(veryHigh)
console.log(maximum)

function someFuntion([small1], number) {
    console.log(small1)
}

someFuntion(populations)

let category = { id: 1, name: "içecek" }
console.log(category.id)
console.log(category["name"])

let { id, name } = category

console.log(id)
console.log(name)


