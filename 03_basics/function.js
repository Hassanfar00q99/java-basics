function addTwoNumbers(number1 , number2){
   let result= number1 + number2
   return result

}
const resulte = addTwoNumbers(5,78)

// addTwoNumbers(5,97)
// console.log(resulte);


function loginUserMessage(username = "sam"){
   if(!username){
       console.log("PLease enter a username"); // if statment run nh ho gi ku parameter mien hm ny value dy di hai to jb hm argument m value den gy to overright ho jy ggi 
       return
   }
   return `${username} just logged in`
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage())

function calculateCartVAlue(val1,val2,...num2){
   return num2
}
console.log(calculateCartVAlue(89,8));
const user = {
   username: "hitesh",
   prices: 199
}

function handleObject(anyobject){
   console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
   username: "sam",
   price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
   return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200, 400, 500, 1000]));