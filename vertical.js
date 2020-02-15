var ballX = 0;
var ballSpeed = 10;
var colorRed = 0;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  noStroke();

  
  fill(colorRed,0,0);
  colorRed = colorRed +3
  ellipse(50,ballX, 50,50);
  ballX = ballX +ballSpeed;
if (ballX > width){
  ballSpeed = -ballSpeed;
  }
if (ballX == 0){
  ballSpeed = -ballSpeed;
  colorRed=0;
  }
}
