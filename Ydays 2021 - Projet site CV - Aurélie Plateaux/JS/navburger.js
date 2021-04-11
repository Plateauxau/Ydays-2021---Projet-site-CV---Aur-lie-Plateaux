function navSlide() {
    var burger = document.querySelector(".burger");
    var nav = document.querySelector(".navigationli");
  
    burger.addEventListener("click", () => {
      nav.classList.toggle("nav-active");
      burger.classList.toggle("croix");
    });
  }
  navSlide();