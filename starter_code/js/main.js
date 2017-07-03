//load the DOM before applying javascript
$(document).ready(function() {

  //define the function called doSomeStuff
  var doSomeStuff = function(event) {
    //prevent the default behaviour of the page reloading to submit form
    event.preventDefault();
    //take the input that the user types into #city-type and call it city
    var city = $('#city-type').val();
    //trim city of extra spaces and call it noSpace
    var noSpace = city.trim()
    //take noSpace and make it read in all lowercase, call it lowercase
    var lowerCase = noSpace.toLowerCase();
    //if lowerCase is the same as x, change the background-image to x image
    if (lowerCase === "nyc" || lowerCase === "new york" || lowerCase === "new york city") {
      $("body").css("background-image", "url(images/nyc.jpg)");
    } else if (lowerCase === "san francisco" || lowerCase === "sf" || lowerCase === "bay area") {
      $("body").css("background-image", "url(images/sf.jpg)");
    } else if (lowerCase === "los angeles" || lowerCase === "la" || lowerCase === "lax") {
      $("body").css("background-image", "url(images/la.jpg)");
    } else if (lowerCase === "austin" || lowerCase === "atx") {
      $("body").css("background-image", "url(images/austin.jpg)");
    } else if (lowerCase === "sydney" || lowerCase === "syd") {
      $("body").css("background-image", "url(images/sydney.jpg)");
    }

    $("#city-type").on("click", function() {
      $("input[type=text], textarea").val("");
    });
  };

  $('form').submit(doSomeStuff)
});
