////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// jQuery
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
var resizeId;
var marqueeInitialized = 0;

$(document).ready(function($) {
    "use strict";

	$(".navbar-nav .nav-link").on("click", function(){
		$(".navbar-collapse").collapse("hide");
	});

	$(".ts-open-side-panel").on("click", function(){
	   $("body").toggleClass("ts-side-panel-active");
    });

    $(".ts-close-side-panel").on("click", function(){
        $("body").removeClass("ts-side-panel-active");
    });

    $(document).keydown(function(e) {
        if( !$("body").hasClass("mfp-zoom-out-cur") ){
            switch(e.which) {
                case 27: // ESC
                    $(".ts-close-side-panel").trigger("click");
                    break;
            }
        }
    });

    $(".ts-shapes-canvas .ts-background-image").each(function(){
        var $this = $(this);
        $this.css({
            "animation-duration": (Math.floor(Math.random() * 10)+5) + "s"
        });
        $this.wrap('<div class="ts-shape"></div>');
        if( $this.attr('data-bg-opacity') ){
            $this.css("opacity", $this.attr('data-bg-opacity') );
        }
    });

    $(".ts-img-into-bg").each(function() {
        $(this).css("background-image", "url("+ $(this).find("img").attr("src") +")" );
    });

//  Background

    $("[data-bg-color], [data-bg-image], [data-bg-particles]").each(function() {
        var $this = $(this);

        if( $this.hasClass("ts-separate-bg-element") ){
            $this.append('<div class="ts-background">');

            // Background Color

            if( $("[data-bg-color]") ){
                $this.find(".ts-background").css("background-color", $this.attr("data-bg-color") );
            }

            // Particles

            if( $this.attr("data-bg-particles-line-color") || $this.attr("data-bg-particles-dot-color") ){
                $this.find(".ts-background").append('<div class="ts-background-particles">');
                $(".ts-background-particles").each(function () {
                    var lineColor = $this.attr("data-bg-particles-line-color");
                    var dotColor = $this.attr("data-bg-particles-dot-color");
                    var parallax = $this.attr("data-bg-particles-parallax");
                    $(this).particleground({
                        density: 15000,
                        lineWidth: 0.2,
                        lineColor: lineColor,
                        dotColor: dotColor,
                        parallax: parallax,
                        proximity: 200
                    });
                });
            }

            // Background Image

            if( $this.attr("data-bg-image") !== undefined ){
                $this.find(".ts-background").append('<div class="ts-background-image">');
                $this.find(".ts-background-image").css("background-image", "url("+ $this.attr("data-bg-image") +")" );
                $this.find(".ts-background-image").css("background-size", $this.attr("data-bg-size") );
                $this.find(".ts-background-image").css("background-position", $this.attr("data-bg-position") );
                $this.find(".ts-background-image").css("opacity", $this.attr("data-bg-image-opacity") );

                $this.find(".ts-background-image").css("background-size", $this.attr("data-bg-size") );
                $this.find(".ts-background-image").css("background-repeat", $this.attr("data-bg-repeat") );
                $this.find(".ts-background-image").css("background-position", $this.attr("data-bg-position") );
                $this.find(".ts-background-image").css("background-blend-mode", $this.attr("data-bg-blend-mode") );
            }

            // Parallax effect

            if( $this.attr("data-bg-parallax") !== undefined ){
                $this.find(".ts-background-image").addClass("ts-parallax-element");
            }
        }
        else {

            if(  $this.attr("data-bg-color") !== undefined ){
                $this.css("background-color", $this.attr("data-bg-color") );
                if( $this.hasClass("btn") ) {
                    $this.css("border-color", $this.attr("data-bg-color"));
                }
            }

            if( $this.attr("data-bg-image") !== undefined ){
                $this.css("background-image", "url("+ $this.attr("data-bg-image") +")" );

                $this.css("background-size", $this.attr("data-bg-size") );
                $this.css("background-repeat", $this.attr("data-bg-repeat") );
                $this.css("background-position", $this.attr("data-bg-position") );
                $this.css("background-blend-mode", $this.attr("data-bg-blend-mode") );
            }

        }
    });

    $(".ts-count-down").each(function(){
        var date = $(this).attr("data-date");
        $(this).countdown({
            date: date,
            render: function(data) {
                var el = $(this.el);
                el.empty()
                .append("<div><span class='ts-cc-number'>" + this.leadingZeros(data.days, 2) + " </span><span class='ts-cc-description'>Days</span></div>")
                .append("<div><span class='ts-cc-number'>" + this.leadingZeros(data.hours, 2) + " </span><span class='ts-cc-description'>Hours</span></div>")
                .append("<div><span class='ts-cc-number'>" + this.leadingZeros(data.min, 2) + " </span><span class='ts-cc-description'>Minutes</span></div>")
                .append("<div><span class='ts-cc-number'>" + this.leadingZeros(data.sec, 2) + " </span><span class='ts-cc-description'>Seconds</span></div>");
            }
        });
    });

//     // Magnific Popup

//     var $popupImage = $(".popup-popup");

//     if ( $popupImage.length > 0 ) {
//         $popupImage.magnificPopup({
//             type:'image',
//             fixedContentPos: false,
//             gallery: { enabled:true },
//             removalDelay: 300,
//             mainClass: 'mfp-fade',
//             callbacks: {
//                 // This prevents pushing the entire page to the right after opening Magnific popup image
//                 open: function() {
//                     $(".page-wrapper, .navbar-nav").css("margin-right", getScrollBarWidth());
//                 },
//                 close: function() {
//                     $(".page-wrapper, .navbar-nav").css("margin-right", 0);
//                 }
//             }
//         });
//     }

//     var $videoPopup = $(".video-popup");

//     if ( $videoPopup.length > 0 ) {
//         $videoPopup.magnificPopup({
//             type: "iframe",
//             removalDelay: 300,
//             mainClass: "mfp-fade",
//             overflowY: "hidden",
//             iframe: {
//                 markup: '<div class="mfp-iframe-scaler">'+
//                 '<div class="mfp-close"></div>'+
//                 '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>'+
//                 '</div>',
//                 patterns: {
//                     youtube: {
//                         index: 'youtube.com/',
//                         id: 'v=',
//                         src: '//www.youtube.com/embed/%id%?autoplay=1'
//                     },
//                     vimeo: {
//                         index: 'vimeo.com/',
//                         id: '/',
//                         src: '//player.vimeo.com/video/%id%?autoplay=1'
//                     },
//                     gmaps: {
//                         index: '//maps.google.',
//                         src: '%id%&output=embed'
//                     }
//                 },
//                 srcAction: 'iframe_src'
//             }
//         });
//     }

//     $(".ts-form-email [type='submit']").each(function(){
//         var text = $(this).text();
//         $(this).html("").append("<span>"+ text +"</span>").prepend("<div class='status'><i class='fas fa-circle-notch fa-spin spinner'></i></div>");
//     });

//     $(".ts-form-email .btn[type='submit']").on("click", function(e){
//         var $button = $(this);
//         var $form = $(this).closest("form");
//         var pathToPhp = $(this).closest("form").attr("data-php-path");
//         $form.validate({
//             submitHandler: function() {
//                 $button.addClass("processing");
//                 $.post( pathToPhp, $form.serialize(),  function(response) {
//                     $button.addClass("done").find(".status").append(response).prop("disabled", true);
//                 });
//                 return false;
//             }
//         });
//     });

//     $("form:not(.ts-form-email)").each(function(){
//         $(this).validate();
//     });

// // On RESIZE actions

    $(window).on("resize", function(){
        clearTimeout(resizeId);
        resizeId = setTimeout(doneResizing, 250);
    });
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// Functions
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Do after resize

function doneResizing(){
   
}

//AKfycbx1QksuAIPxfojJNKqK6_pMoybAFZmy8JkmtgPTtM9Id548G0tdub9Oe5TKVyYzbHE
//https://script.google.com/macros/s/AKfycbx1QksuAIPxfojJNKqK6_pMoybAFZmy8JkmtgPTtM9Id548G0tdub9Oe5TKVyYzbHE/exec



$(document).ready(() => init());

const init = () => {
  initContactForm();
  $("#id-fa-spin").hide()
};

const initContactForm = () => {
  const formElement = document.forms["submit-to-google-sheet"];
  const scriptURL = "https://script.google.com/macros/s/AKfycbx1QksuAIPxfojJNKqK6_pMoybAFZmy8JkmtgPTtM9Id548G0tdub9Oe5TKVyYzbHE/exec";
  formElement.addEventListener("submit", (e) => {
    $(".loader").show();
    $("#id-submit-google-form").prop("disabled", true);
    $("#id-fa-spin").show()
    e.preventDefault();
    const formData = new FormData(formElement);
    formData.append("date", moment().format("DD-MM-YYYY HH:mm"))
    fetch(scriptURL, {
      method: "POST",
      body: formData,
    })
      .then((response) => response.json())
      .then((a) => {
        formElement.reset();
        $("#id-fa-spin").hide()
        $("#id-submit-google-form-message").show();
        setTimeout(() => {
            $("#id-submit-google-form-message").hide()
        }, 4000)
      })
      .catch((error) => {
        $("#id-fa-spin").hide()
        console.error("Error!", error.message);
      });
  });
};
