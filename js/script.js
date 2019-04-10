$(document).ready(function(){
	
	$(".accord-collapse").click(function() {
     // For active header 
     $('.accord-collapse').removeClass('active');
     $(this).addClass('active');
     
     // Accordion toggle content
     if($(this).next(".accordion-body").is(":visible")){
       $(this).next(".accordion-body").slideUp(400);
       $(this).removeClass('on');
     } 
     else {
       $(".accord-body").slideUp(400);
       $(this).next(".accordion-body").slideToggle(400);
     }
});	
	//Owl carosuel for main page
   $('.carousel-wrap').owlCarousel({
   		    responsiveClass:true,
   		    dots:false,
		    responsive:{
		        0:{
		            items:1,
		            nav:true
		        },
		        600:{
		            items:1,
		            nav:true
		        },
		        1000:{
		            items:1,
		            nav:true,
		            loop:true,
		            pagination:false
		        }
		    }
   });
   //Mobile menu
   $('.mobileMenu-toggle').click(function(){
   	$('header').toggleClass('is-open');

   	$('.menu-nav').toggleClass('is-open');
   	$(this).toggleClass('is-open');
   })

}); 