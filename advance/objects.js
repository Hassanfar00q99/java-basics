function createUser(username , score) {
    this.username = username
    this.score = score
}

createUser.prototype.increment= function(){
    this.score++
}
createUser.prototype.printMe= function(){
    console.log(`testing $[this.score]`)
}

const test = new createUser("chai",25);
const tea = new createUser("chai2",250);
test.printMe()


// yeh code thk hai isy browser pr chk krn 
