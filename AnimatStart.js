"use strict";

$(document).ready(function(){
	$('#expand').animate({
		height:"+=120",
		width:"+=120",
		"margin-top": "-=60",
	  "margin-left": "-=60",
	},1000,function(){
    $('#main-logo').attr('src', './media/LOGO.png');
    $('#log-text').fadeOut(400, function () {
      $(this).text("Bem vindo");
      $(this).fadeIn(400, function(){
        setTimeout(function(){
          $('#log-text').fadeTo(200, 0);
        }, 500);
        setTimeout(function(){
          $('#idk').hide(200);
        }, 800);
        setTimeout(function(){
					window.location.replace("Home.html");
        }, 950);
      });
    });
	})
});
