// ==UserScript==
// @name            YouTube AutoSkip
// @description     Auto-skips blocked, removed and disabled videos while binge watching a playlist in fullscreen mode.
// @author          braincomb
// @icon            https://youtube.com/favicon.ico
// @homepageURL     https://github.com/braincomb/youtube-autoskip
// @namespace       http://braincomb.com
// @version         0.1.2
// @include         http*://*.youtube.com/*
// @include         http*://youtube.com/*
// @include         http*://*.youtu.be/*
// @include         http*://youtu.be/*
// @grant           none
// ==/UserScript==

unsafeWindow.onYouTubePlayerReady = function(playerId) {

  var ytp = document.getElementById('movie_player');
  console.info("youtube-autoskip ready...");

  var onPlayerError = function(data) {
    ytp.nextVideo();
    setTimeout(function() {
      ytp.playVideo();
    }, 3000);
  };

  ytp.addEventListener("onError", onPlayerError);

};