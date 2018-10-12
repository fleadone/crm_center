$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:1
        },
        1000:{
            items:1
        }
    }
  });
  $('select').change(function() {
    $('.change').removeClass('change');
    $('.' + $(this).val()).addClass('change');
  });
  $('main').waypoint(function(direction) {
    if (direction === 'down') {
      $('nav').addClass('fixed-menu');
      $('.arr').attr('src', 'img/arrow-country-fix.png');
      $('.arr-prod').attr('src', 'img/product-fix.png');
    }else {
      $('.fixed-menu').removeClass('fixed-menu');
      $('.arr').attr('src', 'img/arrow-country.svg');
      $('.arr-prod').attr('src', 'img/product.png');
    }
  },{ offset: '0%' });
  $('.sales').waypoint(function() {
      $('.sales').addClass('animated fadeInUpBig');
  }, { offset: '70%' });
  $('.services').waypoint(function() {
      $('.services').addClass('animated fadeInLeftBig');
  }, { offset: '70%' });
  $('.marketing').waypoint(function() {
      $('.marketing').addClass('animated fadeInRightBig');
  }, { offset: '70%' });
  $('.news').waypoint(function() {
      $('.news').addClass('animated fadeInUpBig');
  }, { offset: '70%' });

  $('.industry').hover(function() {
    if ($('nav').hasClass('fixed-menu')) {
      $('.arr').attr('src', 'img/arrow-country.svg');
    }
  }, function () {
    if ($('nav').hasClass('fixed-menu')){
      $('.arr').attr('src', 'img/arrow-country-fix.png');
    }
  });
  $('.product').hover(function() {
    if ($('nav').hasClass('fixed-menu')){
      $('.arr-prod').attr('src', 'img/product.png');
    }
  }, function () {
    if ($('nav').hasClass('fixed-menu')){
      $('.arr-prod').attr('src', 'img/product-fix.png');
    }
  });
})
