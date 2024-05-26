let arr = [1,2,3,4,5];
console.log(arr);
console.log(arr.toString()); 
arr.pop();   // piche se delete karega
console.log(arr);
arr.push(100); // piche se append karega
console.log(arr);
arr.shift();  // aage se delete karega 
console.log(arr);
arr.unshift("Ayush");
console.log(arr); // aage se append karega

let num = [1,2,3,4,5,6];
console.log(num.splice(1,3));
console.log(num);

console.log(num.splice(1,1,44,55,66));
console.log(num);
