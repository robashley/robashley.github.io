$(document).ready(function(){
  if(window.innerWidth <= 800 && window.innerHeight <= 600) {
        $('#myCarousel').carousel({
            interval: 2200
        })

  }
	
  if ( $(window).width() <=800) {      
		$('#overlay').fadeIn('fast').delay(1000).fadeOut('fast')
		$("#overlay").css("height", $(".item img").height());
		} 

    $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},600);
    return false;
  });
});

