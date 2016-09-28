
(function () {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var counter = 0;
  var pos = 0;
  var max = 100;
  var width;
  var height;

  function reset() {
    ctx.clearRect(0, 0, width, height);
    width = window.innerWidth;
    height = window.innerHeight;
  }

  function render() {
    ctx.beginPath();
    ctx.lineWidth = 2;
    ctx.strokeStyle = '#fff';
    ctx.moveTo(pos, pos);
    ctx.lineTo(pos + 10, pos + 10);
    ctx.stroke();
    ctx.closePath();
    counter++;
    pos++;
    if (counter > max) {
      ctx.rotate(1 * (Math.PI / 180));
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