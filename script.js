// Locomotive Scroll
const scroll = new LocomotiveScroll({
  el: document.querySelector('[data-scroll-container]'),
  smooth: true
});

// GSAP Animation
gsap.from(".hero h1", {
  y:100,
  opacity:0,
  duration:1
});

gsap.from(".hero p", {
  y:50,
  opacity:0,
  duration:1,
  delay:0.5
});

// Mouse Glow
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e)=>{
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});
