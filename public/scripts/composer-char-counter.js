$(document).ready(function() {
  // let counter = document.getElementById('counter');
  // let textArea = document.getElementById('tweet-text');
  // let maxChars = 140;
  let counter = $("#counter");
  
 $("#tweet-text").on('input', function() {
  //  let remaining = 140 - textArea.value.length;
   let currentLength = $(this).val().length;
   counter.val(140 - currentLength);
   if (currentLength >= 140) {
    counter.css("color", "red");
   } else {
    counter.css("color", "black");
   }
  //  counter.textContent = remaining;
 });
});

// let remaining = counter - this
// if (remaining < 140) {
//   counter.color = 'red';
// }
// counter= remaining