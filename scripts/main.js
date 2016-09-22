var main = function(){

  if($('.flexslider').lenght!=0){
    $('.flexslider').flexslider({
      animation: "slide",
      controlNav: "thumbnails"
    });
  }

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


  /*registration page*/
  /*$('.registration-form__radio-span').on('click', function(){

  if($('.registration-form__radio__individual').attr("checked")=="checked"){
    $('.individual-creation').addClass('block');
    $('.company-creation').removeClass('block');

  };

  if($('.registration-form__radio__company').attr("checked")=="checked"){
    $('.individual-creation').removeClass('block');
    $('.company-creation').addClass('block');
  };
  });*/
};

$(document).ready(main);
