let arr = ['a','b','c'];
let arrCopy = arr;     //here addresses of variables  arr and arrCopy are same
console.log(arr == arrCopy)
console.log(arr === arrCopy)  //true bcoz internally value of both variables are same
arr.push('d')
console.log(arr)
console.log(arrCopy)  //if we add something in arr it will be also added in arrCopy llly for pop
//if we pop items from arr then items of arrCopy will pop also
console.log(arrCopy.pop())
console.log(arrCopy)
console.log(arr)
