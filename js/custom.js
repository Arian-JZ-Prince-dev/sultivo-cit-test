//
//bg slide

$(function(){
  $('.ban_bg_main_inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow:".ban_bg_mainnext",
    prevArrow:'.ban_bg_mainprev',
    autoplay: true,
autoplaySpeed: 1000,
});
  
})


//venobox

$(function(){
 new VenoBox({
    selector: '.my-video-links',
});
   
})

//case slide
$(function(){
    $('.cas').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow:".casnext",
        prevArrow:'.casprev',
        autoplay: true,
        autoplaySpeed: 1000,
      });
})



  $(function(){
    new VenoBox({
      selector: '.skill_video',
  })
  })










  $(function(){
    
  })


 



//