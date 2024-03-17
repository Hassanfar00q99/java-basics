// singleton

// object literal 
 
const testSymbl = Symbol(03090854199)
let myObject = {
   name: "hassan ",
   age: 18,
   school:["minhaj","punjab"],
   [testSymbl]: "test"
}

//  console.log(myObject.name);
//  console.log(myObject["age"]); //yeh method key mien jb hm string bna k value dety hn to acces krny ka kam ata hai or symbol ko acces krny mien
//  console.log(myObject[testSymbl]); 

myObject.greeting = function(){
   console.log("hellow world");
}
myObject.greetingTwo= function(){
   console.log(`what is your name, ${this.school}`);
}
console.log(myObject.greeting);
console.log(myObject.greetingTwo());