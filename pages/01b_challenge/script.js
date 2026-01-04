gsap.to(".card", {
  opacity: 1,
  sacle: 1,
  duration: 5,
  onConplete: () => {
    gsap.to(".card", {
      y: -20,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      
    });
  },
});
