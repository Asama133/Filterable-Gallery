let buttons = document.querySelectorAll("button");
let images = document.querySelectorAll("img");

showDefaultImgs()

buttons.forEach(btn =>{
  btn.addEventListener("click",removeAddActive)
  btn.addEventListener("click",showImages)
})

function removeAddActive(){
  buttons.forEach(btn =>{
    btn.classList.remove("active")
    this.classList.add("active")
  })
}
function showImages(){
  images.forEach(img =>{
    img.style.display = "none"
    img.classList.contains(this.id ) ? img.style.display = "block":null
  }) 
}

function showDefaultImgs(){
  document.querySelectorAll(".mobile").forEach(img =>{
    img.style.display = "block"
  })
}


