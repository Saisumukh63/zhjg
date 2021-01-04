var wall,bullet,thickennes;
var speed,wieght,damage;
function setup() {
  createCanvas(800,400);
  bullet=createSprite(100, 200, 20, 20);
  bullet.shapeColor="white"
  thickennes=random(22,83)
  wall=createSprite(1200,200,thickness,hieght/2);
  wall.shapeColor="white";
  speed=random(223,323);
  bulletvelocityX=speed;
  wieght=random(30,52)
}

function draw() {
  background(0);
  damage=0.5*wieght*speed*speed/(thickennes*thickennes*thickennes);
 if(bullet.isTouching(wall)){
   if(damage>10){
    bullet.velocityX=0
     wall.shapeColor="red"
   }
   if(damage<10){
    bullet.velocityX=0
    wall.shapeColor="green"
  }
  
 }
  drawSprites();

}