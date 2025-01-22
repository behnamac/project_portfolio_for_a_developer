const scrollToTop = () => {
  const scrollToTopButton = document.getElementById("scrollTop");
  const toggleButtonVisibility  =()=>{
    window.scrollY > 300
      ? (scrollToTopButton.style.display = "block")
      : (scrollToTopButton.style.display = "none");}
  if (!scrollToTopButton) return;
  window.addEventListener("scroll", toggleButtonVisibility );

  scrollToTopButton.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};

export default scrollToTop;
