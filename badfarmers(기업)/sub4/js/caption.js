
  $(document).ready(function(){
	  $('.boxgrid').hover(function(){
		  $(".boxcaption", this).stop().animate({top:'0px'},700);
	  }, function() {
		  $(".boxcaption", this).stop().animate({top:'255px'},500);
	  });
  });

		