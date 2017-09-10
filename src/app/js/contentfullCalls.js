
(function (window) {
	app.getAbout = function () {
		var url = 'https://cdn.contentful.com/spaces/'+app.SPACE_ID+'/entries?access_token='+app.ACCESS_TOKEN+'&content_type='+app.ABOUT_ID;
		object = {
					url : url,
					method : "GET",
					callback : app.renderAbout,
                    errorCallback : app.renderAbout,
                    dataType : 'json',
                    headers: {}
				}

		app.ajax(object);
	}

	app.getMembers = function () {
		var url = 'https://cdn.contentful.com/spaces/'+app.SPACE_ID+'/entries?access_token='+app.ACCESS_TOKEN+'&content_type='+app.MEMBERS_ID;
		object = {
					url : url,
					method : "GET",
					callback : app.renderMembers,
                    errorCallback : app.renderMembers,
                    dataType : 'json',
                    headers: {}
				}

		app.ajax(object);
	}

	app.getServices = function () {
		var url = 'https://cdn.contentful.com/spaces/'+app.SPACE_ID+'/entries?access_token='+app.ACCESS_TOKEN+'&content_type='+app.SERVICES_ID;
		object = {
					url : url,
					method : "GET",
					callback : app.renderServices,
                    errorCallback : app.renderServices,
                    dataType : 'json',
                    headers: {}
				}

		app.ajax(object);
	}

	app.getWorks = function () {
		var url = 'https://cdn.contentful.com/spaces/'+app.SPACE_ID+'/entries?access_token='+app.ACCESS_TOKEN+'&content_type='+app.WORKS_ID;
		object = {
					url : url,
					method : "GET",
					callback : app.renderWorks,
                    errorCallback : app.renderWorks,
                    dataType : 'json',
                    headers: {}
				}

		app.ajax(object);
	}

	app.getWorks = function () {
		var url = 'https://cdn.contentful.com/spaces/'+app.SPACE_ID+'/entries?access_token='+app.ACCESS_TOKEN+'&content_type='+app.ABOUTIMAGES_ID;
		object = {
					url : url,
					method : "GET",
					callback : app.renderAboutImages,
                    errorCallback : app.renderAboutImages,
                    dataType : 'json',
                    headers: {}
				}

		app.ajax(object);
	}

	app.form = function () {
		
		
		var formAutoResponse = {
		    url: "http://localhost:5000/mail", 
		    method: "POST",
		    data: {	
		    		"NAME": app.FORM_NAME.val(),
		    		"email_address" : app.FORM_EMAIL.val()
					},
		    callback : app.formSuccess,
		    errorCallback : app.formError,
		    headers: {},
		    dataType: "json"
		}
		app.ajax(formAutoResponse);
	}
	
	app.form2 = function () {
		var formMail = {
		    url: "https://formspree.io/"+app.EMAIL_SUBMIT_FORM, 
		    method: "POST",
		    data: {	
		    		name: app.FORM_NAME.val(),
		    		message: app.FORM_MESSAGE.val(),
		    		_gotcha : app.FORM_GOTCHA.val(),
		    		_subject : "NEW CLIENT",
		    		email : app.FORM_EMAIL.val(),
					},
		    callback : app.formSuccess,
		    errorCallback : app.formError,
		    headers: {},
		    dataType: "json"
		}
		app.ajax(formMail);
	}

}(window));

