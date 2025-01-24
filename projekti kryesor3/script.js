document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm"); 
    const confirmationPage = document.getElementById("confirmationPage"); 
  
   
    if (contactForm && confirmationPage) {
     
      contactForm.addEventListener("submit", function (e) {
        e.preventDefault(); 
        contactForm.classList.add("d-none"); 
        confirmationPage.classList.remove("d-none"); 
      });
  
     
      window.resetForm = function () {
        contactForm.reset(); 
        confirmationPage.classList.add("d-none"); 
        contactForm.classList.remove("d-none");
      };
    } else {
      console.error("Elementet 'contactForm' ose 'confirmationPage' nuk u gjetën!");
    }
  });
  