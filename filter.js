const cssRules = [];

class filters {

	createFilters(input, imageid, filter, result) {

		this.aim = input;
		this.filter = filter;
		this.result = result;
		this.imageid = imageid;

		const controls = document.createElement("div");

		controls.id = "controls";
		controls.style.display = "block";

		this.createSliders(this.aim, this.imageid, controls, this.filter, this.result);

		document.getElementById(this.aim).appendChild(controls);
	}

	createSliders(aim, imageid, controls, filter, result) {

		if (Array.isArray(filter)) {

			for (var i = 0; i < filter.length; i++) {

				var label = document.createElement("label");
				var currentFilter = filter[i].split(':');
				label.innerHTML = currentFilter[0];
				controls.appendChild(label);

				var control = document.createElement("input");
				control.type = 'range';
				control.name = currentFilter[0];
				control.id = currentFilter[0];
				control.value = currentFilter[3];
				control.min = currentFilter[1];
				control.max = currentFilter[2];

				(function(currentFilter) {
					control.addEventListener("change",
						function(event) {
							var filterlist = new filters;
							filterlist.addFilter(aim, imageid, currentFilter[0], event.currentTarget.value, result);
						});
				})(currentFilter);

				controls.appendChild(control);
			}
		}
	}

	result(id, value) {
		document.getElementById(id).value = value;
	}

	pushCSS(value, imageid) {

		for (var k = 0; k < cssRules.length; k++) {
			var test = value.split('(');
			if (cssRules[k].match(new RegExp(test[0]))) {
				cssRules[k] = '';
			}
		}

		cssRules.push(value);

		var styled = window.getComputedStyle(document.getElementById(imageid), null).filter;
		var object = document.getElementById(imageid);
		var pushedCSS = '';

		for (var j = 0; j < cssRules.length; j++) {
			pushedCSS += cssRules[j];
		}

		object.style.setProperty("filter", pushedCSS);
		document.getElementById('result').value = 'filter:' + pushedCSS + ';';
	}

	addFilter(id, imageid, filter, value, result) {

		if (id != null) {

			var object = document.getElementById(imageid);
			var style = document.getElementById(result).style;

			if (value != null) {

				switch (filter) {

					case 'Blur':
						this.pushCSS("blur(" + value + "px)", imageid);
						break;
					case 'Brightness':
						this.pushCSS("brightness(" + value + "%)", imageid);
						break;
					case 'Contrast':
						this.pushCSS("contrast(" + value + "%)", imageid);
						break;
					case 'Grayscale':
						this.pushCSS("grayscale(" + value + "%)", imageid);
						break;
					case 'Hue':
						this.pushCSS("hue-rotate(" + value + "deg)", imageid);
						break;
					case 'Invert':
						this.pushCSS("invert(" + value + "%)", imageid);
						break;
					case 'Opacity':
						this.pushCSS("opacity(" + value + "%)", imageid);
						break;
					case 'Saturate':
						this.pushCSS("saturate(" + value + ")", imageid);
						break;
					case 'Sepia':
						this.pushCSS("sepia(" + value + "%)", imageid);
						break;
					default:
						object.style = "filter:none;";
				}
			}
		}
	}
}
