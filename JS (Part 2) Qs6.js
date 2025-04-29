// Qs6 (Bonus). Write a program to check if 2 numbers have the same last digit.
// Eg : 32 and 47852 have the same last digit i.e. 2

let x = 4124;
let y = 441234;

if((x % 10 ) == (y % 10)){
    console.log("numbers have same last digit which is ", x % 10);
}else{
    console.log("numbers don't have the same last digit");
}