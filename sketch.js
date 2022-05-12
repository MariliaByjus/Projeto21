var PLAY = 1;
var END = 0;
var gameState = PLAY;
var cupImg , cupcorrendoImg , fundoImg ;
var cuphead , fundo , obstacleGroup , invisibleGround;



function preload(){
    cupImg= loadAnimation("frame-01.png","frame-02.png","frame-03.png","frame-04.png","frame-05.png","frame-06.png","frame-07.png","frame-08.png","frame-09.png","frame-10.png","frame-11.png","frame-12.png", "frame-13.png", "frame-14.png", "frame-15.png", "frame-16.png");
    cupmorrendoImg = loadImage("cuphead-removebg-preview.png");
    fundoImg = loadImage ("fundo.jpg");
    obstacleImg = loadImage ("obstacle-removebg-preview.png");
}

function setup() {
    createCanvas(1000,742);
  
  fundo= createSprite(1000/2,742/2);
  fundo.addImage(fundoImg);
  fundo.velocityX = -3;                                        
  
  cuphead = createSprite(100,480);
  cuphead.scale = 0.7;
  cuphead.addAnimation("correndo",cupImg);
  

  invisibleGround = createSprite(500,630,1000,100);
  invisibleGround.visible = false;

  obstaclesGroup = new Group(); //prof: grupo = new Group()



cuphead.setCollider("circle",0,0,40);
cuphead.debug = true;


}

function draw() {
  
  

  if(gameState === PLAY){
    spawnobstacles();
    if(fundo.x < 0 ){
      fundo.x = 900 ;
      }
      if(keyDown("space")) {
        cuphead.velocityY = -3;
      }
      cuphead.velocityY = cuphead.velocityY + 0.5;
      if(obstaclesGroup.isTouching(cuphead)){
        gameState = END;
      }
  }

if(gameState === END){

//prof

  obstacleGroup.setVelocityEach(0);
  cuphead.addImage(cupmorrendoImg);

  fundo.velocityX = 0;
  cuphead.velocityY = 0
  

  }






  cuphead.collide(invisibleGround);

 drawSprites();

} //prof

function spawnobstacles(){
  if (frameCount % 160 === 0) {
    var obstacle = createSprite(1000, 500, 10, 40);
   obstacle.addImage(obstacleImg);
   obstacle.scale = 0.2;
  obstacle.velocityX = -3;
    
  obstacle.lifetime = 340;

  obstaclesGroup.add(obstacle);
  
    }
  }



