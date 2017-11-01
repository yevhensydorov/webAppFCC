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
			var tempInCelsius = (jsonData.main.temp - 273.15).toFixed(1);
			var weatherDescription = jsonData.weather[0].description;
			var weatherId = jsonData.weather[0].id;

			function getIcons() {
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

			}

			$("#location").text(jsonData.name + ", " + jsonData.sys.country);
			$("#temperature").text(tempInCelsius);
			$("#weather-description").text(weatherDescription);
			getIcons();
			
		});

	}


	getLocation();
	

	// Change temperature scale

	$(".btn-f").click(function(){
		var celsTemp = Number($("#temperature").text());
		var farTemp = (celsTemp * 1.8 + 32).toFixed(1);
		$("#temperature").text(farTemp);
		$("#temp-type").text(" °F");
		$(".btn-c").removeClass("btn-dis");
		$(".btn-c").removeAttr("disabled");
		$(".btn-f").addClass("btn-dis");
		$(".btn-f").attr("disabled", "disabled");
	});

	$(".btn-c").click(function(){
		var farTemp = Number($("#temperature").text());
		var celsTemp = ((farTemp - 32) / 1.8).toFixed(1);
		$("#temperature").text(celsTemp);
		$("#temp-type").text(" °C");
		$(".btn-f").removeClass("btn-dis");
		$(".btn-f").removeAttr("disabled");
		$(".btn-c").addClass("btn-dis");
		$(".btn-c").attr("disabled", "disabled");
	});



});
