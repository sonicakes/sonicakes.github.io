var generatedQuote = '';
var authorQuote = "";
var anotherQuotes = ["Another Quote", "Try again mate!", "Get lucky!", "One click away from another quote!", "More quotes, please"];

$(document).ready(function() {
	// $.ajaxSetup({ cache: false });

  $("#tweetQuote").on("click", function() {
    window.open("https://twitter.com/intent/tweet?text=" + generatedQuote + authorQuote);
  });

	$("#getQuote").on("click", function(object) {
		$.getJSON("https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&random=" + Math.random() + "&callback=", function(object) {

      generatedQuote = object[0].content;
      authorQuote = object[0].title;



        $('#tweetQuote').removeAttr('disabled');

				$(".quote").html(generatedQuote).addClass("new");
        $(".author").html(authorQuote);

				var randomNumber = Math.floor(Math.random() * (anotherQuotes.length));
        $('#getQuote')
          .html(anotherQuotes[randomNumber])
          .css('background-color: #ff0084');



		});
		cache:false;
	});
});
