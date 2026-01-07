// import gsap from "gsap";

// const showToastLoop = () => {
//   gsap.to(".toast", {
//     y: -120,
//     opacity: 1,
//     scale: 1,
//     duration: 0.8,
//     ease: "power4.out",
//     onComplete: () => {
//       gsap.to(".toast", {
//         delay: 2.5,
//         y: 0,
//         opacity: 0,
//         scale: 0.95,
//         duration: 0.7,
//         ease: "power1.in",
//         onComplete: () => {
//           setTimeout(showToastLoop, 2500);
//         },
//       });
//     },
//   });
// };
//*-------------------------------------------
import gsap from "gsap";

const toastTl = gsap.timeline({
  repeat: -1,
  repeatDelay: 2.5,
  defaults: { ease: "power4.out" },
});

toastTl
  .set(".toast", { y: 0, opacity: 0, scale: 0.95 })
  .to(".toast", {
    y: -120,
    opacity: 1,
    scale: 1,
    duration: 0.8,
  })
  .to(".toast", {
    y: 0,
    opacity: 0,
    scale: 0.95,
    duration: 0.7,
    ease: "power1.in",
    delay: 2.5,
  });
