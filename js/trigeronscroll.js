$(document).ready(function () {
	"use strict";
	
	$(window).scroll(function() {
	var hT = $('#first-nav-element').offset().top,
       hH = $('#first-nav-element').outerHeight(),
       wH = $(window).height(),
       wS = $(this).scrollTop();
    console.log((hT-wH) , wS);
   	if (wS > (hT+hH-wH)){
     //an event will happen when you scroll to the top of the nav menu
   	}
	});
});
