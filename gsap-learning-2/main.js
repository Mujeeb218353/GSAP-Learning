import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// gsap.from("#page1 #box", {
//   scale: 0,
//   duration: 2,
//   rotate: 360,
//   delay: 1,
// });

// gsap.from("#page2 h1", {
//   opacity: 0,
//   x: 500,
//   scrollTrigger: {
//     trigger: "#page2 h1",
//     scroller: "body",
//     start: "top center",
//     end: "bottom center",
//     markers: true,
//     duration: 1,
//     scrub: 2,
//   },
// });

// gsap.from("#page2 h2", {
//   opacity: 0,
//   x: -500,
//   scrollTrigger: {
//     trigger: "#page2 h1",
//     scroller: "body",
//     start: "top center",
//     end: "bottom bottom",
//     markers: true,
//     duration: 1,
//     scrub: 2,
//   },
// });

// gsap.from("#page3 #box", {
//   scale: 0,
//   duration: 1,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page3 #box",
//     scroller: "body",
//     start: "top 60%",
//     markers: true,
//     scrub: 2,
//   },
// });

// gsap.from("#page4 #box1",{
//   scale: 0,
//   duration: 1,
//   rotate: 360,
//   scrollTrigger: {
//     trigger: "#page4 #box1",
//     scroller: "body",
//     start: "top 60%",
//     markers: true,
//     scrub: 2,
//     pin: true
//   },
// })

gsap.to("#page2 h1", {
  transform: "translateX(-200%)",
  scrollTrigger: {
    trigger: "#page2",
    scroller: "body",
    // markers: true,
    start: "top 0px",
    end: "top bottom",
    scrub: 2,
    pin: true,
  }
});

