var bg,bgImg;
var player, carImg;
var gasoline, gasolineImg, gasolineGroup

function preload(){
  
  carImg = loadImage("car.png")

  bgImg = loadImage("bg.png")
  gasolineImg = loadImage("gasoline.png")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(1100,720,20,20)
bg.addImage(bgImg)
bg.scale = 3
  

//creating the player sprite
player = createSprite(300, displayHeight-300, 100, 100);
 player.addImage(carImg)
   player.setCollider("rectangle",0,0,300,300)

invisibleGround = createSprite(windowWidth/2,windowHeight,windowWidth,10);
  invisibleGround.visible = false;

  player.setCollider("rectangle",0,0,400,player.height);

  gasolineGroup = new Group();
}

function showFuelBar() {
  push();
  image(gasolineImg, width / 2 - 130, height - player.positionY - 350, 20, 20);
  fill("white");
  rect(width / 2 - 100, height - player.positionY - 350, 185, 20);
  fill("#ffc400");
  rect(width / 2 - 100, height - player.positionY - 350, player.fuel, 20);
  noStroke();
  pop();
}

function creategasoline(){
  if (frameCount % 200 === 0){

    

    gasoline = createSprite(width/2 + 300,800, 30,30);
    gasoline.addImage(gasolineImg)
    gasoline.scale = 0.2
    gasoline.velocityX = -3
    gasoline.lifetime = 400
   gasolineGroup.add(gasoline)
  }
}
function draw() {

  background(0); 
  background("skyBlue")

  bg.velocityX = -6



if(keyDown("UP_ARROW")&& player.y >= windowHeight-300){
  player.y = player.y-30
}

player.velocityY = player.velocityY + 0.8

if (bg.x < 300){
  bg.x = windowWidth-800;
}

if(gasolineGroup.isTouching(player)){
 

  for(var i=0;i<gasolineGroup.length;i++){     
       
   if(gasolineGroup[i].isTouching(player)){
        gasolineGroup[i].destroy()
         
        }
      }
    }

player.collide(invisibleGround);

creategasoline();
drawSprites();

    
  }
