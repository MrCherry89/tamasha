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

  $(".slider-for4").slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    initialSlide: 1,
    asNavFor: ".slider-nav4",
    prevArrow: $(".planning-solutions .slider-navigation .slick-prev"),
    nextArrow: $(".planning-solutions .slider-navigation .slick-next"),
  });
  $(".slider-nav4").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    asNavFor: ".slider-for4",
    dots: false,
    arrows: false,
    focusOnSelect: true,
    vertical: true,
    initialSlide: 1, // Синхронизация со вторым слайдом
    centerMode: true,
    centerPadding: 0,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          vertical: false,
          slidesToShow: 2,
          focusOnSelect: false,
          autoplay: true,
        },
      },
    ],
  });


  AOS.init();
});
