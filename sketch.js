var ninjaimg
var backgroundimg
var life=3
function preload(){
  ninjaimg=loadImage("images/ninja.png")
  backgroundimg=loadImage("images/background.jpg")
  box=loadImage("images/box2.png")
  alienimg=loadImage("images/alien.png")
  bullet=loadImage("images/bullet.png")
  Alienbullets=loadImage("images/bullet.png")
  crystalimg=loadImage("images/crystal.png")
}
function setup(){
  Canvas=createCanvas(1000,400);
  bg=createSprite(300,300,600,600);
  bg.scale=6;
  bg.addImage(backgroundimg);
  bg.velocityX=-4;
  ninja=createSprite(300,300,20,20);
  ninja.addImage(ninjaimg);
  ground=createSprite(300,400,50,10);
 }
function draw(){
  background("black");
  if (bg.x<0){
    bg.x=bg.width/2
  }
if(keyWentDown("space")){
  ninja.velocityY=-20;
}
if(keyWentDown(UP_ARROW)){
  bullets=createSprite(300,300,10,10);
  bullets.addImage(bullet)
  bullets.velocityX=4;
  bullets.lifetime=140;
  bullets.scale=0.1;
}
ninja.velocityY=ninja.velocityY+1;
ninja.collide(ground)
 spawnBox()
 spawnCrystal() 
 spawnAliens()
  drawSprites()

}

function spawnBox(){
  if(frameCount%60===0){
  box2=createSprite(1000 ,500,40,40);
  box2.addImage(box)
  box2.velocityX=-4;
  box2.lifetime=180;
  }
}
function spawnCrystal(){
  if(frameCount%80===0){
  crystal=createSprite(800 ,300,40,40);
  crystal.scale=0.2;
  crystal.addImage(crystalimg)
  crystal.velocityX=-4;
  crystal.lifetime=180;
  }

}
function spawnAliens(){
 if(frameCount%150===0){
   alien=createSprite(1000,300,40,40)
   alien.scale=0.5;
   alien.addImage(alienimg)
   alien.velocityX=-5;
   alien.lifetime=180;
 }
}
function spawnAlienbullets(){
  if(frameCount%151===0){
    Alienbullets=createSprite(1000,300,40,40)
    Alienbullets.scale=0.5;
    Alienbullets.addImage(alienimg)
    Alienbullets.velocityX=-5;
    Alienbullets.lifetime=180;
  }
 }


