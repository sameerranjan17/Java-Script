// Qs1. Write a JavaScript program to get the first n elements of an array. [n can be any positive number].
//     For example: for array [7, 9, 0,-2] and n=3
//     Print, [7, 9, 0]
let array =  [7, 9, 0,-2]
console.log(array.splice(0,3));

// Qs2. Write a JavaScript program to get the last n elements of an array. [n can be any
//     positive number].
//     For example: for array [7, 9, 0,-2] and n=3
//     Print, [9, 0,-2]
let array1 =  [7, 9, 0,-2]
console.log(array1.splice(1,4))

// Qs3. Write a JavaScript program to check whether a string is blank or not.
// ans
// let str = 'gvf'
// console.log(str.length);
// or
let str = prompt("Enter a string : ")
if(str.length == 0){
    console.log("String is empty")
}else{
    console.log("String is not empty")
}


// Qs4. Write a JavaScript program to test whether the character at the given (character)
// index is lower case.
// let chars = 'ksj'
// console.log(isLowerCase(chars)) 

// let chars2 = 'ksj'
// console.log(chars.isLowerCase()) 

// Qs5. Write a JavaScript program to strip leading and trailing spaces from a string.
let str5 = "   freefire     "
console.log(str5.trim())

// Qs6. Write a JavaScript program to check if an element exists in an array or not.
let arr4 = ["apple","orange","guava"]
console.log(arr4.includes("apple"))