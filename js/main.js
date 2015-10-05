//colors
var red,green,blue;
//Circles centers
var redX, redY, greenX, greenY, blueX, blueY;

//Size of circles
var circleSize;

//Color of drawing line
var lineColor;



function setup() {
  //create the canvas
  createCanvas(windowWidth,windowHeight);
  //create three color variables and set the size of circles
  circleSize = 50;
  red = color(255,0,0);
  green = color(0,255,0);
  blue = color(0,0,255);
  lineColor = color(0);
  redX = 30;
  redY = 75;
  fill(red);
  ellipse(redX, redY, circleSize, circleSize,red);

  greenX = 30;
  greenY = 175;
  fill(green);
  ellipse(greenX, greenY,circleSize,circleSize,green);

  blueX = 30;
  blueY = 275;
  fill(blue);
  ellipse(blueX, blueY, circleSize, circleSize,blue);
    console.log('end setup');
}//end setup

function draw() {
  if(mouseIsPressed){
    //draw a line
    stroke(lineColor);
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
} //end draw

function mousePressed() {
  console.log('mousePressed');
  var d = dist(mouseX, mouseY, redX, redY);
  if (d < circleSize) {
      //the clicked on the red circle
      //change the line color
      lineColor = red;
  }

  d = dist(mouseX, mouseY, greenX, greenY);
  if (d < circleSize) {
      lineColor = green;
  }

  d = dist(mouseX, mouseY,blueX,blueY);
  if (d < circleSize) {
      lineColor = blue;
  }
}
//info:
// circle locs(red,green,blue) x,y
// circleSize
//Dist between move and circle locs
//Color Vars

//System:
//mouseX,mouseY,mouseIsPressed

//Events:Mouse click change line color if...  Create Canvas
//Setup:draw circles
//Draw:draw line if mouse is pressed


//mouseClicked:get the first position color;need define lineColor in setup
//mousePressed:only if you pressed the mouse

