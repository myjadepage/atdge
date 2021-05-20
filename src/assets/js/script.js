export default () => {
  let menuBtn = document.body.querySelector(".menu-btn");
  let sideNavbar = document.body.querySelector(".side-navbar");
  let containerInner = document.body.querySelector(".content-inner");
  menuBtn.addEventListener("click", function () {
    if (this.classList.contains("active")) {
      this.classList.remove("active");
      sideNavbar.classList.add("shrinked");
      containerInner.classList.add("active");
    } else {
      this.classList.add("active");
      sideNavbar.classList.remove("shrinked");
      containerInner.classList.remove("active");
    }
  });
};
//https://webstudynote.tistory.com/95
