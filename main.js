$(document).ready(function(){

  $('#menu-btn').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('active');
  });

  $(window).on('load scroll', function(){

    $('#menu-btn').removeClass('fa-times');
    $('.navbar').removeClass('active');

    // Check if the window is scrolled more than 30px
    if ($(window).scrollTop() > 30) {
      $('.header').addClass('active');
    } else {
      $('.header').removeClass('active');
    }

    $('section').each(function(){
      var id = $(this).attr('id');
      var height = $(this).height();
      var offset = $(this).offset().top - 100;
      var top = $(window).scrollTop();
      
      if(top >= offset && top < offset + height){
        $('.header .flex .navbar a').removeClass('active');
        $('.header .flex .navbar').find('[href="#' + id + '"]').addClass('active');
      }
    });

  });
});
