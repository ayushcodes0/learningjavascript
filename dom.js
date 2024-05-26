console.log("hello World");

let a = document.getElementsByClassName("box1");
console.log(a);
a[2].style.backgroundColor = "red";
document.getElementById("red").style.backgroundColor= "blue";
document.querySelector(".box1").style.backgroundColor="lightblue"; // it will target first element with class box1 
let n = document.querySelectorAll(".box1").length;
for (let i = 0; i<n; i++){
    document.querySelectorAll(".box1")[i].style.backgroundColor= "lightgreen";
}