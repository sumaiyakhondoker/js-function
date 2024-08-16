/**
 * objective : return all the even numbers of an array.
 */

function evenNumbersOnly(numbers){
    const evens = [];
 for(const number of numbers){
    if(number % 2 === 0){
        console.log(number);
        evens.push(number);
     
    }
 }
 return evens;
}
// const numbers = [5,6,7,8,2,10];
// const evenNumbers = evenNumbersOnly(numbers);
// console.log("Even numbers are ", evenNumbers)


// sum of even numbers ----------------
function sumOfEvenNumbers(numbers){
    let sum = 0;
    for(const number of numbers){
        if(number % 2 === 0){
            console.log(number)
            sum = sum + number;
        }
    }
    return sum;
}

const numbers = [5,8,9,10,3,4];
const sum = sumOfEvenNumbers(numbers);
console.log("sum of even number is : " , sum);
