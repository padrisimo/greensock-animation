import { TweenMax, Elastic } from "gsap";

const socks = document.querySelector("#socks");

TweenMax.to(socks, 2, {
  scale: 1.25,
  repeat:-1,
  yoyo: true,
  ease: Elastic.easeInOut
})


