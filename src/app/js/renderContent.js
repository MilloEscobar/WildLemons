(function (window) {
	app.renderAbout = function (res , rerender) {
		app.ABOUT = res;

		if (app.SPANISH) {
			$('#about li p').html(res.items[0].fields.descriptionSpanish2);
		} else {
			$('#about li p').html(res.items[0].fields.descriptionEnglish1);
		}
		if (!rerender) {
			$('#about li.img').html('<img src="'+res.includes.Asset[0].fields.file.url+'">');
		}
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
	app.renderAboutImages  = function (res, rerender) {
		app.ABOUTIMAGES = res;

		console.log(res);
		for (var i = 1; i < 5; i++) {
			$('#about-img-'+i).attr("src", "https:"+app.ABOUTIMAGES.includes.Asset[(i-1)].fields.file.url);
		}
		

	}

	app.formSuccess = function (res) {
		var form = $('#form');
		app.FORM_NAME.val();
		app.FORM_GOTCHA .val();
		app.FORM_MESSAGE.val();
		app.FORM_EMAIL.val();

		if (!app.SPANISH) {
			var successForm = '<p>We are happy you are here <b class="client-name">'+app.FORM_NAME.val()+'</b>! We look forward to join your project. We will contact you as soon as possilble <b>:)</b></p>';
		}else{
			var successForm = '<p>Gracias por tu interes <b class="client-name">'+app.FORM_NAME.val()+'</b>, te contactaremos lo mas pronto posible. :)</p>';
		}
		
		form.html(successForm);
		app.SPINNER.addClass('hidden');
	}

	app.formError = function (res) {
		console.log('formError',res);
		app.SPINNER.addClass('hidden');
	}

}(window));