(() => {
  "use strict";
  let e = !0,
    t = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let o = document.querySelectorAll("[data-lp]");
        setTimeout(() => {
          for (let e = 0; e < o.length; e++) {
            o[e].style.paddingRight = "0px";
          }
          (n.style.paddingRight = "0px"),
            document.documentElement.classList.remove("lock");
        }, t),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    },
    n = (t = 500) => {
      let n = document.querySelector("body");
      if (e) {
        let o = document.querySelectorAll("[data-lp]");
        for (let e = 0; e < o.length; e++) {
          o[e].style.paddingRight =
            window.innerWidth -
            document.querySelector(".wrapper").offsetWidth +
            "px";
        }
        (n.style.paddingRight =
          window.innerWidth -
          document.querySelector(".wrapper").offsetWidth +
          "px"),
          document.documentElement.classList.add("lock"),
          (e = !1),
          setTimeout(function () {
            e = !0;
          }, t);
      }
    };
  let o = !1;
  setTimeout(() => {
    if (o) {
      let e = new Event("windowScroll");
      window.addEventListener("scroll", function (t) {
        document.dispatchEvent(e);
      });
    }
  }, 0);
  const i = document.getElementById("gallery");
  (window.onmousemove = (e) => {
    const t = e.clientX,
      n = e.clientY,
      o = t / window.innerWidth,
      d = n / window.innerHeight,
      l = (i.offsetWidth - window.innerWidth) * o * -1,
      c = (i.offsetHeight - window.innerHeight) * d * -1;
    i.animate(
      { transform: `translate(${l}px, ${c}px)` },
      { duration: 5e3, fill: "forwards", easing: "ease" }
    );
  }),
    (window.FLS = !0),
    (function (e) {
      let t = new Image();
      (t.onload = t.onerror =
        function () {
          e(2 == t.height);
        }),
        (t.src =
          "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA");
    })(function (e) {
      let t = !0 === e ? "webp" : "no-webp";
      document.documentElement.classList.add(t);
    }),
    (function () {
      let o = document.querySelector(".menu__btn");
      o &&
        o.addEventListener("click", function (o) {
          e &&
            (((e = 500) => {
              document.documentElement.classList.contains("lock") ? t(e) : n(e);
            })(),
            document.documentElement.classList.toggle("menu-open"));
        });
    })();
})();
