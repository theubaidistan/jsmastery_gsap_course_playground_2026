import { gsap } from "https://cdn.skypack.dev/gsap@3.12.0";

// Get all reaction buttons
const buttons = document.querySelectorAll(".reactions button");

// Add click event listener to each button
buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    // Get the emoji from the button
    const emoji = button.dataset.emoji;

    // Create a bubble element
    const bubble = document.createElement("div");
    bubble.className = "bubble";
    bubble.textContent = emoji;

    // Get button position
    const rect = button.getBoundingClientRect();
    const startX = rect.left + rect.width / 2;
    const startY = rect.top + rect.height / 2;

    // Position the bubble at the button location
    bubble.style.left = `${startX}px`;
    bubble.style.top = `${startY}px`;

    // Add to document
    document.body.appendChild(bubble);

    // Random horizontal drift for variety
    const randomDrift = gsap.utils.random(-50, 50);

    // Animate the bubble using fromTo
    gsap.fromTo(
      bubble,
      {
        // Starting values
        y: 0,
        x: 0,
        scale: 1,
        rotation: 0,
        opacity: 1,
      },
      {
        // Ending values
        y: -200,
        x: randomDrift,
        scale: 1.5,
        rotation: gsap.utils.random(-45, 45),
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        onComplete: () => {
          // Remove the bubble from DOM after animation completes
          bubble.remove();
        },
      }
    );
  });
});
