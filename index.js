const nav = document.getElementById("main");
const topOfNav = nav.offsetTop;

function stickyNav() {
  if (scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + "px";
    document.body.classList.add("fixed-nav");
    console.log(nav.offsetHeight);
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove("fixed-nav");
  }
}

window.addEventListener("scroll", stickyNav);
