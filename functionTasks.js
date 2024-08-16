/**
 * Task-1
Take four parameters. Multiply the four numbers and then return the result
 */

/*Answer:
 
function multiplication(num1, num2, num3, num4){
    const result = num1 * num2 * num3* num4;
    return result;
}

const result = multiplication(2,5,3,4);
console.log("The result of multiplicaton is : ", result);

 */

/**
 * Task-2
Take a number if the number is odd multiply it by 2 and return the result. If the number is even divide it by two and return the result.
 */

/**Answer:------------
 function evenOrOdd(number){
    if(number % 2 === 1){
        const result = number *2;
        return result;
    }
    else{
        const result = number / 2;
        return result;
    }
}

const result = evenOrOdd(8);
const result2 = evenOrOdd(9);
console.log("Result is : ", result);
console.log("Result is : ", result2);

 */


/**
 * Task-3
Write a function called make_avg() which will take an array of integers and the size of that array and return the average of those values.
 */

/**Answer: ------------
 
function make_avg(numbers){
    const size = numbers.length;
    console.log("Size of array is : ", size);
    let sum = 0;
    for(const number of numbers){
        sum = sum + number;

    }
   const average = sum / size;
   return average;

    
}
const numbers = [5,6,8,2,3,4];
const average = make_avg(numbers);
console.log("Average is : ", average);
 */


/**
 * Task-4
Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.
 */

/**Answer:-----------------

function count_zero(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
      
        if(str[i].includes(0)){
           count = count +1;
        }
    }
    return count;
}

const str = "010101010";
const result = count_zero(str);
console.log("The number of 0 is: ", result);

 */

/**
 * Task-5
Write a function called odd_even() which takes an integer value and tells whether this value is even or odd. If even return Even. If odd return Odd
 */

function odd_even(number){
    if(number % 2 === 0){
        return "Even";
    }
    else{
        return "Odd";
    }
}

// const result = odd_even(5);
// const result1 = odd_even(10);
// console.log("Result is : ", result);
// console.log("Result is : ", result1);

function getMenu() {
    console.log("Burger, Pizza, Pasta");
   }

   getMenu();