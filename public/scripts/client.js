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
        <p class= "tweetBody">${tweet.content.text}</p>
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
const data = [
  {
    "user": {
      "name": "Newton",
      "avatars": "https://i.imgur.com/73hZDYK.png"
      ,
      "handle": "@SirIsaac"
    },
    "content": {
      "text": "If I have seen further it is by standing on the shoulders of giants"
    },
    "created_at": 1461116232227
  },
  {
    "user": {
      "name": "Descartes",
      "avatars": "https://i.imgur.com/nlhLi3I.png",
      "handle": "@rd" },
    "content": {
      "text": "Je pense , donc je suis"
    },
    "created_at": 1461113959088
  }
]

const renderTweets = function(tweets) {
  // loops through tweets
  for(tweet of tweets) {
    $('.tweets-container').append(createTweetElement(tweet)); 

  }
  // calls createTweetElement for each tweet
  // takes return value and appends it to the tweets container
}

renderTweets(data);

});