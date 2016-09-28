
(function () {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var counter = 0;
  var max = 5;
  var width;
  var height;
  var x;
  var y;

  function reset() {
    ctx.clearRect(0, 0, width, height);
    width = window.innerWidth;
    height = window.innerHeight;
  }

  function render() {
    ctx.beginPath();
    ctx.lineWidth = 2 * counter;
    ctx.strokeStyle = 'rgba(255, ' + (counter % 255) + ', 130, ' + (0.1 * counter) + ')';
    ctx.moveTo(0, 0);
    ctx.lineTo(100, 10 * counter);
    ctx.lineTo(100, 40 * counter);
    ctx.stroke();
    ctx.closePath();
    counter++;
    //pos++;
    if (counter > max) {
      //ctx.translate();
      //ctx.scale(0.75, 0.75);
      ctx.translate(100, 100);
      ctx.rotate(105 * (Math.PI / 180));
      ctx.scale(0.65, 0.65);
      counter = 0;
    }

    setTimeout(function () {
      requestAnimationFrame(render);
    }, 50);
  }

  window.onresize = function () {
    reset();
  };

  reset()
  render();
})();