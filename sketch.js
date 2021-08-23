var bg,bg2,trex,form,system,code,security;
var score=0;

function preload() {
  bg = loadImage("aladdin_cave.jpg");
  bg2 = loadImage("treasure.jpg");
  trex = loadImage("trex1.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight);
  system = new System()
  security = new Security()
   /* obstacle = createSprite(displayWidth/2-500,displayHeight/2-200,40,40);
    //key2.addImage(trex);
    obstacle.visible = false;
   // key2.lifetime = displayWidth-50;
    obstacle2 = createSprite(displayWidth/2-300,displayHeight/2,40,40);
    //key23.addImage(trex);
    obstacle2.visible = false;
    obstacle3 = createSprite(displayWidth/2,displayHeight/2-200,40,40);
    //key24.addImage(trex);
    obstacle3.visible = false;
    entrance = createSprite(displayWidth-500,displayHeight-700,50,50);
    entrance.shapeColor = "yellow"
    entrance.visible = false;
    you = createSprite(displayWidth-500,displayHeight-100,50,50);
    you.shapeColor = "blue";
    you.visible = false;

    obstaclesGroup = new Group();*/
}

function draw() {
  background(bg);
  clues();
  security.display();
  textSize(20);
  fill("white");
  text("Score: " + score, displayWidth/2,displayHeight/2-800);

  if(score === 3) {
    clear();
    background(bg2);
    fill("black");
    textSize(40);
    text("TRESURE UNLOCKED",displayWidth/2,displayHeight/2);
    /*you.visible = true;
    entrance.visible = true;
    obstacle.visible = true;
    obstacle2.velocityX = Math.round(random(1,10))
    obstacle2.visible = true;
    obstacle3.visible = true;
    fill("yellow");
    textSize(30);
    background("green");
    text("YOU HAVE TO PLACE YOUR KEY WHICH IS IN BLUE COLOUR ON THE LOCK WHICH IS IN YELLOW",displayWidth/2,displayHeight/2-300);
    text("USE ARROW KEYS TO MOVE YOUR KEY",displayWidth/2,displayHeight/2);
    if(keyCode === UP_ARROW){
      entrance.y += 20;
    }
    if(keyCode === DOWN_ARROW){
      entrance.y -= 20;
    }
    if(keyCode === LEFT_ARROW){
      entrance.x -= 20;
    }
    if(keyCode === RIGHT_ARROW){
      entrance.x += 20;
    }
    if(you.x === entrance.x){
      background(bg2);
    }*/
  }

  drawSprites()
    /*createEdgeSprites();
    key2.bounceOff(TOP_EDGE);
    key2.bounceOff(bottomEdge);
    key2.bounceOff(leftEdge);
    key2.bounceOff(rightEdge);*/
}
/*function spawnObstacles() {
  if(frameCount % 60 === 0) {
    var obstacle = createSprite(camera.x+width/2,165,10,40);
    //obstacle.debug = true;
    //obstacle.velocityX = 
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(trex);
              break;
      case 2: obstacle.addImage(trex);
              break;
      case 3: obstacle.addImage(trex);
              break;
      case 4: obstacle.addImage(trex);
              break;
      case 5: obstacle.addImage(trex);
              break;
      case 6: obstacle.addImage(trex);
              break;
      default: break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 300;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle2);
  }
}*/
