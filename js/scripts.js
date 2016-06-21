// business logic
var space = ' ';
var comma = ', ';

// user interface logic
$(document).ready(function() {
  $("form#word-play").submit(function(event) {
    event.preventDefault();

    var sentence = ($("input#sentence").val());
    var arrayWords = sentence.split(space);
    var threePlus = [];
    console.log(threePlus);


    arrayWords.forEach(function(words) {
      if (words.length > 3) {
        threePlus.push()
        // select word that is greater than 3 and push to new array
      } else {

        // words that are less than three characters are not pushed

      }
    });
  });
});
