$(document).ready(function(){

  $("#random").on("click", function(){
    window.open("https://en.wikipedia.org/wiki/Special:Random");
  })
  $("#search").on("click", function(){
    searchString = '';
	  searchString = document.getElementById("given").value;
    var wikiUrl = "https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=" + encodeURI(searchString) + "&prop=info&inprop=url&utf8=&format=json&callback=?";

    $.getJSON(wikiUrl, function(data) {



      $.each(data.query.search, function(i, searchResult) {

          var articleUrl = searchResult.title.replace(/\s/g, "_");
          console.log(articleUrl);


          $("#insert").append('<div class="info mt-3 mb-3">');
          $("#insert").append("<h2>" + "<strong>" + searchResult.title + "</strong>" + "</h2>" + " " + searchResult.snippet);
          $("#insert").append('<a target="_blank" href="http://en.wikipedia.org/wiki/' + articleUrl + '"><br><button class="btn btn-info mt-2 mb-2">Read Article</button></a>');
          $("#insert").append('</a>');
          $("#insert").append('</div><br>');
          $("#insert").addClass("styled");
      });





    });
  });
});
