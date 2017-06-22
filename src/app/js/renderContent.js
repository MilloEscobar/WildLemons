(function (window) {
	app.renderAbout = function (res , rerender) {
		app.ABOUT = res;

		if (app.SPANISH) {
			$('#about li p').html(res.items[0].fields.descriptionSpanish2);
		} else {
			$('#about li p').html(res.items[0].fields.descriptionEnglish1);
		}
		if (!rerender) {
			$('#about li img').attr("src", "https:"+res.includes.Asset[0].fields.file.url);
		}
		
				
		// for (var i = 0; i < res.items.length; i++) {
		// 	var product = document.createElement("li");
		// 	$(product).addClass('list-group-item');

		// 	var name = document.createElement("h3");
		// 	$(name).html(res.items[i].fields.name);

		// 	var price = document.createElement("p");
		// 	$(price).text('$'+res.items[i].fields.precio+res.items[i].fields.sistemaDeMedida);

		// 	if (res.items[i].fields.precioOferta) {
		// 		var priceDiscount = document.createElement("p");
		// 		$(priceDiscount).text(''+res.items[i].fields.precioOferta+res.items[i].fields.sistemaDeMedida);
		// 	}			

		// 	$(product).append(name, price , priceDiscount);
		// 	$(app.MATERIALS_LIST).append(product);
		
		// }
	}

	app.renderMembers = function (res) {
		app.MEMBERS = res;
		var ul = $('#members .members');
		var content = '';
		if (app.SPANISH) {
			for (var i = 0; i < app.MEMBERS.items.length; i++) {
				var imgUrl = '';
				for (var j = 0; j < app.MEMBERS.includes.Asset.length; j++) {
					if (app.MEMBERS.includes.Asset[j].sys.id == app.MEMBERS.items[i].fields.image.sys.id) {
						imgUrl = app.MEMBERS.includes.Asset[j].fields.file.url
					}	
				}
				content = content + '<li class="col-xs-12 col-sm-6"><img src="'+imgUrl+'"><h4 class="title">'+app.MEMBERS.items[i].fields.name+'</h4><p>'+app.MEMBERS.items[i].fields.descriptionSpanish+'</p></li>';
			}
			ul.html(content);
		} else {
			for (var i = 0; i < app.MEMBERS.items.length; i++) {
				var imgUrl = '';
				for (var j = 0; j < app.MEMBERS.includes.Asset.length; j++) {
					if (app.MEMBERS.includes.Asset[j].sys.id == app.MEMBERS.items[i].fields.image.sys.id) {
						imgUrl = app.MEMBERS.includes.Asset[j].fields.file.url
					}	
				}
				content = content + '<li class="col-xs-12 col-sm-6"><img src="'+imgUrl+'"><h4 class="title">'+app.MEMBERS.items[i].fields.name+'</h4><p>'+app.MEMBERS.items[i].fields.descriptionEnglish+'</p></li>';
			}
			ul.html(content);
		}

	}
	app.renderServices = function (res) {
		app.SERVICES = res;
		
		var ul = $('#services .services');
		var content = '';
		if (app.SPANISH) {
			for (var i = 0; i < app.SERVICES.items.length; i++) {
				var imgUrl = '';
				for (var j = 0; j < app.SERVICES.includes.Asset.length; j++) {
					if (app.SERVICES.includes.Asset[j].sys.id == app.SERVICES.items[i].fields.icon.sys.id) {
						imgUrl = app.SERVICES.includes.Asset[j].fields.file.url
					}	
				}
				content = content + '<li class="col-xs-12 col-sm-3"><img src="'+imgUrl+'"><h4 class="title">'+app.SERVICES.items[i].fields.nameSpanish+'</h4><p>'+app.SERVICES.items[i].fields.descriptionSpanish+'</p></li>';
			}
			ul.html(content);
		} else {
			for (var i = 0; i < app.SERVICES.items.length; i++) {
				var imgUrl = '';
				for (var j = 0; j < app.SERVICES.includes.Asset.length; j++) {
					if (app.SERVICES.includes.Asset[j].sys.id == app.SERVICES.items[i].fields.icon.sys.id) {
						imgUrl = app.SERVICES.includes.Asset[j].fields.file.url
					}	
				}
				content = content + '<li class="col-xs-12 col-sm-3"><img src="'+imgUrl+'"><h4 class="title">'+app.SERVICES.items[i].fields.name+'</h4><p>'+app.SERVICES.items[i].fields.descriptionEnglish+'</p></li>';
			}
			ul.html(content);
		}

	}
	app.renderWorks  = function (res, rerender) {
		app.WORKS = res;
		//console.log('renderWorks',res);
		if (app.SPANISH) {
			//console.log('spanish');
		} else {
			//console.log('english');
		}

	}

	app.formSuccess = function (res) {
		console.log('formSuccess',res);
	}

	app.formError = function (res) {
		console.log('formError',res);
	}	
}(window));