$(document).ready(function () {

  $('.icon').click(function () {
    $('.icon-container+ul').toggleClass('show-menu');
    $('.fa-bars').toggleClass('fa-times');
    $('.icon-container').toggleClass('fixed');
  });
  
  $('.nav ul li a').click(function () {
    $('.icon-container+ul').removeClass('show-menu');
    $('.icon-container').removeClass('fixed');
    $('.fa-bars').toggleClass('fa-times');
  });


});