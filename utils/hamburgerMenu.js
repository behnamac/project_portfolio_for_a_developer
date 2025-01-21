const toggleMenu = () => {
    const navbar = document.getElementById("navbar__burger__menu");
    navbar.classList.toggle("active"); // Single toggle for open/close
  };
  
  const hamburgerMenu = () => {
    const burgerBtnOpen = document.getElementById("hamburger");
    const burgerBtnClose = document.getElementById("closeBtn");
  
    burgerBtnOpen.addEventListener("click", toggleMenu);
    burgerBtnClose.addEventListener("click", toggleMenu);
  };
  
  export default hamburgerMenu;
  