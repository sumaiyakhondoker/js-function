// function tenTimes(number){
//     result = number * 10;
//     return result;
// }
// tenTimes(5);
// const output = tenTimes(10);
// console.log("output", output)

function add(price1, price2){
    const total = price1 + price2;
    return total;
}

const bill = add(5,80);
// console.log(bill)

function add2(price1, price2){
    return price1 + price2;
}
const bill2 = add2(5,85);
// console.log(bill2)

function doMath(num1, num2){
    const sum = num1 + num2;
    const diff = num1-num2;
    const mult = sum * diff;
    const result = mult / 2;
    return result;
}

const result = doMath(10,5);
console.log(result)