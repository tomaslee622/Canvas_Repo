// to make the canvas drawing itself, we first get the class (.bubble) from html
var canvas = document.querySelector(".bubble");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var ctx = canvas.getContext("2d");

function Circle(x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = function () {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = "blue";
    ctx.stroke();
    ctx.fillStyle = "#c8e6c9";
    ctx.fill();
  };
  this.update = function () {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  };
}

let circleArray = [];
for (let i = 0; i < 400; i++) {
  let radius = 30;
  let x = Math.random() * (innerWidth - radius * 2) + radius;
  let y = Math.random() * (innerHeight - radius * 2) + radius;
  let dx = Math.random() - 0.5;
  let dy = Math.random() - 0.5;

  circleArray.push(new Circle(x, y, dx, dy, radius));
  var circle = new Circle(200, 200, 3, 3, 30);
}

function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);

  for (let i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}
animate();
