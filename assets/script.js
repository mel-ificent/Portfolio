let imgHighlightEl = document.getElementById("img-highlight");
let imgProjOneEl = document.getElementById("img-proj-one");


//Functions to update sample work images to a screenshot of work whenever user hovers over link
function projOneImg() {
    imgProjOneEl.setAttribute("src","./Images/weatherapp.jpg")

  }
  
function projOneImgReset() {
    imgProjOneEl.setAttribute("src","./Images/keyboard2.jpg")
  }

function highlightImg() {
    imgHighlightEl.setAttribute("src","./Images/youluckydog.jpg")

  }
  
function highlightImgReset() {
    imgHighlightEl.setAttribute("src","./Images/tablet.jpg")
  }