
//decrese the life as the hunter collides with the zombie
//life variable
//gamestates

var hunter,hunterImage
var zombie,zombieImage
var background,backgroundImage
var bullet,bulletImage
var heart1,heartImage1
var heart2,heartImage2
var heart3,heartImage3
var zombieGroup
var bullets=50
var bulletGroup
var life=3
var score=0

function preload(){
  hunterImage=loadImage("hunter.png")
  zombieImage=loadImage("zombie.png")
  backgroundImage=loadImage("background.png")
  bulletImage=loadImage("bullet.png")
heartImage1=loadImage("heart1.png")
heartImage2=loadImage("heart2.png")
heartImage3=loadImage("heart3.png")
}

function setup(){
  createCanvas(1198,672)
  background=createSprite(1198/2,672/2,1198,672)
  background.addImage(backgroundImage)

  hunter=createSprite(100,510,20,20)
  hunter.addImage(hunterImage)
  hunter.scale=0.5

  heart1=createSprite(60,50)
  heart1.addImage(heartImage1)
  heart1.scale=0.2
  heart1.visible=false

  heart2=createSprite(83,50)
  heart2.addImage(heartImage2)
  heart2.scale=0.2
  heart2.visible=false

 heart3=createSprite(111,50)
  heart3.addImage(heartImage3)
  heart3.scale=0.2
  heart3.visible=true

  zombieGroup=new Group();
  bulletGroup=new Group();
}

function draw() {


if(keyDown(RIGHT_ARROW)){
hunter.x=hunter.x+5
}

if(keyDown(LEFT_ARROW)){
  hunter.x=hunter.x-5
  }

  if(keyDown(UP_ARROW)){
    hunter.y=hunter.y-5
    }

    if(keyDown(DOWN_ARROW)){
      hunter.y=hunter.y+5
      }
//for(initiel value of the variable;finel value of the variable;increase or decrease){}
      if(zombieGroup.isTouching(hunter)){
      for(var i=0;i<zombieGroup.length;i++){
      if(zombieGroup[i].isTouching(hunter)){
    zombieGroup[i].destroy()
    life=life-1
      }
      }
      }

      if(keyWentDown("space")){
        bullet=createSprite(hunter.x+10,hunter.y-80)
bullet.addImage(bulletImage)
bullet.velocityX=20
bullet.scale=0.2
bulletGroup.add(bullet)

hunter.depth=bullet.depth
hunter.depth=hunter.depth+2
bullets=bullets-1
      }

      if(zombieGroup.isTouching(bulletGroup)){
        for(var i=0;i<zombieGroup.length;i++){
if(zombieGroup[i].isTouching(bulletGroup)){
zombieGroup[i].destroy()
bulletGroup.destroyEach()
score=score+5
}
  }
  }

      if(life===3){
heart3.visible=true
heart2.visible=false
heart1.visible=false
      }

if(life===2){
      heart3.visible=false
      heart2.visible=true
     heart1.visible=false
     } 

 if(life===1){
heart3.visible=false
heart2.visible=false
heart1.visible=true
 }

if(life===0){
//gamestate
 }
spawnZombie();
 
  drawSprites();
  text("Score:"+score,1107,20)
}

function spawnZombie(){
  if(frameCount % 60===0){
    var x=random(200,1198)
    var y=random(100,572)

    zombie=createSprite(x,y)   
  //zombie.y=Math.round(random(100,200))
  zombie.addImage(zombieImage)
  zombie.scale=0.2
  zombie.velocityX=-10
zombie.lifetime=300
zombieGroup.add(zombie)
  }

}