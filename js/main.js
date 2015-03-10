var getJSON = function(url) {

	return new Promise(function(resolve, reject) {

		var xhr = new XMLHttpRequest();
		xhr.open('get', url, true);
		xhr.responseType = 'json';

		xhr.onload = function() {
			var status = xhr.status;
			if (status == 200) {
				resolve(xhr.response);
			} else {
				reject(status);
			}
		};

		xhr.send();

	});

};

getJSON('https://cdn.contentful.com/spaces/zn4l48o149i7/entries/Yj9MeLPvkkoMqm24Iy0UQ?access_token=c1a6944f7eff7ee98aa84b58dc44f58dfe80260334d3c693da0a5ea78bacbca3').then(function(data) {
	document.getElementById("headline").innerHTML = data.fields.basketball;
	document.getElementById("text").innerHTML = data.fields.textfield;
}, function(status) {
	console.log('Something went wrong.');
});