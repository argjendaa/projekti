// Toggle the navbar links visibility on mobile
const navbarToggle = document.getElementById('navbar-toggle');
const navbarLinks = document.getElementById('navbar-links');

navbarToggle.addEventListener('click', () => {
  navbarLinks.classList.toggle('active'); // Toggle 'active' class
});


$(document).ready(function(){

  // Funksioni i klikimit të ikonës 'fa-bars'
  $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');  // Ndryshon ikonën e hamburgerit në 'X'
      $('.navbar').toggleClass('nav-toggle');  // Aktivizon ose deaktivizon menunë e navigimit
  });

  // Funksioni që lidhet me ngjarjet 'scroll' dhe 'load'
  $(window).on('scroll load', function(){
      $('.fa-bars').removeClass('fa-times');  // Heq 'X' nëse përdoruesi bëri rrotullim
      $('.navbar').removeClass('nav-toggle');  // Heq menu-në e aktivizuar nëse nuk është në modalitetin e mobilit

      // Kontrollo nëse është rrotulluar më shumë se 30px dhe aktivizo/çaktivizo 'header-active'
      if($(window).scrollTop() > 30){
          $('header').addClass('header-active');  // Shto klasën 'header-active' kur faqja është rrotulluar
      } else {
          $('header').removeClass('header-active');  // Heq 'header-active' nëse faqja është rikthyer më poshtë
      }
  });
});

//$(this).toggleClass('fa-times');
$('.navbar').toggleClass('nav-toggle');
});

(window).on('scroll load',function(){
$('.fa-bars').removeClass('fa-times');
$('.navbar').removeClass('nav-toggle');

if($(Window).scrollTop()  >  30){
    $('header').addClass('header-active');
}else{
    ('header').removeClass('header-active');
}
});


});





//   navbar function 
$(document).ready(function(){

  $('.fa-bars').click(function(){
      $(this).toggleClass('fa-times');
      $('.navbar').toggleClass('nav-toggle');
  });

  $(window).on('scroll load',function(){
      $('.fa-bars').removeClass('fa-times');
      $('.navbar').removeClass('nav-toggle');

      if($(Window).scrollTop()  >  30){
          $('header').addClass('header-active');
      }else{
          $('header').removeClass('header-active');
      }
  });

  
});




function goBack() {
    window.history.back();
}



document.getElementById('contactForm').addEventListener('submit', function(event) {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var errorMessage = document.getElementById('error-message');

    // Kontrollo nëse ka fusha të pashënuara
    if (name === "" || email === "" || message === "") {
        errorMessage.textContent = "Të gjitha fushat janë të kërkuara!";
        event.preventDefault(); // Nuk e lejon dërgimin e formularit
    }



    document.getElementById("name-result").textContent = urlParams.get('name');
    document.getElementById("email-result").textContent = urlParams.get('email');
    document.getElementById("message-result").textContent = urlParams.get('message');