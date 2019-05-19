import { TweenMax, TimelineMax } from "gsap";
const $ = (q) => document.querySelector(q);

TweenMax.set("#box", {
  backgroundColor: "green",
  width: "50px",
  height: "50px",
  x: "50px",
  y: "50px"
})


const timeline = new TimelineMax({ repeat: -1 });

timeline.pause()

timeline.to("#box", 0.5, { x: 100 })
timeline.to("#box", 0.5, { y: 100 })
timeline.to("#box", 0.5, { x: 50 })
timeline.to("#box", 0.5, { y: 50 })

$("#box")
  .addEventListener("click", () => {
    if (timeline.isActive()) {
      timeline.pause()
    } else {
      timeline.resume()
    }
  })
