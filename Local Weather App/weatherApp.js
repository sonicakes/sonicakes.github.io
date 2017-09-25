var latitude;
var longitude;
var switchOver = true;
var given = 10;
var temp;
var f;

$(document).ready(function() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(function(position) {
			var latitude = position.coords.latitude;
			var longitude = position.coords.longitude;
			$("#data").html("latitude: " + latitude + "<br>longitude: " + longitude);
			var weatherUrl = "https://fcc-weather-api.glitch.me/api/current?lat=" + latitude + "&lon=" + longitude;
			$.getJSON(weatherUrl, function(weatherInfo) {
				var location = JSON.stringify(weatherInfo.name + ", " + weatherInfo.sys.country).replace(/\"/g, "");
				$("#data").html(location);
				var weatherData = JSON.stringify(weatherInfo.weather[0].description).replace(/\"/g, "");
				temp = JSON.stringify(Math.round(weatherInfo.main.temp)).replace(/\"/g, "");
				$("#weather").html(weatherData);
				$("#temperature").html(temp + " &#8451");
				//&#8457 - Farenheit
				var pic = "";
				pic += "<img src = '" + weatherInfo.weather[0].icon + "' " + "alt='" + "'>";
				$("#icon").html(pic);

        //change background depending on the temperature
        if (temp < 0) {
          $('body').css('background', 'url("snowy.jpg")');
          $('body').css('background-size', 'cover');
        }
        if(temp>0 && temp<20){
          $('body').css('background', 'url("cloudy.jpg")');
          $('body').css('background-size', 'cover');
        }
        if(temp>20){
          $('body').css('background', 'url("summer.jpg")');
          $('body').css('background-size', 'cover');
          $('body').css('background-repeat', 'no-repeat');
        }


				//change temperature from F to C and back
				$("#changeUnit").on("click", function() {
        var f = (temp * 9) / 5 + 32;
					if (switchOver == true) {
						switchOver = false;
						$("#temperature").html(f + " &#8457");
					} else if (switchOver == false) {
						switchOver = true;
						$("#temperature").html(temp + " &#8451");
					}


				});

			});
		});
	}
});
