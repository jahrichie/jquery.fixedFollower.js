/*
fixedFollower - v1.0.0 alpha
Animae a fixed element, and keep that element from overlaying another (ie keep animated menu off footer
 footer... which is why I wrote this)

Copyright (c) 2011-2014 Sodigit.al (DEV AND DESIGN)
Dual licensed under the MIT license and GPL license.
Dev: Richard O'Reilly
*/

// EXAMPLE:  fixedFollower('#followFaq','.footer-wrapper');

function fixedFollower(el,notTrumped) {
  var offset = $(el).offset(),
    dinstanceToBreak = $(notTrumped).offset().top - $(el).innerHeight(),
    topPadding = 15;
  $(window).scroll(function () {
    if ($(window).scrollTop() > dinstanceToBreak)
      return;
    if ($(window).scrollTop() > offset.top) {
      $(el).stop().animate({
        marginTop: $(window).scrollTop() - offset.top + topPadding
      });
    } else {
      $(el).stop().animate({
        marginTop: 0
      });
    };
  });
}