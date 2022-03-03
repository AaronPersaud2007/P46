var bg,bgImg;
var player, carImg;
var gasoline, gasolineImg, gasolineGroup
var tire, tireImg, tireGroup 

function preload(){
  
  carImg = loadImage("car.png")

  bgImg = loadImage("bg.png")
  gasolineImg = loadImage("gasoline.png")
  tireImg= loadImage("tires.png")
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
  tireGroup = new Group();
}


function creategasoline(){
  if (frameCount % 290 === 0){

    

    gasoline = createSprite(width/2 + 300,800, 30,30);
    gasoline.addImage(gasolineImg)
    gasoline.scale = 0.2
    gasoline.velocityX = -3
    gasoline.lifetime = 400
   gasolineGroup.add(gasoline)
  }
}

function createtires(){
  if (frameCount % 200 === 0){

    

    tire = createSprite(width/2 + 300,800, 30,30);
    tire.addImage(tireImg)
    tire.scale = 0.3
    tire.velocityX = -3
    tire.lifetime = 400
   tireGroup.add(tire)
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
    if(tireGroup.isTouching(player)){
 

      for(var i=0;i<tireGroup.length;i++){     
           
       if(tireGroup[i].isTouching(player)){
            tireGroup[i].destroy()
            }
          }
        }
player.collide(invisibleGround);
createtires();
creategasoline();
drawSprites();

    
  }
