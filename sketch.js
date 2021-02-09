var fixedRect,movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  movingRect= createSprite(400,200,80,50);
  fixedRect.shapeColor="green";
  movingRect.shapeColor="green";
}

function draw() {
  background(0,0,0);  
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;

  if(movingRect.x-fixedRect.x<(movingRect.width+fixedRect.width)/2
  && fixedRect.x-movingRect.x<(movingRect.width+fixedRect.width)/2
  && movingRect.y-fixedRect.y<(movingRect.height+fixedRect.height)/2
  && fixedRect.y-movingRect.y<(movingRect.height+fixedRect.height)/2){  
    movingRect.shapeColor="blue";
    fixedRect.shapeColor="blue";
  }else{
    movingRect.shapeColor="green";
    fixedRect.shapeColor="green";
  }
  drawSprites();
}