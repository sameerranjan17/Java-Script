// Qs5. Write a program to find the largest of 3 numbers

let x = 2;
let y = 10;
let z = 9;
// nested if else
// if(x>y){
//     if(x>z){
//         console.log(`${x} is largest`)
//     } else {
//         console.log(`${y} is largest`)
//     }
// } else {
//     if(y>z){
//         console.log(`${y} is largest`)
//     } else {
//         console.log(`${z} is largest`)
//     }
// }

// only if
if(x>y && x>z){
    console.log(`${x}is largest.`);
}
if(y>z && y>x){
    console.log(`${y} is largest.`);
}
if(z>x && z>y){
    console.log(`${z} is largest.`);
}