
function setup() {
  createCanvas(windowWidth,windowHeight);
  kuchun = createSprite(100,100,100,100);
}

function draw() 
{
  background("blue");
drawSprites();
if (keyIsDown(LEFT_ARROW)){
kuchun.x = kuchun.x - 10
}
if (keyIsDown(RIGHT_ARROW)){
kuchun.x =kuchun.x +10
}
if (keyIsDown(UP_ARROW)){
  kuchun.y = kuchun.y - 10
  }
  if (keyIsDown(DOWN_ARROW)){
  kuchun.y =kuchun.y +10
  }
}




