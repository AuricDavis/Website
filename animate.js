var canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var c = canvas.getContext('2d');

var x = 30;
var y = 200;
var dx = 4;
var dy = 4;
var radius = 30;
var squareH = 50;
var squareW = 50;
var dsquareH = 1;
var dsquareW = 1;
var recX = 100;
var drecX = 4;
function animate() {
    window.requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    c.fillStyle = '#000000';
    c.fillRect(400, 300, squareW, squareH);

    c.fillStyle = 'rgba(0, 175, 200, 1)';
    c.fillRect(recX, 100, 100, 50);

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI * 2, false);
    c.strokeStyle = 'blue';
    c.stroke();

    if (x  > innerWidth) {
        x = 0;
    }

    if (squareW > 200) {
        dsquareH = 0;
        dsquareW = 0;
    }

    if (recX > 600 || recX < 100) {
        drecX = -drecX;
    }


    recX += drecX;
    squareH += dsquareH;
    squareW += dsquareW;
    x += dx;
}
animate();