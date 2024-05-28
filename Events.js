let button = document.getElementById("btn");

button.addEventListener("click", ()=>{
    document.querySelector(".box").innerHTML = "Hey you were clicked"
})
button.addEventListener("dblclick", ()=>{
    document.querySelector(".box").innerHTML = "Hey you were double clicked"
})
button.addEventListener("contextmenu", ()=>{
    document.querySelector(".box").innerHTML = "Hey you were right clicked"
})
