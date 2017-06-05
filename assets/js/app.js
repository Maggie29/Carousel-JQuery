$(document).ready(function(){
  $('#slider div:gt(0)').hide();
  setInterval(function newImg(){
    $('#slider div:first-child').fadeOut(0)
      .next('div').fadeIn(1000)
      .end().appendTo('#slider');}, 4000);

  $("#prev").click(function(){
     newImg();
     clearInterval(interval);
     interval= setInterval(newImg,3000);
   });
  $("#next").click(function(){
     $('#slider div:first-child').fadeOut();
     $('#slider div:last-child').fadeIn(1000).prependTo('#slider');
     clearInterval(interval);
     interval= setInterval(newImg,3000);
   });
});
