const user ={
    username : "hassan",
    age : 18,
    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}
// user.welcomeMessagage
user.age=56
// console.log(user.age);




// ===============================Arrow====================================
function chai(){
    let username = "hassan"
    console.log(this.username); // function mien this kam nhi kery ga
}
chai()


// () => {

// }
// const addtwo = (num1,num2) =>{
//     return num1+num2
//     // method 1
// }
const addtwo = (num1,num2) => num1 + num2
    // method 2
