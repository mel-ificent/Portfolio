let imgHighlightEl = document.getElementById("img-highlight");
let imgProjOneEl = document.getElementById("img-proj-one");
let imgProjTwoEl = document.getElementById("img-proj-two");


//Functions to update sample work images to a screenshot of work whenever user hovers over link
function projOneImg() {
    imgProjOneEl.setAttribute("src","./Images/newpost.jpg")

  }
  
function projOneImgReset() {
    imgProjOneEl.setAttribute("src","./Images/keyboard2.jpg")
  }

function highlightImg() {
    imgHighlightEl.setAttribute("src","./Images/mevsu.jpg")

  }
  
function highlightImgReset() {
    imgHighlightEl.setAttribute("src","./Images/tablet.jpg")
  }

  function projTwoImg() {
    imgProjTwoEl.setAttribute("src","./Images/youluckydog.jpg")

  }
  
function projTwoImgReset() {
    imgProjTwoEl.setAttribute("src","./Images/pencils.jpg")
  }