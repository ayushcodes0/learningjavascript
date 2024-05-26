// function sum(a,b,n){
//     if(n<0.1){
//         console.log(a-b);
//     }
//     else{
//         console.log(a+b);
//     }
// }

// function product(a,b,n){
//     if(n<0.1){
//         console.log(a/b);
//     }
//     else{
//         console.log(a*b);
//     }
// }

// function divide(a,b,n){
//     if(n<0.1){
//         console.log(a*b);
//     }
//     else{
//         console.log(a/b);
//     }
// }

// function subtract(a,b,n){
//     if(n<0.1){
//         console.log(a**b);
//     }
//     else{
//         console.log(a-b);
//     }
// }

// function power(a,b,n){
//     if(n<0.1){
//         console.log(a+b);
//     }
//     else{
//         console.log(a**b);
//     }
// }

let n = Math.random();
const a = prompt("Enter a : ");
const symbol = prompt("Enter symbol : ");
const b = prompt("Enter b : ");

if(n>0.1){
    alert(`The result is ${eval(`${a} ${symbol} ${b}`)}`);
}
else{
    alert(`The result is ${eval(`${a} ${symbol} ${b}`)}`);
}


// let a = 5;
// let b = 5;
// let symbol = '+';
// if(symbol == '+'){
//     sum(a,b,n);
// }
// else if( symbol == '-'){
//     subtract(a,b,n);
// } 
// else if(symbol == '*'){
//     product(a,b,n);
// }
// else if(symbol == '/'){
//     divide(a,b,n);
// }
// else{
//     power(a,b,n);
// }


