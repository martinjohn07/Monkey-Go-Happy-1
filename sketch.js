
var monkey , monkey_running,ground,obstacle
var banana ,bananaImage, obstacle, obstacleImage,groundImage
var FoodGroup, obstacleGroup
var survivalTime=0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
  groundImage=loadImage("background.jpg");
}



function setup() {
  createCanvas(500,400);

  background=createSprite(0,0,20,20)
  background.addImage("ground",groundImage);
  background.scale=1.7
  
  
  background.velocityX=-6
  
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  Ground = createSprite(250,350,500,10);
  Ground.visible = false;
  Ground.shapeColor="brown"
  
  
  
  
}


function draw() {

  if(background.x<0){
    background.x=200
  }
  
  if(keyDown("space")){
    monkey.velocityY = monkey.velocityY=-5;
  }
  
  //add gravity
  monkey.velocityY+=0.8

  var spawnBanana = Math.round(random(1));
  if (World.frameCount % 50 == 0) {
    if (spawnBanana == 1) {
      banana();
    }
   }
obstacles()
  
    monkey.collide(Ground)
  
  
  
  
  
  
 drawSprites(); 
  
  

  textSize(20);
  fill("black");
 survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,350,50)
  
}

//functions

function banana() {
  
  var banana = createSprite(450,Math.round(random(120, 200)), 10, 10);
  banana.addImage(bananaImage);
  banana.velocityX = -4;
 banana.lifetime = 150;
  banana.scale=0.1
  
}


function obstacles() {
  
  if(frameCount%70==0){
  var obstacle = createSprite(450,300, 10, 10);
  obstacle.addImage(obstacleImage);
 obstacle.velocityX = -4;
  obstacle.lifetime=150;
obstacle.scale=0.1
  }
  
}

