$(document).ready(function() {
  $('#play_audio').click(function() {
    $('audio').get(0).play();
    setTimeout(function() {
      $('.gif').css("visibility", "visible");
    }, 1500);
  });
});
