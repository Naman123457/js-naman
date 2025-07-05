// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
 console.log(myArr[1]);

// Array methods

 myArr.push(6)//add 6 to array
 myArr.push(7)
 myArr.pop()//remove last value

 myArr.unshift(9)//insert at the starting index
 myArr.shift()//remove the 1st value

 console.log(myArr.includes(9));//is 9 there in array
 console.log(myArr.indexOf(3));//find the index of given value

 const newArr = myArr.join()//convert arr into string

 console.log(myArr);
 console.log( newArr);


// slice, splice

console.log("A ", myArr);//name the array to "A"

const myn1 = myArr.slice(1, 3)//from one to 3 not inculde 3

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)//take the value from one to 3 also include 3 but rem these value will be removed from original array
console.log("C ", myArr);
console.log(myn2);