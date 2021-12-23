/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

// Test / driver code (temporary). Eventually will get this from the server.
$(document).ready(function(){

const tweetData = {
  "user": {
    "name": "Bob",
    "avatars": "https://i.imgur.com/73hZDYK.png",
      "handle": "@SirIsaac2"
    },
  "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
  "created_at": 1461116232227
}

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

// Test / driver code (temporary)
const $tweet = createTweetElement(tweetData);
console.log($tweet); // to see what it looks like
// $('.tweets-container').append($tweet); 

// Render Tweets Driver Code  


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
  alert( "Handler for .submit() called." );
  console.log($(this).serialize());
  const tweetContent =$(this).serialize()
  const charCounter = Number($('#counter').html());
  console.log('charCounter is', charCounter);
  //form validation:
  if (charCounter < 0) {
    alert('tweet too long.')

  } else if (tweetContent === "text=") {
    alert('tweet form empty')
  } else {
    alert('tweet test complete, posting.')
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