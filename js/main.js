//  Start Jquery
$(document).ready(function () {
  // // Change BG-NavBar On Scroll
  $(window).scroll(() => {
    let scroll_top = $(window).scrollTop();
    if (scroll_top > 10) {
      $(".mynavbar").addClass("mynavbar2");
    } else {
      $(".mynavbar").removeClass("mynavbar2");
    }
  });

  // Change Scroll Up On Scroll
  $(window).scroll(function () {
    let scroll_top = $(window).scrollTop();
    if (scroll_top > 200) {
      $("#ScrollUp").fadeIn();
    } else {
      $("#ScrollUp").fadeOut();
    }
  });

  // move Scroll Up to scrollTop: 0
  $(".ScrollUp").click(function () {
    $("html").animate({ scrollTop: 0 }, 10);
  });

  // Change Text in Btn When Click on it
  $(".sub").click(function () {
    $(".sub").text("Done ");
    $(".sub").append("!");
    $(".sub").css({
      backgroundColor: "white",
      color: "black",
    });
  });

  // move on section in navbar When Click on it
  $(".mynavbar li a").click(function () {
    let id = $(this).attr("id");
    $("html").animate({ scrollTop: $("." + id).offset().top -20 }, 10);
  });

  // Create limit number of input in footer on section in navbar When Click on it
  $("input").keyup(function (e) {
     if (e.target.value.length >= 22)  e.target.value = e.target.value.substr(0, 22);
    
  });

  // Change active color in li When Click on it
  // $(".mynavbar li").on(  "click" , function () {
  //   $(this).addClass("active").siblings().removeClass("active")
  // });



});
//  End Jquery
