var app = function (window) {
	/************* 
	APP CONSTANTS
	**************/

	var ACCESS_TOKEN = '83e035756d8888fb43bda186bc4e73ab68e0b05ef053c633fa3dd0c0064ec7fc',
	SPACE_ID = 'stswelzpijg5',
	MATERIALS_ID = 'materiales',
	SERVICES_ID='',
	MATERIALS_LIST = $('#materials'),
	FORM_BUTTON = $('#sendEmail'),
	FORM_NAME = $('#formName').val(),
	FORM_GOTCHA = $('#gotcha').val(),
	FORM_MESSAGE = $('#formMessage').val(),
	FORM_EMAIL = $('#formEmail').val(),
	HEADER_SECTION = $(".header-space"),
	a = HEADER_SECTION.offset().top + $(".header-space").height() - 70 ,
	NAV_LINKS= $('#navbar-scroll .go-to');


	/************* 
	APP EVENTS ACTIONS 
	**************/

	/*
	* smooth scrolling
	*/
	jQuery.scrollSpeed(80, 1000);


	/*
	* smooth scrolling
	*/
	FORM_BUTTON.on( "click", function(e) {
		e.preventDefault();
  		app.form();
	});


	/*
	* go to section srolling
	*/
	function goToByScroll(id){
    $('html,body').animate({
        scrollTop: ($(id).offset().top)},
        'slow');
	}

	NAV_LINKS.click(function(e) { 
	      // Prevent a page reload when a link is pressed
	    e.preventDefault(); 
	    $( "#navbar-icon" ).trigger( "click" );
	      // Call the scroll function
	    goToByScroll($(this).attr('href'));           
	});

	/*
	* Change nav-bar background
	*/

	$(window).on('resize', function () {
		a = HEADER_SECTION.offset().top + $(".header-space").height() - 70 ;
		console.log(a);
	});

	$(document).on('scroll', function(){

		if($(this).scrollTop() > a) {   
			$('.nav-wrapper').removeClass("transparent");
		} else {
	   		$('.nav-wrapper').addClass("transparent");
		}
	});

	console.log('******loading******');
	return {
		ACCESS_TOKEN : ACCESS_TOKEN,
		SPACE_ID : SPACE_ID,
		MATERIALS_ID : MATERIALS_ID,
		SERVICES_ID : SERVICES_ID,
		MATERIALS_LIST : MATERIALS_LIST,
		FORM_NAME : FORM_NAME,
		FORM_GOTCHA : FORM_GOTCHA,
		FORM_MESSAGE : FORM_MESSAGE,
		FORM_EMAIL : FORM_EMAIL,
	}
	
}(window);

