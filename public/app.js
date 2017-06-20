$(document).ready(function() {
  $('#play_audio').click(function() {
    $('audio').get(0).play();
    setTimeout(function() {
      $('.gif').fadeIn('slow');
    }, 1500);
  });
});
