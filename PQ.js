// // for the given start state of an array change it to final form using method
// start : ["january","july","march","august"]
// final : [ 'july', 'june', 'march', 'august' ]

let months = ["january","july","march","august"];
months.shift("january");
console.log(months)
months.shift("july");
console.log(months);
months.unshift('june');
console.log(months);
months.unshift("july");
console.log(months);
