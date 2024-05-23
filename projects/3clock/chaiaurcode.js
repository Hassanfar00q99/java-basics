const clock = document.getElementById('clock');
// const clock = document.querySelector('#clock')

setInterval( () => {
  let date = new Date();
  clock.innerHTML = date.toLocaleTimeString();
}, 1000);


// let clock =document.getElementById('clock');
// setInterval( ()=>{
//   let date = new Date();

//   const newTimeNode = document.createTextNode(date.toLocaleTimeString());
//   if (clock.firstChild){
//     clock.removeChild(clock.firstChild)
//   }
//   clock.appendChild(newTimeNode);
// },1000);



// we want this code solution
// const clock = document.getElementById('clock');
// // const clock = document.querySelector('#clock')

setInterval( () => {
  let date = new Date();
  const test = document.createElement('span');
  test.appendChild(document.createTextNode(date.toLocaleTimeString()));
  // clock.innerHTML = '';
  // clock.appendChild(test)
}, 1000);