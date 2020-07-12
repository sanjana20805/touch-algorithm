var fixedRect,movingRect
var rect1,rect2

function setup() {
  createCanvas(1200,800);
  fixedRect=createSprite(600, 400, 80, 50);
  fixedRect.shapeColor = "green"

  movingRect=createSprite(800, 400, 50, 80);
  movingRect.shapeColor = "green"

  rect1=createSprite(200, 200, 50, 50);
  rect1.shapeColor = "green"

  rect2=createSprite(400, 200, 50, 50);
  rect2.shapeColor = "green"
}

function draw() {
  background(0);
  
  movingRect.x =mouseX
  movingRect.y =mouseY

  

  if (isTouching(movingRect,rect1)) {
    movingRect.shapeColor="red" 
    rect1.shapeColor="red"
  } else {
    movingRect.shapeColor="green" 
    rect1.shapeColor="green"
  }

  drawSprites();
}

