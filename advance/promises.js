let promisesOne = new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('promise test 1');
        resolve();
    },1000);
});
promisesOne.then(function(){
    console.log("done");
});


new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('promise test 1');
        resolve();
    },1000);
}).then(()=>{
    console.log("promise to done");
});


const promisesThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        
        resolve({mob: "nokia", mob2:"samsung"});
    },1000);
})
promisesThree.then((user)=>{
    console.log(user["mob2"])
});

//  const promisesFive = new Promise((resolve,reject)=>{
//     let error = false;
//     if(!error){
//         resolve("error nhi ha ");
//     } else { 
//         reject("error hai ");
//     }
//  });
//  promisesFive.then((user)=>{
//    test4 = console.log('test error');
//     return test4
//  }).catch((eror)=>{
//     console.log(eror);
//  })
const promisesFour = new Promise((resolve,reject)=>{
    let error = false;
    if(!error){
        resolve({mob: "nokia", mob2:"samsung"});
    } else { 
        reject("error hai ");
    }
 });
 promisesFour.then((user)=>{
    return user.mob
 }).then((user1)=>{
    console.log(user1);
 }).catch((eror)=>{
    console.log(eror);
 });

 