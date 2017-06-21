var app = function (window) {
	/************* 
	APP CONSTANTS
	**************/

	var ACCESS_TOKEN = '31dbd1f65af6d8809fe96da31d38db04180043a06854cc19b39431317cd4d3b5',
	SPACE_ID = 'o2re92u0b14d',
	MEMBERS_ID = 'members',
	SERVICES_ID='services',
	ABOUT_ID='about',
	WORKS_ID='works',
	MATERIALS_LIST = $('#materials'),
	FORM_BUTTON = $('#sendEmail'),
	FORM_NAME = $('#formName').val(),
	FORM_GOTCHA = $('#gotcha').val(),
	FORM_MESSAGE = $('#formMessage').val(),
	FORM_EMAIL = $('#formEmail').val(),
	HEADER_SECTION = $(".header-space"),
	SPANISH = false;
	LENGUAGE_BTN = $('.lenguage-btn');
	a = HEADER_SECTION.offset().top + $(".header-space").height() - 70,
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
	});

	$(document).on('scroll', function(){

		if($(this).scrollTop() > a) {   
			$('.nav-wrapper').removeClass("transparent");
		} else {
	   		$('.nav-wrapper').addClass("transparent");
		}
	});

	/*
	*LENGUAGE CHANGER
	*/

	LENGUAGE_BTN.on('click', function (e) {
		e.preventDefault();
		if (this.value === 'true') {
			app.SPANISH = true;
		} else {
			app.SPANISH = false;
		}
		changeLenguage()
	});

	function changeLenguage() {
		app.getAbout(app.ABOUT, true);
		app.getMembers(app.MEMBERS, true);
		app.getServices(app.SERVICES, true);
		app.getWorks(app.WORKS, true);
	}

	console.log('******loading******');
	return {
		ACCESS_TOKEN : ACCESS_TOKEN,
		SPACE_ID : SPACE_ID,
		MEMBERS_ID : MEMBERS_ID,
		SERVICES_ID : SERVICES_ID,
		ABOUT_ID : ABOUT_ID,
		WORKS_ID : WORKS_ID,
		MATERIALS_LIST : MATERIALS_LIST,
		FORM_NAME : FORM_NAME,
		FORM_GOTCHA : FORM_GOTCHA,
		FORM_MESSAGE : FORM_MESSAGE,
		SPANISH : SPANISH,
		FORM_EMAIL : FORM_EMAIL,
	}
	
}(window);

