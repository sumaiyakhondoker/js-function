// string type parameter-------------
function evenSizedString(str){
    const size = str.length;
    console.log(str,size);
    if(size % 2 === 0){
        console.log("even size");
        return true;
    }
    else{
        console.log("odd size")
        return false;
    }
}
// const output = evenSizedString("Dhaka");
// console.log(output);
// const output1 = evenSizedString("faka");
// console.log(output1)

// Boolean type parameter------------
function doubleOrTriple(number, doDouble){
    if(doDouble === true){
        const result = number * 2;
        return result;
    }
    else{
        const result = number * 3;
        return result;
    }
}

// console.log(doubleOrTriple(5,true));
// console.log(doubleOrTriple(5,false));

// array type parameter -------------
function numberOfElements(numbers){
    const len  = numbers.length;
    return len;
}
// const output = numberOfElements([12,45,2,5,8,9,0,6,7]);
// console.log(output);


// object as function parameter------------
function getAge(person){
    const age = person.age;
    return age;
}
const output = getAge(man = {name : "ripa", age:15});
console.log(output)
