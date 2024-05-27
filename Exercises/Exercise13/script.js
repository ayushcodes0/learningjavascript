function createCard(title, cName, views, monthsOld,thumbnail) {
    // Finish this function
    let viewStr
    if (views < 1000) {
        viewStr = views;
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M";
    }
    else {
        viewStr = views / 1000 + "K";
    }
    let html = `<div class="card">
    <div class="left">
      <img src= "${thumbnail}" alt="img Not found">
    </div>
    <div class="right">
      <h2 class="title">
        ${title}
      </h2>
      <div class="down">
        <span class="cName">${cName}</span>
        <span class="views">${viewStr}</span>
        <span class="date">${monthsOld} months ago</span>
      </div>
    </div>
  </div>`

    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 5600000, 17, "31:22","https://i.ytimg.com/vi/_8o_BiLAgQM/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDDIH-rjsP_Hzi-Ko5_FKQYOGNKSA");