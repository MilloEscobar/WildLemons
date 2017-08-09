
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
	}

}(window));

