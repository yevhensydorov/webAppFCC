$(document).ready(function(){
	var lat, long, link;

	function getLocation() {
	    if (navigator.geolocation) {
	        navigator.geolocation.getCurrentPosition(getData);
	    } else { 
	        console.log("Geolocation is not supported by this browser.");
	    }
	}

	function getData(position) {
		lat = position.coords.latitude;
		long = position.coords.longitude;
		link = "https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=4fb207611d39b10d6e71572389d683a4";
		
		$.getJSON(link, function(json){
			var jsonData = json;
			var tempInCelsius = Math.round(jsonData.main.temp - 273.15);
			$("#location").text(jsonData.name + " ," + jsonData.sys.country);
			$("#temperature").text(tempInCelsius + " °" + "C");
			$("weather-description").text(jsonData.weather[0].description);
		});

	}


	getLocation();


});


// $(document).ready(function(){



// 	// if (navigator.geolocation) {
// 	// 	navigator.geolocation.getCurrentPosition(function(position) {
// 	// 		var lat = position.coords.latitude;
// 	// 		var long = position.coords.longitude;
// 	// 	});

// 	// }


// 	// $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + long + "&APPID=4fb207611d39b10d6e71572389d683a4", function(json){
// 	// 			console.log(lat);
// 	// 			// var jsonData = json;
// 	// 			// console.log(jsonData.coord);
// 	// 			// $(".quote-text").text(jsonData.quoteText);
// 	// 			// $(".quote-person").text(jsonData.quoteAuthor);

// 	// 			// quoteText = $(".quote-text").html();
// 	// 			// quoteAuthor = $(".quote-person").html();

// 	// });

// });