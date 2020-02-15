var ballX = 0;
var ballSpeed = 10;
var colorRed = 0;

var ballX2 = 0;
var ballSpeed2 = 5;
var colorblue= 0;

var ballX3 = 0;
var ballSpeed3= 20;
var colorgreen= 0;
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
  
    fill(0,colorgreen,0);
  colorgreen = colorgreen +3
  ellipse(190,ballX2, 50,50);
  ballX2 = ballX2 +ballSpeed2;
if (ballX2 > width){
  ballSpeed2 = -ballSpeed2;
  }
if (ballX2 == 0){
  ballSpeed2 = -ballSpeed2;
  colorgreen=0;
  }
  
      fill(0,0,colorblue);
  colorblue = colorblue +3
  ellipse(290,ballX3, 50,50);
  ballX3 = ballX3 +ballSpeed3;
if (ballX3 > width){
  ballSpeed3 = -ballSpeed3;
  }
if (ballX3 == 0){
  ballSpeed3 = -ballSpeed3;
  colorblue=0;
  }
}
