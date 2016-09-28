
(function () {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var counter = 0;
  var max = 55;
  var width;
  var height;
  var SCALEX = 92;
  var SCALEY = 43;

  function reset() {
    ctx.clearRect(0, 0, width, height);
    width = window.innerWidth;
    height = window.innerHeight;
    ctx.width = width;
    ctx.height = height;
  }

  function render() {
    ctx.beginPath();
    ctx.lineWidth = 5 * (counter - 1);
    ctx.strokeStyle = 'rgba(25, ' + Math.floor(Math.random() * counter * 1) + ', 25, 0.1)';
    ctx.moveTo(counter, 0);
    ctx.lineTo(10 * SCALEX, 110 * counter * SCALEY);
    ctx.lineTo(100 * SCALEX, 140 * counter * SCALEY);
    ctx.lineTo(-300 * SCALEX, -40 * counter * SCALEY);
    ctx.lineTo(100 * SCALEX, 40 * counter * SCALEY);
    ctx.stroke();
    ctx.closePath();
    counter++;

    if (counter > max) {
      ctx.translate(10 * SCALEX, 10 * SCALEY);
      ctx.rotate(185 * (Math.PI / 180));
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