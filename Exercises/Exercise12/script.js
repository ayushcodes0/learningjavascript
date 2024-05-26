function randomIntFromInterval(min, max) { 
  return Math.floor(Math.random() * (max - min + 1) + min);
}
  
const rndInt = randomIntFromInterval(1, 5);
console.log(rndInt);

let boxes = document.querySelector(".container").children;
// console.log(boxes);

function getRandomColor(){
  let val1 = randomIntFromInterval(1, 255);
  let val2 = randomIntFromInterval(1, 255);
  let val3 = randomIntFromInterval(1, 255);
  return `rgb(${val1},${val2},${val3})`;
}


Array.from(boxes).forEach (e=>{
  e.style.backgroundColor = getRandomColor();
  e.style.color = getRandomColor();
})
