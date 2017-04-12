(function (window) {
	app.form = function () {
		object = {
		    url: "https://formspree.io/milloescobar@gmail.com", 
		    method: "POST",
		    data: {	
		    		message: app.FORM_MESSAGE,
		    		_gotcha : app.FORM_GOTCHA,
		    		_subject : "NEW CLIENT",
		    		email : app.FORM_EMAIL,
					},
		    callback : app.formSuccess,
		    errorCallback : app.formError,
		    headers: {},
		    dataType: "json"
		}
		app.ajax(object);
	};
}(window));