var request;
var $current;
var cache = {};
var $frame = $('#photo-viewer');
var $thumbs = $('.thumb');


  function crossfade($img) {
  if ($current) {
    $current.stop().fadeOut('slow');
  }

  // Let CSS handle centering
  $img.css({
    marginLeft: 0,
    marginTop: 0
  });

  $img.stop().fadeTo('slow', 1);
  $current = $img;
}
  

$(document).on('click', '.thumb', function(e){
  var $img,
    src = this.href;
    request = src;

  e.preventDefault();

  $thumbs.removeClass('active');
  $(this).addClass('active');

  if (cache.hasOwnProperty(src)) {
    if (cache[src].isLoading === false) {
      crossfade(cache[src].$img); /* FIXED: Added missing $ before img */
    }
  } else {
    $img = $('<img/>');
    cache[src] = {
      $img: $img,
      isLoading: true
    };

    $img.on('load', function () {
  // Keep it measurable (not display:none), but invisible
  $img.css({ opacity: 0, display: 'block' });

  $frame.removeClass('is-loading').append($img);
  cache[src].isLoading = false;

  if (request === src) {
    crossfade($img);
  }
});

    $frame.addClass('is-loading');

    $img.attr ({
      'src': src,
      'alt': this.title || '' /* FIXED: Changed single double-quote to two single-quotes */
    });
  }
});

$('.thumb').eq(0).click();
