
(function () {
  var canvas = document.querySelector('canvas');
  var ctx = canvas.getContext('2d');
  var counter = 0;
  var pos = 110;
  var max = 250;
  var width;
  var height;
  var SCALEX = 72;
  var SCALEY = 13;

  function reset() {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
    width = window.innerWidth;
    height = window.innerHeight;
    counter = 10;
    ctx.width = width;
    ctx.height = height;
    ctx.translate(510, 210);
    ctx.scale(0.35, 0.35);
  }

  function render() {
    var h = 250 / counter;
    var opacity = 0.02;
    var stroke = Math.floor(Math.random() * 175) + 50;
    var stroke2 = Math.floor(Math.random() * 155) + 10;
    var stroke3 = 245;
    ctx.beginPath();
    ctx.lineWidth = 1 * (counter - 1);
    if (counter < 90) {
      stroke = 255;
      stroke2 = 255;
      stroke3 = 255;
    } else if (counter > 110 && counter < 161) {
      stroke = 195;
      stroke2 = 15;
      stroke3 = 255;
      opacity: 0.9;
      //ctx.lineWidth = 2 * (counter - 1);
    } else if (counter > 200) {
      stroke = 11;
      stroke2 = 255;
      stroke3 = 11;
      opacity: 0.7;
    }
    ctx.strokeStyle = 'rgba(' + stroke2 + ', ' + stroke + ', ' + stroke3 + ', ' + opacity +')';
    ctx.moveTo((1 * SCALEY) + offsetx, (h * SCALEY) + offsety);
    // ctx.lineTo(300 * SCALEX, -40 * counter * SCALEY);
    // ctx.lineTo(100 * SCALEX, -110 * counter * SCALEY);
    var offsetx = Math.sin(counter) * 110;
    var offsety = Math.cos(counter) * -110;
    ctx.lineTo((1 * SCALEY) + offsetx, (h * SCALEX));
    ctx.lineTo((1 * SCALEX) + offsetx, (h * SCALEY) + offsety);
    ctx.lineTo((1 * SCALEY) + offsetx, (h * SCALEY) + offsety);
    //ctx.lineTo((0 * SCALEX) + offsetx, (h * SCALEY) + offsetx + 110);
    ctx.lineTo((1 * SCALEX) + offsetx, (h * SCALEY) + offsetx);
    //ctx.lineTo((2 * SCALEX) + offsetx, (h * SCALEY) + offsetx - 20);

    ctx.stroke();

    counter++;
    pos++;

    if (counter > max) {
      ctx.translate(2 * SCALEX, 2 * SCALEY) + offsetx;
      ctx.rotate(20 * (Math.PI / 180));

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