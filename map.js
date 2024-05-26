let arr = [1,2,3,4,5,6];
console.log(arr);
let newarr = arr.map((e)=>{
    return e**2;
});
console.log(newarr);


const greaterthanfive = (e)=>{
    if(e>5){
        return true;
    }
    return false;
}

console.log(newarr.filter(greaterthanfive)); 

let arr2 = [1,2,3,4,5];

const red = (a,b)=>{
    return a*b;
}
console.log(arr2);
console.log(arr2.reduce(red));