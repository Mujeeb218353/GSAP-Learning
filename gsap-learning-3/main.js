import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { Declaration } from "postcss";

gsap.registerPlugin(ScrollTrigger);

let path = "M 210 100 Q 500 100 1710 100";

let finalPath = "M 210 100 Q 500 100 1710 100";

let string = document.querySelector("#string")

string.addEventListener("mousemove", (details) => { 
    path = `M 210 100 Q ${details.x} ${details.y} 1710 100`
    gsap.to("svg path", {
        duration: .3,
        attr: {
            d: path 
        },
        ease: "power3.out",
    })
})

string.addEventListener("mouseleave", (details) => {
    gsap.to("svg path", {
        duration: 1.5,
        attr: {
            d: finalPath 
        },
        ease: "elastic.out(1,0.2)",
    })
})