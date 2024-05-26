// console.log("Hello World");
// let a = 5;
// let b = 5;
// let c = "Ayush"
// console.log(a+b);
// console.log(typeof a, typeof b, typeof c); 
// {
//     let a = 55;
//     console.log(a);
// }
// console.log(a);
// let p = "ayush";
// let q = 5;
// let r = 5.5;
// let s = undefined;
// let t = null;
// let u = true;
// console.log(p,q,r,s,t,u);
// console.log(typeof p,typeof q,typeof r,typeof s,typeof t,typeof u);

// let o = {
//     name : "ayush",
//     "roll" : 43
// };
// console.log(o);
// o.salary = "500crore";
// console.log(o);
// o.salary = "1000crore";
// console.log(o);
// o.present = true;
// console.log(o);




const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
rl.question('Enter Your Name: ', (input) => {
    console.log(`Your Name is : ${input}`);
    rl.close();
});
 

