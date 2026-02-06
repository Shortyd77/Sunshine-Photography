$(function() {

  // 1. slide down the main header
  // this grabs the h1 and slides it down smoothly
  $('h1').hide().slideDown(1000);

  // 2. cascade fade-in for Gallery Images
  // This selects every div with class "gallery"
  var $galleryItems =$('.gallery')

  // Hide them immediately so we can fade them in
  $galleryItems.hide().each(function(index) {
    // delay increases for each item (index *200ms)
    //fadeLin takes 800ms to complete
    $(this).delay(200 * index).fadeIn(800);
  });

});

  
