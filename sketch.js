var trex, ground;
function preload(){
  trex_running= loadAnimation();
}

function setup(){
  createCanvas(400,400);
  trex= createSprite(50,180,30,30);
  ground= createSprite(0,200,400,20);
  trex.setAnimation();
}

function draw(){
  background(30);
  drawSprites();
}