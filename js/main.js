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
    $(this).children('.info-mouseover').show();
  });

  $('.tint').mouseout(function() {
       $('.info-mouseover').hide();
  });




// change background color in homepage when mouseover projects

  $("#background1").mouseover(function(){
    $("body").css("background-color", "#9e5169");
  });

  $("#background1").mouseout(function(){
    $("body").css("background-color", "#fdd9ca");
  });



  $("#background2").mouseover(function(){
    $("body").css("background-color", "#bae1e5");
  });

  $("#background2").mouseout(function(){
    $("body").css("background-color", "#fdd9ca");
  });



  $("#background3").mouseover(function(){
    $("body").css("background-color", "#ddbf66");
  });

  $("#background3").mouseout(function(){
    $("body").css("background-color", "#fdd9ca");
  });



  $("#background4").mouseover(function(){
    $("body").css("background-color", "#ffffff");
  });

  $("#background4").mouseout(function(){
    $("body").css("background-color", "#fdd9ca");
  });



  $("#background5").mouseover(function(){
    $("body").css("background-color", "#ddb097");
  });

  $("#background5").mouseout(function(){
    $("body").css("background-color", "#fdd9ca");
  });



  $("#background6").mouseover(function(){
    $("body").css("background-color", "#45d6ba");
  });

  $("#background6").mouseout(function(){
    $("body").css("background-color", "#fdd9ca");
  });



  $("#background7").mouseover(function(){
    $("body").css("background-color", "#d8c5b2");
  });

  $("#background7").mouseout(function(){
    $("body").css("background-color", "#fdd9ca");
  });



  $("#background8").mouseover(function(){
    $("body").css("background-color", "#eaeaea");
  });

  $("#background8").mouseout(function(){
    $("body").css("background-color", "#fdd9ca");
  });





});












