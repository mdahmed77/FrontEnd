


jQuery(function ($) {
    "use strict";

    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: 2500,
        autoplayHoverPause: true,
        loop: true,
        margin: 30,
        dots: false,
        nav: false,
        responsive: {
           320: {
              items: 1,
           },
        }
     });

     $("#partners-slider").owlCarousel({
         items: 5,
         autoplay: 2500,
         autoplayHoverPause: true,
         loop: true,
         margin: 30,
         dots: false,
         nav: false,
         responsive: {
            320: {
               items: 2,
            },
            768: {
               items: 3,
            },
            991: {
               items: 4,
            },
            1024: {
               items: 5,
            },
         }
      });



// REVIEWS SLIDER SCRIPT
     $('.reviews-slider').owlCarousel({
         margin: 10,
            dots: false,
            loop: false,
            nav: true,
            navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
            dots: false,
            responsive: {
               0: {
                     items: 1
               },
               576: {
                     items: 2
               },
               991: {
                     items: 3,
                     touchDrag: false,
                     mouseDrag: false
               }
            }
      });
 // REVIEWS SLIDER SCRIPT END 

     $( ".arrow-show" ).click( function() {
      $( this ).toggleClass( "active" );
    });  
    
    
   // Accordian
   // Add minus icon for collapse element which is open by default
   $(".collapse.show").each(function () {
      $(this).parent().addClass("open-card");
   });

   // Toggle plus minus icon on show hide of collapse element
   $(".collapse").on('show.bs.collapse', function () {
      $(this).parent().addClass("open-card");
   }).on('hide.bs.collapse', function () {
      $(this).parent().removeClass("open-card");
   });


  $('.az-list li a').each(function () {
      if ($(this).hasClass('active')) {
         $('.az-filtered-results h1').text($(this).text());
      }
   });

   $('.az-list li a').each(function () {
      $(this).on('click', function (e) {
         e.preventDefault();
         $(".az-list li a").removeClass('active');
         $(this).addClass('active');
         $('.az-filtered-results h1').text($(this).text());
         filterList();
      });
   });
   filterList();

   // $(".az-filtered-results .empty").hide();
});

function filterList() {
   var alpha_ = $('.az-filtered-results h1').text();
   $(".az-filtered-results .empty strong").text(alpha_);
   var found = false; 
   $(".az-filtered-results .filtered-list li a").each(function () {
      if ($(this).text().startsWith(alpha_)) {
         $(this).parent().fadeIn();
         found = true;
      }
      else {
         $(this).parent().hide();
      }

   });
   if (!found) {
      $(".az-filtered-results .empty").fadeIn();
   } else {
      $(".az-filtered-results .empty").hide();
   }
}


$('#condition-search').on('keyup', function(){

   var beta_ = $(this).val().toUpperCase();
   var found_ = false;
   $(".az-filtered-results .filtered-list li").show();
   $('.az-list li a').each(function (){
      if($(this).text() == beta_.slice(0,1))
      {
        $(".az-list li a").removeClass('active');
         $(this).addClass('active');
      }

   });

   $('.az-filtered-results h1').text(beta_.slice(0,1));
   $(".az-filtered-results .empty strong").text(beta_);

   

   $(".az-filtered-results .filtered-list li a").each(function () {
      if($(this).text().toUpperCase().startsWith(beta_))
      {
         $(this).parent().fadeIn();
         found_ = true;
      }
      else {
         $(this).parent().hide();
      }
   });
   if (!found_) {
      $(".az-filtered-results .empty").fadeIn();
   } else {
      $(".az-filtered-results .empty").hide();
   }
   if(beta_ == '')
   {
      $('.az-filtered-results h1').text('A');      
   }
});

