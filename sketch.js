let angleWag = 10;
let mic;
let angleJaw = 0;
let bamYes = false;
let x = 2;
let y = 2;
let star1;
let star2;
let star3;
let star4;
let star5;
let value = 0;


function setup() {
  createCanvas(400, 400);
  background(0, 0, 77);
  angleMode(DEGREES);

  star1 = new Star(290, 54, -15, .15);
  star2 = new Star(245, 270, 10, .20);
  star3 = new Star(150, 40, -5, .15);
  star4 = new Star(25, 275, 10, .15);
  star5 = new Star(25, 275, 10, .15);


  createButton("Start").mousePressed(startSketch);
  mic = new p5.AudioIn()
  mic.start();

}
function startSkecth(){
  console.log('start sketch!')
}

function draw() {
  //console.log("mic level" + mic.getLevel());

  micLevel = mic.getLevel();
  angleWag = map(mic.getLevel(), 0, 10, 356, 0);
  createCanvas(400, 400);
  background(0, 0, 153);

  star1.display();
  star2.display();
  star3.display();
  star4.display();
  star5.display();


  star1.move();
  star2.move();
  star3.move();
  star4.move();
  star5.move();

  drawMoon();

  drawCloud(mouseX, width * .05, height * .14, 35); // xPos, yPos, ang

  drawCloud(mouseX, mouseY, width * .5, height * .05, 10);

  drawCloud(mouseY, width * .85, height * 25, 11);

  drawBirdBody();

  drawHeadFeathers();

  drawBirdTail();

  drawBackWing(angleJaw);

  drawFrontWing(angleJaw);

  drawBirdBeak();

  drawBirdEye();

  drawBirdEyePupil(angleWag);



  //if (bamYes == true){
  //circle(width/2, height/2,100);}

}

function mousePressed() {

  //if the positon of the mouse is inside this region then do this
  //syntax is

  if (mouseX > width * 0.3 && mouseX < width * 0.8 && mouseY > height * 0.35 && mouseY < height * .65) {
    console.log("mouse beep in here");
    angleJaw = -10;

  }
}

function mouseReleased() {
  angleJaw = 0;


}


function drawCloud(xPos, yPos, rotation) {
  //bottom cloud

  push();
  fill(233,240,252);
  strokeWeight(4);
  stroke(187, 209, 247);
  translate(xPos, yPos);
  //rotate(rotation);
  ellipseMode(CENTER);
  ellipse(0, 11, width * .4, height * .1, );
  pop();

}



function drawBirdBody() {
  //bird body color
  fill(128, 128, 255);
  noStroke();
  //birb body
  beginShape();
  ellipse(width * .55, height * .5, width * .5, height * .3, );
  endShape(CLOSE);
}

function drawHeadFeathers() {

  //head feathers
  beginShape();
  //bird body color
  fill(128, 128, 255);
  noStroke();
  vertex(width * .57, height * .3);
  vertex(width * .6, height * .35);
  vertex(width * .63, height * .3);
  vertex(width * .6, height * .5);
  endShape(CLOSE);
}

function drawBackWing(rotation) {

  //bird body color
  push();
  fill(128, 128, 255);
  translate: (5, 5);
  rotate(rotation);
  noStroke();
  beginShape();
  curveVertex(width * .1, height * .2);
  curveVertex(width * .35, height * .27);
  curveVertex(width * .4, height * .4);
  endShape(CLOSE);
  pop();
}

function drawFrontWing(rotation) {

  //bird body color //front wing
  push();
  fill(128, 128, 255);
  translate: (-3, -5);
  rotate(rotation);
  noStroke();
  beginShape();
  curveVertex(width * .69, height * .6, );
  curveVertex(width * .83, height * .62, );
  curveVertex(width * 1, height * .8);
  endShape(CLOSE);
  pop();
}

function drawBirdTail() {

  //bird body color
  fill(128, 128, 255);
  noStroke();
  //bird tail
  beginShape();
  triangle(width * .6, height * .55, width * .45, height * .55, width * .05, height * .75);
  endShape(CLOSE);
}

function drawBirdBeak() {
  // bird beak shape and color
  beginShape();
  fill(255, 215, 15)
  triangle(width * .8, height * .45, width * .75, height * .4, width * .9, height * .35);
  endShape(CLOSE);
}

function drawBirdEye() {
  //bird eye
  beginShape();
  fill(250, 250, 250);
  circle(width * .7, height * .45, 30);
  endShape(CLOSE);
}

function drawBirdEyePupil(rotation) {


  // bird eye pupil
  push();
  fill(0);
  translate: (2, 2);
  rotate(rotation);
  ellipseMode(CENTER);
  ellipse(270, 200, 15, 15);
  pop();
}

function drawMoon() {
  //background moon
  beginShape();
  fill(242, 242, 242);
  stroke(255, 118);
  strokeWeight(15);
  circle(x, y, 100);
  x += 0.5;
  y += 0.5;
  endShape(CLOSE);
}
