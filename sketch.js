var bullet,wall;
var speed,weight;
var thickness;

function setup() {
  createCanvas(1400,400);
  
  thickness = random(22,83);
  speed = random(223,321);
  weight = random(32,52);

  bullet = createSprite(50,180,40,10);
  bullet.shapeColor=color("white");
  bullet.velocityX = speed;
  //bullet.debug = true;

  wall = createSprite(1000,200,80,height/2);
  wall.shapeColor = (80,80,80);
  //wall.debug = true;

}
function draw() {
  background(0,0,255);
  
  if (hasCollided(bullet,wall)) {
    bullet.velocityX=0;
    var damage = 0.5 * weight *speed *speed/(thickness*thickness*thickness);
    if (damage>10){
      wall.shapeColor=color(255,0,0);
    }
    if (damage<10){
      wall.shapeColor=color(0,255,0);
    }
  }

   drawSprites();
}
function hasCollided(lbullet,lwall){
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge = lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true
  }
  return false;

}