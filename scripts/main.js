var main = function(){
  $('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });

  $(".refer-and-earn-btn").on("click", function(e){
    $(".tabs-popup").addClass("active-popup");
    $(".product-page").append('<div class="fade"></div>');
  });

  $(".tabs-popup-cls").on("click", function(e){
    $(".tabs-popup").removeClass("active-popup");
    $(".fade").remove();
  });

  $(".tab-container").tabs();

  $('.tab').on('click', function(){
  	$('.tab').removeClass('active-tab');
  	$(this).addClass('active-tab');
  });
};

$(document).ready(main);
