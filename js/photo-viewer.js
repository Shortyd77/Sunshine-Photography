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
