$(document).ready(function() {
  let counter = $("#counter");
  
 $("#tweet-text").on('input', function() {
   let currentLength = $(this).val().length;
   counter.val(140 - currentLength);
   if (currentLength >= 140) {
    counter.css("color", "red");
   } else {
    counter.css("color", "black");
   }
 });
});
