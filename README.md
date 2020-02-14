# HW3
What code draws the blades of grass?


function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(-10, 10), height-10-random(h));
  noStroke();

What code makes the "lawnmower" come by? How often does it come by?


  if (random(1000) > 999) {
    fill(255);
    rect(0, 0, width, height-15);
    h = 10;


What's the point of the h variable?

it is the speed of grass growth. it changes the grass growing speed


What does the -10 do in the second and fourth arguments of the line function, height-10-random(h)? Why is it there?

height - 10 // this is the starting point. -10 is the height of the ground, so if we do not user -10, the grass will grow from undereath of the ground.
