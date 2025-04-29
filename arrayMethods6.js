// splice method
let cars = ["audi","bmw","xuv","maruti"]
console.log(cars.splice(3));        //after this maruti will be parmanently deleted
console.log(cars)
console.log(cars.splice(0,1)); // since audi is at first place audi will be deleted
console.log(cars)
cars.push("maruti");
cars.push("ferari");
console.log(cars)
console.log(cars.splice(1,2));
console.log(cars)
console.log(cars.splice(0,0,"toyota","xuv","maruti"))//after this toyota, xuv, maruti will be 
// added at 0 index i.e at place of bmw and bmw will be pushed to last index 