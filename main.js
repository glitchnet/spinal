
(function () {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var counter = 0;
  var max = 10;
  var width;
  var height;
  var SCALEX = 82;
  var SCALEY = -5;

  function reset() {
    ctx.clearRect(0, 0, width, height);
    width = window.innerWidth;
    height = window.innerHeight;
    ctx.width = width;
    ctx.height = height;
  }

  function render() {
    ctx.beginPath();
    ctx.lineWidth = 1 * (counter - 1);
    ctx.strokeStyle = 'rgba(45, ' + Math.floor(Math.random() * counter * 5) + ', 155, 0.7)';
    ctx.moveTo(counter, 0);
    ctx.lineTo(100 * SCALEX, 10 * counter * SCALEY);
    ctx.lineTo(100 * SCALEX, 40 * counter * SCALEY);
    ctx.stroke();
    ctx.closePath();
    counter = counter + 8;

    if (counter > max) {
      ctx.translate(10 * SCALEX, 100 * SCALEY);
      ctx.rotate(85 * (Math.PI / 180));
      ctx.scale(1.15, 0.75);
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