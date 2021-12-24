/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function(){
const escape = function (str) {
  let div = document.createElement("div");
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

const createTweetElement = (tweet) => {
  const tweetElement = `
  <article class= 'tweets'> 
        <header>
          <div>
            <img class= "profilePic"src=${tweet.user.avatars}>
              <p class= "username">${tweet.user.name}</p>
            </div>
          <div>
            <p class= "handle">${tweet.user.handle}</p></div>
        </header>
        <p class= "tweetBody">${escape(tweet.content.text)}</p>
        <footer>
          <div>
            <p>${timeago.format(tweet.created_at.name)}</p></div>
          <div>
            <i class="fas fa-flag"></i>
            <i class="fas fa-retweet"></i>
            <i class="fas fa-heart"></i>
          </div>
        </footer>
      </article>
      `
  return tweetElement;
}




const renderTweets = function(tweets) {
  // loops through tweets
  for(tweet of tweets) {
    $('.tweets-container').append(createTweetElement(tweet)); 

  }
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
}


$("#tweet-submit").submit(function(event) {
  event.preventDefault();
  console.log($(this).serialize());
  const tweetContent =$(this).serialize()
  const charCounter = Number($('#counter').html());
  console.log('charCounter is', charCounter);
  $('.errorTweetlength').slideUp(1000)
  $('.errorEmptyField').slideUp(1000)
  //form validation:
  if (charCounter < 0) {
    $('.errorTweetlength').slideDown(1000)
  } else if (tweetContent === "text=") {
    $('.errorEmptyField').slideDown(1000)
  } else {
    $.post("/tweets", tweetContent)
    $('.tweets-container').empty();
    loadTweets();
    $('#tweet-submit')[0].reset();
  }
})

const loadTweets = () => {
  $.getJSON('/tweets')
  .then(result => {
    console.log('tweet request successful')
    renderTweets(result.reverse());

  });
};

loadTweets()


});