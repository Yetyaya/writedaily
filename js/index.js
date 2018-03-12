var s = skrollr.init();  

var headPic = document.querySelector("header");

headPic.style.height = window.innerHeight + "px";
window.onresize = function (){
  headPic.style.height = window.innerHeight + "px";
}
  
$(document).ready(function (){
  
  $(window).scroll(function(evt){
    if($(window).scrollTop()==0){
      $(".navbar").removeClass("bg_pink");
      $(".navbar-top").css("border-bottom","1px solid #fff");
    }else{
      $(".navbar").addClass("bg_pink");
      $(".navbar-top").css("border-bottom","1px solid #527759");
    }
  });
  
  
  $(".tag1,.tag2,.tag3,.tag4").click(function (e){
    e.preventDefault();
    var _href = $(this).attr("href");
    // $(selector).animate(styles,speed,easing,callback)
    $("html,body").animate({
      scrollTop: $( _href ).offset().top - $("nav").height() - 16
    }, 1300);
  });
  
  $(".home").click(function (e){
    e.preventDefault();
    $("html,body").animate({
      scrollTop: 0 }, 1500
    );
  });
  
  // Lightbox
  lightbox.option({
    "resizeDuration": 700,          // 淡入時間
    "wrapAround": true,             // true 可從最後1張返回到第1張
    "fadeDuration": 600,            // 淡出時間
    "albumLabel": "字帖 %1 / %2"
  }) 
  
});
