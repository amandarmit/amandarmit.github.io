(function ($) {
  "use strict";

  // menu
  $(".siteBar-btn").click(function () {
    $(".mobile-menu").toggleClass("siteBar");
    $(".menuShadow").toggleClass("show");
  });
})(jQuery);
