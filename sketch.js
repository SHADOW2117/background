//var all;
var r,b,g;
function setup() {
  createCanvas(1350,600);
//all=createSprite(400,210,10,10);
}
function draw() {
  r=map(mouseX,600,1350,0,255)
  g=map(mouseX,0,600,100,200)
  
  background(r,g,150);
  console.log(r,g);
  
 // all.x=mouseX;
 // all.y=mouseY;

drawSprites();
}







 