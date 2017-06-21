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

	app.renderMembers = function (res, rerender) {
		app.MEMBERS = res;
		var li = $('#members .members').children()[1]
		$(li).children('img').attr("src", "https:"+ res.includes.Asset[1].fields.file.url);
		console.log(li);
		console.log(res.includes,res.items[0].fields);
		if (app.SPANISH) {
			//console.log('spanish',res.items[0].fields);
		} else {
			console.log('english',res.items[0].fields);
		}

	}
	app.renderServices = function (res, rerender) {
		app.SERVICES = res;
		//console.log('renderServices',res);
		if (app.SPANISH) {
			//console.log('spanish');
		} else {
			//console.log('english');
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