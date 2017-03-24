$(document).ready(function(){

  // start of carousel
  $('.carousel').slick({
    dots: true,
    infinite: true,
    // speed: 300,
    autoplay: true,
    autoplaySpeed: 2500,
    adaptiveHeight: true,

    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
  // end of carousel



  // show project info text when mouseover projects

  $('.tint').mouseover(function() {
    // $('.info-mouseover').show();
    $(this).children('.info-mouseover').show();

     // $('.info-mouseover').addClass('displayOverlay');
  });

  $('.tint').mouseout(function() {
      // $('.info-mouseover').removeClass('displayOverlay');
      // $('.info-mouseover').attr('id', '');
       $('.info-mouseover').hide();
  });


  $('.thumbnail-homepage').mouseover(function() {
    // $('.info-mouseover').show();
    $(this).children('.info-mouseover').show();

     // $('.info-mouseover').addClass('displayOverlay');
  });

  $('.thumbnail-homepage').mouseout(function() {
      // $('.info-mouseover').removeClass('displayOverlay');
      // $('.info-mouseover').attr('id', '');
       $('.info-mouseover').hide();
  });






// change background color in homepage when mouseover projects

  $("#background1").mouseover(function(){
    $("body").css("background-color", "yellow");
  });

  $("#background1").mouseout(function(){
    $("body").css("background-color", "#fdd9ca");
  });










});












