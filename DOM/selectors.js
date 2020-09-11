var tag = document.getElementById("highlight")
typeof(tag)
var fuckOff = false
setInterval(function(){
  if (fuckOff){
    tag.innerHTML = "List Item 1"
    tag.classList.toggle("fuck_off")
    fuckOff = false
  }
  else {
    tag.innerHTML = "fuck off"
    tag.classList.toggle("fuck_off")
    fuckOff = true
  }
}, 1000)
var first_bolded = document.querySelector(".bold")
setInterval(function(){first_bolded.classList.toggle("big")},500)
var last_bolded = document.querySelectorAll(".bold")[1]
last_bolded.setAttribute("href", "http://www.google.com")
