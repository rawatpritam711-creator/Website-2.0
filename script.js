let slides = document.querySelectorAll(".slide");
let counter = document.getElementById("counter");

let index = 0;

function showSlide(){
  slides.forEach(slide => slide.classList.remove("active"));
  slides[index].classList.add("active");

  counter.innerText = "0" + (index+1) + " / 03";

  index++;
  if(index === slides.length){
    index = 0;
  }
}

setInterval(showSlide, 4000);
