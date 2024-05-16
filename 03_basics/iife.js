// (function chai (){
//     console.log(`DB connected`);
// })(),
// ( () => {
//     console.log(`DB connected`);
// })()

function chai(num1,num2){

   let result = num1+ num2
   return result
}

console.log(chai(3,10));

let testing = (num1,num2)=> (num1 + num2)
console.log(testing(4,6));