// Animation for the header
const headerTimeline = gsap.timeline({
  onComplete: () => {
    // Trigger the grid elements animation once the header animation is complete
    if (gridTimeline) {
      gridTimeline.play();
    }
  },
});

headerTimeline.fromTo(
  "header",
  { opacity: 0, y: -50 },
  {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
  }
);

// Animation for the grid elements
const gridTimeline = gsap.timeline();

gridTimeline.from(".grid div", {
  scale: 0,
  y: 100,
  duration: 0.8,
  stagger: 0.2,
  ease: "power2.out",
  onComplete: function (elements) {
    gsap.to(elements, {
      scale: 1,
      duration: 0.3,
      ease: "power2.in",
    });
  },
});
// Animation for the footer
gsap.from(".footer-grid", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: "footer",
    start: "top 80%",
    end: "top 50%",
    toggleActions: "play none none reverse",
  },
});