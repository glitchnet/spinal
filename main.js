
(function () {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var counter = 0;
  var max = 100;
  var width;
  var height;
  var SCALEX = 8;
  var SCALEY = 2;

  function reset() {
    ctx.clearRect(0, 0, width, height);
    width = window.innerWidth;
    height = window.innerHeight;
    ctx.width = width;
    ctx.height = height;
  }

  function render() {
    ctx.beginPath();
    ctx.lineWidth = 1 * counter;
    ctx.strokeStyle = 'rgba(5, ' + Math.floor(Math.random() * counter * 10) + ', 255, 0.2)';
    ctx.moveTo(0, 0);
    ctx.lineTo(100 * SCALEX, 10 * counter * SCALEY);
    ctx.lineTo(100 * SCALEX, 40 * counter * SCALEY);
    ctx.stroke();
    ctx.closePath();
    counter++;

    if (counter > max) {
      ctx.translate(100 * SCALEX, 100 * SCALEY);
      ctx.rotate(105 * (Math.PI / 180));
      ctx.scale(0.75, 0.75);
      counter = 0;
    }

    requestAnimationFrame(render);
  }

  window.onresize = function () {
    reset();
  };

  reset()
  render();
})();