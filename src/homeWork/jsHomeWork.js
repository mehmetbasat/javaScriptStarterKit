function prime(...numbers) {
    for (let i = 2; i < numbers; i++) {

        if (numbers % i == 0) {
            return 
        }
    }
    return numbers
}

function findPrime(...numbers) {
    for (let i = 0; i < numbers.length; i++) {
        if (prime(numbers[i])) {
            console.log(numbers[i] + " prime")
        }
        else {
            console.log(numbers[i] + " is not prime")
        }
    }

}

findPrime(13, 7, 4, 3, 5, 232, 56436, 332, 17)

///////////////////////////////////////

let number1
let number2
let total1 = 0
let total2 = 0

function friendNumbers(number1, number2) {
    for (let i = 1; i < number1; i++) {
        if (number1 % i == 0) {
            total1 = total1 + i
        }

    }

    for (let i = 1; i < number2; i++) {
        if (number2 % i == 0) {
            total2 = total2 + i
        }

    }

    if (number1 == total2 && number2 == total1) {
        console.log("numbers friend")
    } else {
        console.log("they are not friend")

    }
}

friendNumbers(1184, 1210)

/////////////////////////////////////

let perfectNumbers = function () {

    for (let i = 1; i < 1000; i++) {
        let total = 0

        for (let j = 0; j < i; j++) {
            if (i % j == 0) {
                total += j;
            }
        }

        if (total == i) {
            console.log(i);
        }

    }
}

perfectNumbers()

/////////////////////////////////////


function prime(...numbers) {
    for (let i = 2; i < numbers; i++) {

        if (numbers % i == 0) {
            return 
        }
    }
    return numbers
}

function listOfPrimeNumbers () {
    for (let i = 2; i < 1000; i++) {
        let sum=0;
        for (let j = 2; j < i; j++) {
            if(i%j==0 && i!=2){
                sum ++;
            }
        }
        if(sum == 0){
            console.log(i + " "+  "sayısı asal sayıdır.");
        }
        
    }
    
}

listOfPrimeNumbers()

