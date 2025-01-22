const submitForm = () => {
  const formButton = document.getElementById("contact");
  const successMessage = document.getElementById("contact__message");

  formButton.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log('Form submitted');
    successMessage.style.display = "block";
    
    setTimeout(() => {
      successMessage.style.display = "none";
    }, 4000);
});

};
export default submitForm;
