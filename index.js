import { TweenMax } from "gsap";

TweenMax.set(document.body, { perspective: 100 });

Array.from({ length: 30 })
  .map(() => document.createElement("div"))
  .forEach(box => {
    box.setAttribute("class", "box")
    document.body.appendChild(box)

    box.addEventListener("mouseover", () => {
      if (!TweenMax.isTweening(box)) {
        TweenMax.to(box, 1, { rotationY: "+=180" })
      }
    })
  })
