myHero = ["hassan", "faroq",2,4,6]
myVillan =[ "hammad","zia","asad"]
// myHero.push(myVillan)
myHero.concat(myVillan) //yeh tab kam kry ga jb kisi mien value store ho gi 


let test= [...myHero,...myVillan]
console.log(test);
let test2 = [122,4,24,[45,4,5],4,7,6[5,7,6,[5,7]]]
const finalTest= test2.flat(Infinity)
console.log(finalTest);
