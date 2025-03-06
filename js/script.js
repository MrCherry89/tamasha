$(document).ready(function () {


  $(".anchore").smoothScroll({
    speed: 1000,
  });


  $(".info-slider").each(function () {
    var $slider = $(this); 
  
    $slider.slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      dots: true,
      variableWidth: true,
      centerMode: true,
      focusOnSelect: true,
      arrows: true,  
      autoplay: true,
      autoplaySpeed: 1800,
      speed: 1000,
      responsive: [
        {
          breakpoint: 551,
          settings: {
            slidesToShow: 1,
            variableWidth: false,
            centerMode: false,
          },
        },
      ],
    });
  });

  $(".map-info-slider").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    dots: false,
    variableWidth: true,
    autoplay: true,
    autoplaySpeed: 1800,
    cssEase: "ease-in-out",
    speed: 700,
  });


  AOS.init();
});
