
/* 
 crazy
 amazing
 fire

 Engine
 Foods
 Garments

 Bros
 Limited
 Hub 
*/

let a = Math.random();
let b = Math.random();
let c = Math.random();
let first;
let second;
let third;
if(a<=0.33){
    first = "crazy";
}
else if(a>0.33 && a<=0.66){
    first = "amazing";
}
else{
    first = "fire"
}

if(b<=0.33){
    second = "Engine";
}
else if(b>0.33 && b<=0.66){
    second = "Food";
}
else{
    second = "Garments"
}

if(c<=0.33){
    third = "Bros";
}
else if(c>0.33 && c<=0.66){
    third = "Limited";
}
else{
    third = "Hub"
}

console.log(first.concat(second,third));