
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

	app.suscribe = function () {
		console.log('subscribed');
		var url = 'https://us16.api.mailchimp.com/3.0/lists/7536c31e36/members/';
		object = {
					url : url,
					method : "POST",
					callback : app.formResponse,
                    errorCallback : app.formResponse,
                    dataType : 'json',
                    headers:  {
					    "content-type": "application/json",
					    "Authorization": "Basic dXNlcjpiYjA2NjVhYTY1OTExNTE4Y2M4YTRmOTA2NDc4YzM5MS11czE2",
					    "Access-Control-Allow-Headers": "x-requested-with" ,
					    "Access-Control-Allow-Headers": "*",
					    "Access-Control-Allow-Origin":"*"
					},
                	data : {
                		"apikey" : "dXNlcjpiYjA2NjVhYTY1OTExNTE4Y2M4YTRmOTA2NDc4YzM5MS11czE2",
					    "email_address": app.FORM_EMAIL,
					    "status": "subscribed",
					    "merge_fields": {
					        "NAME": app.FORM_NAME
					    }
					}
				}

		app.ajax(object)

	}
}(window));

