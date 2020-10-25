function setup() {
  createCanvas(800,400);
fixed = createSprite(400, 200, 50, 50);
fixed.shapeColor = "black";
moving = createSprite(300, 300, 50, 50);
moving.shapeColor = "black";
}

function draw() {
  background(255,0,0);  
  moving.x = World.mouseX;
  moving.y = World.mouseY;
    if(moving.x-fixed.x < moving.width/2 + fixed.width/2 && 
       fixed.x-moving.x < moving.width/2 + fixed.width/2 &&
       moving.y-fixed.y < moving.width/2 + fixed.width/2 &&
       fixed.y-moving.y < moving.width/2 + fixed.width/2){
    moving.shapeColor = "green";
    fixed.shapeColor = "green";
    }
  else{
  moving.shapeColor = "black";
  fixed.shapeColor = "black";
  }
  drawSprites();
}