$(document).ready(function() {
	var streamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
	$.each(streamers, function(i) {
		var jsonUrl = 'https://wind-bow.glitch.me/twitch-api/streams/' + streamers[i];
		//getting JSON data about streams
		$.getJSON(jsonUrl, function(json) {
			if (json.stream === null) {
				$("#offlinePlayers").append("<div class='row'><div class='col'><p>" + "<em>" + streamers[i] + "</em>"+ " is offline</p></div></div>");

				// console.log("The user" + streamers[i] + "is offline");
			} else {
				// console.log(json);
        var html = '<div class="row"><div class="col">';
				  // html += "<img class='img-fluid' style = 'max-height: 100px; border-radius: 45%;' src = '" + json.stream.channel.logo + "' " + "alt='" + "'></div>";
				html += "<img class='float-left' style = 'max-height: 50px; border-radius: 45%;' src = '" + json.stream.channel.logo + "' " + "alt='" + "'>";

        html += "<p><a style ='color:white;'' target='_blank' href='" + json.stream.channel.url + "'><strong>" + streamers[i] + "</strong></a>"
				 	+ " is " + json.stream.stream_type + "</p></div>";

        html += "<div class='col'><p>Playing " + json.stream.game + "</p></div>";

        // html += "<img src = '" + json.stream.preview.medium + "' " + "alt='" + "'>"
        // html += '<div class="col"style="border: 1px solid #000"><a style ="color:black;" target="_blank" href="' + json.stream.channel.url + '">GO to their channel</a>';
        html += "</div>";
        $("#onlinePlayers").append(html);

			}
		});
	});
});
