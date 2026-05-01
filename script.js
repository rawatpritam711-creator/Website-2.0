gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1, // Smooth scrolling effect
    }
});

// Earth zoom and move animation
tl.to(".planet-wrapper", {
    scale: 1.8,
    x: "30%", // Move to right side
    y: "-20%",
    duration: 2
})
.to(".hero .content", {
    opacity: 0,
    y: -50,
    duration: 1
}, 0) // Starts at the same time as earth animation
