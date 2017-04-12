
(function (window) {
	app.getMaterials = function () {
		var url = 'https://cdn.contentful.com/spaces/'+app.SPACE_ID+'/entries?access_token='+app.ACCESS_TOKEN+'&content_type='+app.MATERIALS_ID;
		object = {
					url : url,
					method : "GET",
					callback : app.renderMaterials,
                    errorCallback : app.errorMaterials,
                    dataType : 'json',
                    headers: {}
				}

		app.ajax(object);
	}

	app.getServices = function () {
		var url = 'https://cdn.contentful.com/spaces/'+app.SPACE_ID+'/content_types/'+app.SERVICES_ID+'?access_token='+app.ACCESS_TOKEN
		console.log('getServices');
		object = {
					url : "/spaces/{space_id}/content_types/{content_type_id}?access_token={access_token}",
					method : "GET",
					callback : app.renderMaterials,
                    errorCallback : app.errorMaterials,
                    dataType : 'json',
                    headers: {}
				}

		app.ajax(object);
	}
}(window));