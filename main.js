(function($){
    "use strict";
 
//navbar cart
    new WOW().init();
    $(".cart_link > a").on("click", function () {
        $(".mini_cart").addClass("active");
      });

      $(".mini_cart_close > a").on("click", function () {
        $(".mini_cart").removeClass("active");
      });

//sticky navbar
      $(window).on("scroll", function(){
        var scroll = $(window).scrollTop();
        if(scroll<100){
          $('.sticky-header').removeClass('sticky');
        } else {
          $('.sticky-header').addClass('sticky');
        }
      });
  
})(jQuery);