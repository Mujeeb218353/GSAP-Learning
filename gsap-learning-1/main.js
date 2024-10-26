import {gsap} from "gsap";

gsap.to('#box1', {
    x: 1000,
    duration: 1,
    delay: 1,
    rotate: 360,
    backgroundColor: "blue",
    borderRadius: "50%",
    repeat: 2,
    // repeat: -1, infinite
    yoyo:true
})

gsap.from('#box2', {
    x: 1000,
    duration: 1,
    delay: 2,
    rotate: 360,
    backgroundColor: "green",
})

gsap.from('h2', {
    y: 100,
    duration: 1,
    opacity: 0,
    stagger: 0.3
})

let tl = gsap.timeline({
    repeat: 1,
    yoyo: true
})

tl.to('#box3', {
    x: 1000,
    duration: 1.5,
    borderRadius: "50%",
    rotate: 360,
    delay:2
})
tl.to('#box4', {
    x: 1000,
    duration: 1.5,
    backgroundColor: "green",
    rotate: 360
})
tl.to('#box5', {
    x: 1000,
    duration: 1.5,
    scale: 0.5,
    rotate: 360
})

let navTl = gsap.timeline()

navTl.from("h1", {
    y: -10,
    duration: 1,
    opacity: 0,
    delay: 0.5
})

navTl.from("h3", {
    y: -10,
    duration: 1,
    opacity: 0,
    stagger: 0.2
})

navTl.from("p", {
    y: 20,
    duration: .5,
    opacity: 0,
    scale: .2
})