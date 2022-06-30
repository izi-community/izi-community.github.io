(function($) {
  "use strict";

  /*-------------------------------------
  Sidebar
  -------------------------------------*/
  if ($(window).width() > 991) {
      $('.btn-toggle').on('click', function() {
          if ($("body").hasClass('open-sidebar')) {
              $('.fxt-page-content').find('.active-animation').each(function() {
                  $(this).removeClass('active-animation');
              });
          } else {
              runObserver();
          }
          $("body").toggleClass("open-sidebar");
      });
  }

 /*-------------------------------------
    On Load
    -------------------------------------*/
    $(window).on('load resize', function() {

      $('body').imagesLoaded().done(function(instance) {
        console.log("AAA")
          $('body').addClass('loaded');
      });

      $('[data-type="section-switch"], #triger-page-content').on('click', function() {
          if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
              var target = $(this.hash);
              if (target.length > 0) {

                  target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                  $('html,body').animate({
                      scrollTop: target.offset().top
                  }, 1000);
                  return false;
              }
          }
      });

  });
    /*-------------------------------------
    Intersection Observer
    -------------------------------------*/
    function runObserver() {
      if (!!window.IntersectionObserver) {
          let observer = new IntersectionObserver((entries, observer) => {
              entries.forEach(entry => {
                  if (entry.isIntersecting) {
                      entry.target.classList.add("active-animation");
                      observer.unobserve(entry.target);
                  }
              });
          }, {
              rootMargin: "0px 0px -150px 0px"
          });
          document.querySelectorAll('.has-animation').forEach(block => {
              observer.observe(block)
          });
      } else {
          document.querySelectorAll('.has-animation').forEach(block => {
              block.classList.remove('has-animation')
          });
      }
  }

  runObserver();

  /*-------------------------------------
Section background image
-------------------------------------*/
  $("[data-bg-image]").each(function() {
      var img = $(this).data("bg-image");
      $(this).css({
          backgroundImage: "url(" + img + ")"
      });
  });


  function RemoveClass() {
      $('#subscribe-input-group').removeClass("group-hidden");
  }

  /*-------------------------------------
  Contact Form initiating
  -------------------------------------*/
  var contactForm = $('#contact-form');
  if (contactForm.length) {
      
  }

})(jQuery);

//AKfycbx1QksuAIPxfojJNKqK6_pMoybAFZmy8JkmtgPTtM9Id548G0tdub9Oe5TKVyYzbHE
//https://script.google.com/macros/s/AKfycbx1QksuAIPxfojJNKqK6_pMoybAFZmy8JkmtgPTtM9Id548G0tdub9Oe5TKVyYzbHE/exec

$(document).ready(() => init());

const init = () => {
  // initContactForm({
  //   formName: "submit-to-google-sheet",
  //   submitButton: "#id-submit-google-form",
  //   message: "#id-submit-google-form-message",
  //   loadingId: "#id-fa-spin"
  // });

  initContactForm({
    formName: "submit-to-google-sheet-2",
    submitButton: "#id-submit-google-form-2",
    message: "#id-submit-google-form-message-2",
    loadingId: "#id-fa-spin-2"
  });

  $("#id-fa-spin").hide();
  $("#id-fa-spin-2").hide();
};

const initContactForm = ({
  formName = "submit-to-google-sheet",
  submitButton = "#id-submit-google-form",
  message = "#id-submit-google-form-message",
  loadingId = "#id-fa-spin"
}) => {
  const formElement = document.forms[`${formName}`];
  console.log($(`${submitButton}`))
  const scriptURL =
    "https://script.google.com/macros/s/AKfycbx1QksuAIPxfojJNKqK6_pMoybAFZmy8JkmtgPTtM9Id548G0tdub9Oe5TKVyYzbHE/exec";
  formElement.addEventListener("submit", (e) => {
    $(`${submitButton}`).prop("disabled", true);
    $(`${loadingId}`).show();
    e.preventDefault();
    const formData = new FormData(formElement);
    formData.append("date", moment().format("DD-MM-YYYY HH:mm"));
    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((a) => {
        $(`${submitButton}`).prop("disabled", false);
        formElement.reset();
        $(`${loadingId}`).hide();
        $(`${message}`).show();
        setTimeout(() => {
          $(`${message}`).hide();
        }, 4000);
      })
      .catch((error) => {
        $(`${submitButton}`).prop("disabled", false);
        $(`${loadingId}`).hide();
        console.error("Error!", error.message);
      });
  });
};
