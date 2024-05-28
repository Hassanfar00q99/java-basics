for (let h = 5; h < 10; h++) {
    const element = h;
    console.log(`outer loop ${h}`);
    for (let a = 0; a < 7; a++) {
        const element = a;
    // console.log(`inner loop ${a} outer loop ${h}`);
    console.log(`${h} * ${a} = ${h*a}`);
        
    }
} 

// const greetings = "Hello 5 world! ";
// for (const greet of greetings) {
//     if (greet !== " ") {
//         console.log(`Each char is ${greet}`);
//     }
// }