gsap.registerPlugin(ScrollTrigger);

// Main Timeline
const tl = gsap.timeline({
    scrollTrigger: {
        trigger: ".scroll-container",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5, // Thoda extra smooth kiya hai
    }
});

// Video ki tarah transition
tl.to(".earth-sphere", {
    scale: 2.2,
    x: "35%", // Earth right side mein zoom hogi
    y: "-15%",
    duration: 3
})
.to(".hero .content", {
    opacity: 0,
    y: -100,
    duration: 1.5
}, 0)
.from(".info-card", {
    x: -100,
    opacity: 0,
    duration: 1.5
}, 1.5);
