import gsap from "gsap";

const card = document.getElementById("card");

// initial state (important for 3D feel)
gsap.set(card, {
  rotateY: 0,
  transformStyle: "preserve-3d",
});

card.addEventListener("mouseenter", () => {
  gsap.to(card, {
    rotateY: 180,
    duration: 0.8,
    ease: "power2.out",
  });
});

card.addEventListener("mouseleave", () => {
  gsap.to(card, {
    rotateY: 0,
    duration: 0.8,
    ease: "power2.inOut",
  });
});
