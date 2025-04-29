// let color = "green";

// // Traffic Light Signal
// if(color === "red"){
//     console.log("Please Stop! light color is red")
// }
// if(color === "yellow"){
//     console.log("Please slow down! light color is yellow")
// }
// if(color === "green"){
//     console.log("Please go! light color is green")
// }

// upper wale code mein saare conditions check honge
// niche wale mein saare conditions check nhi honge agar if true hua to rest ignore ho jaaenge aur agar if false hua to then else if excecute honge one by one
let color = "grey";
// Traffic Light Signal
if(color === "red"){
    console.log("Please Stop! light color is red")
}
else if (color === "yellow"){
    console.log("Please slow down! light color is yellow")
}
else if(color === "green"){
    console.log("Please go! light color is green")
}else{
    console.log("Traffic light is broken")
}