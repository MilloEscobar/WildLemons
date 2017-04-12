(function (window) {
	app.renderMaterials = function (res) {
		$(app.MATERIALS_LIST).html('');
		
		for (var i = 0; i < res.items.length; i++) {
			var product = document.createElement("li");

			var name = document.createElement("h3");
			$(name).html(res.items[i].fields.name);

			var price = document.createElement("p");
			$(price).text('$'+res.items[i].fields.precio+res.items[i].fields.sistemaDeMedida);

			if (res.items[i].fields.precioOferta) {
				var priceDiscount = document.createElement("p");
				$(priceDiscount).text(''+res.items[i].fields.precioOferta+res.items[i].fields.sistemaDeMedida);
			}			

			$(product).append(name, price , priceDiscount);
			$(app.MATERIALS_LIST).append(product);
		
		}
	}

	app.renderServices = function (res) {
		

	}

	app.errorMaterials = function (res) {
		console.log(res);
	}

	app.errorServices = function (res) {
		console.log(res);
	}

	app.formSuccess = function (res) {
		console.log(res);
	}

	app.formError = function (res) {
		console.log(res);
	}	
}(window));