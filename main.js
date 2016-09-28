
(function () {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var counter = 0;
  var pos = 0;
  var max = 250;
  var width;
  var height;
  var SCALEX = 272;
  var SCALEY = -13;

  function reset() {
    ctx.clearRect(0, 0, width, height);
    width = window.innerWidth;
    height = window.innerHeight;
    ctx.width = width;
    ctx.height = height;
  }

  function render() {
    var h = 100 / counter;
    var opacity = 0.01;
    var stroke = Math.floor(Math.random() * 175) + 50;
    var stroke2 = Math.floor(Math.random() * 255) + 150;
    ctx.beginPath();
    ctx.lineWidth = 1 * (counter - 1);
    if (counter < 90) {
      stroke = 255;
      stroke2 = 55;
      opacity = 0.02;
    }
    ctx.strokeStyle = 'rgba(' + stroke2 + ', ' + stroke + ', 245, ' + opacity +')';
    ctx.moveTo(offsetx, offsety);
    // ctx.lineTo(300 * SCALEX, -40 * counter * SCALEY);
    // ctx.lineTo(100 * SCALEX, -110 * counter * SCALEY);
    var offsetx = Math.sin(counter / 10) * 200;
    var offsety = Math.cos(counter / 10) * 200;
    ctx.lineTo((1 * SCALEX) + offsetx, (h * SCALEY) + offsety);
    //ctx.lineTo((1 * SCALEX) + offsetx, (h + 20 * SCALEY) + offsety);
    ctx.lineTo((0 * SCALEX) + offsety, (h * SCALEY) + offsetx);
    //ctx.lineTo((0 * SCALEX) + offsetx, (0 * SCALEY) + offsety + 10);
   ctx.lineTo((2 * SCALEX) + offsetx, (h * SCALEY) + offsety + 20);

    ctx.stroke();
    ctx.closePath();
    counter++;
    pos++;

    if (counter > max) {
      ctx.translate(5 * SCALEX, 5 * SCALEY) + offsety;
      ctx.rotate(115 * (Math.PI / 180));
      ctx.scale(0.95, 0.95);
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