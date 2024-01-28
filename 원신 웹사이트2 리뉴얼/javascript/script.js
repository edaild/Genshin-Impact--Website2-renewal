jQuery(document).ready(function () {

  $('.navi1>li').mouseover(function () {
    $(this).find('.submenu').stop().slideDown(500);
  }).mouseout(function () {
    $(this).find('.submenu').stop().slideUp(500);
  });


  $('.audio>li').mouseover(function () {
    $('.audiosub').stop().slideDown(100);
  }).click(function () {
    $('.audiosub').stop().slideUp(100);
  });
  

  $('.notice1>li').click(function (){
    $('.notice2sub').stop().fadeOut(0.8);
    $('.notice1sub').stop().fadeIn(0.8);
  }); 

  $('.notice2>li').click(function (){
    $('.notice1sub').stop().fadeOut(0.8);
    $('.notice2sub').stop().fadeIn(0.8);
  }); 

  $('.imgslide a:gt(0)').hide();
  setInterval(function(){
	$('.imgslide a:first-child')
	.fadeOut()
	.next('a')
	.fadeIn()
	.end()
	.appendTo('.imgslide');
  },3000);

});

