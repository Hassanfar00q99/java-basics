const myArr = ["Hassan","farooq",1,3,4,5]
console.log(myArr[1]);
myArr.push("asad","bilal")
myArr.pop()
myArr.unshift(99) // is mien value pass krty hn tak wo shuru mien ay 
myArr.shift(99) //code mien agr unshift use hova hai to yeh uski remove kr dy ga 

// console.log(myArr.includes(99));
// console.log(myArr.indexOf(99)); //agr index galt joga to -1 ay ga 
// console.log(myArr);

const newArr = myArr.join() // this function convet arry into string

// console.log(myArr);
// console.log(newArr);
// console.log(typeof (newArr));



//splice and slice
console.log("A",myArr);

const myn1 = myArr.splice(1,4)
console.log(myArr);
console.log(myn1);
console.log("B",myArr);

const myn2 = myArr.slice(1,4)
console.log(myArr);
console.log(myn2);