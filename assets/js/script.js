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
			var weatherDescription = jsonData.weather[0].description;
			var weatherId = jsonData.weather[0].id;
			$("#location").text(jsonData.name + ", " + jsonData.sys.country);
			$("#temperature").text(tempInCelsius + " °" + "C");
			$("#weather-description").text(weatherDescription);
			
			//Icon set statements
			if(weatherId >= 200 && weatherId <= 232) {
				$("#icon").prepend("<img src='http://openweathermap.org/img/w/11d.png' />");
			} else if(weatherId >= 300 && weatherId <= 321) {
					$("#icon").prepend("<img src='http://openweathermap.org/img/w/09d.png' />");	
			} else if(weatherId >= 500 && weatherId <= 504) {
					$("#icon").prepend("<img src='http://openweathermap.org/img/w/10d.png' />");
			} else if (weatherId === 511) {
					$("#icon").prepend("<img src='http://openweathermap.org/img/w/13d.png' />");
			} else if (weatherId >= 520 && weatherId <= 531) {
					$("#icon").prepend("<img src='http://openweathermap.org/img/w/09d.png' />");
			} else if (weatherId >= 600 && weatherId <= 622) {
					$("#icon").prepend("<img src='http://openweathermap.org/img/w/13d.png' />");
			} else if (weatherId >= 701 && weatherId <= 781) {
					$("#icon").prepend("<img src='http://openweathermap.org/img/w/50d.png' />");
			} // I have to add DAY and NIGHT icon, depends on current time
				else if (weatherId === 800) { 
					$("#icon").prepend("<img src='http://openweathermap.org/img/w/01d.png' />");
			} // I have to add DAY and NIGHT icon, depends on current time
				else if (weatherId === 801) {
					$("#icon").prepend("<img src='http://openweathermap.org/img/w/02d.png' />");
			} else if (weatherId === 802) {
					$("#icon").prepend("<img src='http://openweathermap.org/img/w/03d.png' />");
			} else if (weatherId === 803 || weatherId <= 804) {
					$("#icon").prepend("<img src='http://openweathermap.org/img/w/04d.png' />");
			}



			



			// switch(weatherId) {
			// 	case weatherId >= 300 && weatherId <= 321:
			// 		$("#icon").prepend("<img src='http://openweathermap.org/img/w/09d.png' />");
			// 		break;
			// 	case weatherId >= 800 && weatherId <= 804:
			// 		$("#icon").prepend("<img src='http://openweathermap.org/img/w/04d.png' />");	
			// 		break;
			// }
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