const scroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: { smooth: true },
  smartphone: { smooth: true },
});

// body color
scroll.on("scroll", () => {
  //   console.log("ca scroll");
  if (document.querySelector("#color.is-inview")) {
    document.body.style.background = "#000000";
    document.body.style.color = "#FFFFFF";
  } else {
    document.body.style.background = "#FFFFFF";
    document.body.style.color = "#000000";
  }
});
