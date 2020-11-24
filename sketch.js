var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var bananaGroup;
var score;
function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
  
}



function setup() {
  
  createCanvas(800,500)
  bananaGroup=new Group();
  obstacle=new Group();
   monkey=createSprite(80,200,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale=0.1;
  
  
  ground=createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.shapeColor="yellow";
  ground.x=ground.width/2;
   score=0;
   survivalTime=0;
}


function draw() {
  
background("lightBlue");
//text("Score :"+score,500,50);
  
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("Survival Time:"+survivalTime,100,50);
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  if(keyDown("space")){
    monkey.velocityY=-12; 
  }
  monkey.velocityY=monkey.velocityY+0.8
  monkey.collide(ground);
  banana();
  obstacles();
drawSprites();
   
  
}
function banana(){
 if (frameCount % 80 === 0) {
     var banana = createSprite(600,100,40,10);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale = 0.5;
    banana.velocityX = -3;
    banana.scale=0.1;
     //assign lifetime to the variable
    banana.lifetime = 134;
    //adjust the depth
    banana.depth = monkey.depth;
    banana.depth = monkey.depth + 1;
    bananaGroup.add(banana);
    //adding cloud to the group
   
  }
}

function obstacles(){
 if (frameCount % 300 === 0) {
     var obstacles = createSprite(400,340,40,10);
   // obstacles.y = Math.round(random(120,200));
    obstacles.addImage(obstaceImage);
    obstacles.scale = 0.5;
    obstacles.velocityX = -3;
    obstacles.scale=0.1;
     //assign lifetime to the variable
    obstacles.lifetime = 200;
    //adjust the depth
    obstacles.depth = monkey.depth;
    obstacles.depth = monkey.depth + 1;
    
    //adding cloud to the group
   
  }
}



