console.log("star.js is live!!!");
class Star {
  constructor(_xPos, _yPos, _rotation, _size) {
    this.xPos = _xPos;
    this.yPos = _yPos;
    this.rotation = _rotation
    this.size = _size
  }

  display() {
    //starshape
    push();
    fill(255, 255, 204)
    stroke(255, 118);
    strokeWeight(25);
    translate(this.xPos, this.yPos);
    rotate(this.rotation);
    //use scale to manage size
    scale(this.size);
    beginShape();
    vertex(width * .01, height * .04);
    vertex(width * .04, height * .01);
    vertex(width * .01, height * -.02);
    vertex(width * -.02, height * .01);
    endShape(CLOSE);
    //circle(10,10,50,)
    pop();
  }

  move() {
    //this.angle++ is shorthand for this.rotation = this.rotation + 1;
    this.rotation++;

    if (this.yPos <= height * 1.03) {
      //this.yPos = this.yPos+2;
      //shorthandshown below
      this.yPos += 2;
    } else {
      this.yPos = -height * .03;
    }
    if (this.xPos <= width * 1.03) {
    this.xPos += 4;
    }else {
    this.xPos = -width * .03;
    }
  }
}