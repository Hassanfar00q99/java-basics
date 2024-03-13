let myDate= new Date()
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());// return string value according to iso 
// console.log(myDate.toJSON());// return string value according to iso  
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleTimeString());
// console.log(myDate.toLocaleTimeString());
let lastDate = new Date("9,10")
// console.log(lastDate.toString());
console.log(lastDate.toLocaleTimeString());



let myTime = Date.now()
console.log(Math.floor((myTime)/1000));


lastDate.toLocaleString("default", {
    month: "narrow"
}) 
console.log(lastDate);