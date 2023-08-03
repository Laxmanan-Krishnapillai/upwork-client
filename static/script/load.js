// Transition animation
const duration = 0.6,
  ease = "power4.inOut",
  element = document.querySelector(".l");
let a = !1;

function animatePageChange(t) {
  a ||
    ((a = !0),
    document.body.classList.add("animating"),
    gsap.to(element, {
      xPercent: 0,
      duration: duration,
      ease: ease,
      onComplete: () => {
        (window.location.href = t),
          (a = !1),
          document.body.classList.remove("animating");
      },
    }));
}
(window.onload = function () {
  gsap.to(element, {
    xPercent: -100,
    duration: duration,
    ease: ease,
    onComplete: () => {
      gsap.set(element, {
        xPercent: 100,
      });
    },
  });
}),
  $(document).ready(function () {
    $("a").on("click", function handleClick(t) {
      if (
        !a &&
        $(this).prop("hostname") === window.location.hostname &&
        -1 === $(this).attr("href").indexOf("#") &&
        "_blank" !== $(this).attr("target")
      ) {
        t.preventDefault();
        const e = $(this).attr("href");
        animatePageChange(e),
          history.pushState(
            {
              destination: e,
            },
            "",
            e
          );
      }
    }),
      window.addEventListener("popstate", (t) => {
        const e = t.state && t.state.destination;
        e && animatePageChange(e);
      });
  });
