window.addEventListener('DOMContentLoaded', function() {
  var prev;
  var canvas = document.querySelector('.demo-canvas');

  window.player = new Player(canvas);

  function updateGame(time) {
    if(prev !== undefined) {
      var diff = time - prev;

      window.player.update(diff);
    }

    prev = time;
    requestAnimationFrame(updateGame);
  }

  requestAnimationFrame(updateGame);

  canvas.addEventListener('keydown', function(event) {
    window.player.keypress(event.which, false);

    event.preventDefault();
  });

  canvas.addEventListener('keyup', function(event) {
    window.player.keypress(event.which, true);

    event.preventDefault();
  });

  canvas.addEventListener('focusout', function(event) {
    window.player.keypress(37, true);
    window.player.keypress(38, true);
  });

});
