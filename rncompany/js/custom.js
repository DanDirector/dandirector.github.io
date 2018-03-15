
jQuery(document).ready(function() {
finalDate    
	/*
		Preloader
	*/
	
  	$(window).load(function() {

   	// will first fade out the loading animation 
    	$("#status").fadeOut("slow"); 

    	// will fade out the whole DIV that covers the website. 
    	$("#preloader").delay(500).fadeOut("slow").remove();      

  	}) 

	/*
		Final Countdown Settings
	*/
  var finalDate = new Date();
  finalDate.setDate(finalDate.getDate() + 1);
  var curDate = getDate(localStorage.getItem('FD'));

  function getDate(obj) {
    return obj ? new Date(JSON.parse(obj).fd) : '';
  };

  finalDate = (curDate && curDate > new Date()) ? curDate : finalDate;

	$('div.counter').countdown(finalDate)
   	.on('update.countdown', function(event) {
      localStorage.setItem('FD', JSON.stringify({'fd': finalDate}));
   		$(this).html(event.strftime('<div class="days-wrapper"><span class="days">%D</span><br>дней</div>' + 
   										 	 '<div class="hours-wrapper"><span class="hours">%H</span><br>часов</div>' + 
   										 	 '<div class="minutes-wrapper"><span class="minutes">%M</span><br>минут</div>' +
   										 	 '<div class="seconds-wrapper"><span class="seconds">%S</span><br>секунд</div>'));

   });  

});

