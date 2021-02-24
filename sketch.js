var missile,shooter,invader,edges,invader1,invader1GR,missile1,missile1Gr,BigInvader,music1,music2,music3,next,rty,Try,spac,mou;
var PLAY=2;
var START=3;
var END=1;
var INST=4
var SETT=5
var SPACEC=6
var ROCKE=7
var ENDTEXT=0
var gameState=START;
var biginvader;
var score=0;
var life=5;
var MISSILE;
var earth,earth1;
var nomusic,yessound,nosound,shot;
function preload(){;
shooterImg=loadImage("2.png")
inv=loadImage("3.png")
 space=loadImage("space.jpg") 
  miss=loadImage("missile22.png")
  miss1=loadImage("missile2.png")
  over=loadImage("over.png")
  song=loadSound("sonicastronomia.mp3")
  rocket=loadSound("launc.wav")
  overSnd=loadSound("over.wav")
  invaderBIG=loadImage("Big invader.png")
  earth1=loadImage("EARTH.png")
  spec=loadSound("Spectre.mp3")
  alo=loadSound("alone.mp3")
}
function setup(){
 createCanvas(1000,600 );
  gameState=START;
  edges=createEdgeSprites()

shooter = createSprite(40,200,20,20)
shooter.addImage(shooterImg); 
shooter.scale=0.11

 earth=createSprite(500,400,30,30);
 earth.addImage(earth1);
 earth.visible=false
  
  missileGr=new Group();
  invaderGr=new Group();
  invader1GR=new Group();
  missile1Gr=new Group();
  
  
}
function draw(){
  background(space)
  edges=createEdgeSprites();


  if(gameState===SETT){
    textSize(30)
    fill("white")
  
    text("Do you need rocket sound when shooting rocket",70,250);
    text("___________________________________________________________________________________________________________________",0,180)

    spac=createSprite(100,150,150,50);
    mou=createSprite(400,150,150,50);
    yessound=createSprite(230,300,200,40);
    nosound=createSprite(600,300,200,40);
    
    text("(YES)",yessound.x,yessound.y+10);
    text("(NO)",nosound.x,nosound.y+10);
    spac.visible=false;
    mou.visible=false;
    yessound.visible=false;
    nosound.visible=false;
    if(mousePressedOver(nosound)){
      gameState=SPACEC
    }
    if(mousePressedOver(yessound)){
      gameState=PLAY

    }

    }
    if(gameState===SPACEC){
      if(keyDown("space")){
        spmiss();

      }
      shot=createSprite(50,550,100,100)
      shot.addImage(miss);
      shot.scale=0.2
      shooter.addImage(shooterImg);
      shooter.scale=0.11
      music1.visible=false;
      music2.visible=false;
      music3.visible=false;
      shooter.visible=true;
      if(mousePressedOver(shot)){
        spmiss();
        
      }
      earth.visible=false;
      spawnInvader();

   if(missileGr.isTouching(invaderGr)){
    invaderGr.destroyEach();
    missileGr.destroyEach();
    rocket.stop();
    score=score+1
  }
  if(life=0){
    invaderGr.destroyEach();
  }
   if(invaderGr.isTouching(shooter)){
     overSnd.play()
     gameState=END
   }
    }

  
  
  if(gameState===INST){
    fill("white")
    textSize(30)
    
    text("You are created to save the earth kill all the 100 invaders to save earth",20,150);
    text("Press the shooter to shoot rocket",300,200);
     next=createSprite(900,300,150,40);
     textSize(20)
     text("NEXT>>",next.x,next.y)
     shooter.visible=false;
     next.visible=false;
     if(frameCount%1===0){
     if(mousePressedOver(next)){
      gameState=START;
   }
  }}

  if(gameState===START){
    music1=createSprite(250,300,230,40);
    music1.shapeColor="white";
    music2=createSprite(500,300,200,40);
    music2.shapeColor="white";
    music3=createSprite(400,350,200,40);
    nomusic=createSprite(800,300,200,40)
    music3.shapeColor="white";
    shooter.visible=false;
    music1.visible=false;
    music2.visible=false;
    music3.visible=false;
    nomusic.visible=false;
    
    textSize(30)
    fill("white")
    text("(ASTRONOMIA)",music1.x-110,music1.y+10);
    text("(SPECTRE)",music2.x-60,music2.y+10);
    text("(ALONE)",music3.x-50,music3.y+10);
    text("(NONE)",nomusic.x-10,nomusic.y+5)
    stroke("white");
    textSize(30)
    strokeWeight(1)
    text("Press which music you need",200,100)
    if(frameCount%1===0){
    if(mousePressedOver(music1)){
      
      song.play();
      
      gameState=SETT;
    
    }
  }

  if(frameCount%1===0){
    if(mousePressedOver(music2)){
      
      spec.play();
      gameState=SETT;
    
    }
  }

  if(frameCount%1===0){
    if(mousePressedOver(music3)){
      
      alo.play();
      gameState=SETT;
    
    }
  }

  if(frameCount%1===0){
    if(mousePressedOver(nomusic)){
      gameState=SETT;
    
    }
  }
    
  }
  
  if(gameState===ENDTEXT){
    shooter.visible=false;
       textSize(35)
       fill("white")
      text("Press Retry button",350,200);
      text("___________________",310,200) 
      text("YOU LOSE",400,300)
      text("TRY to win",390,350)
      Try=createSprite(500,500,150,50)
      Try.visible=false;
      text("<(RETRY)>",Try.x-40,Try.y)
      if(mousePressedOver(Try)){
          gameState=START;
      }
      shot.visible=false;
      
 
  }

  if(gameState===PLAY){

    shooter.addImage(shooterImg);
    shooter.scale=0.11
    music1.visible=false;
    music2.visible=false;
    music3.visible=false;
    shooter.visible=true;
    shot=createSprite(50,550,100,100)
    shot.addImage(miss);
    shot.scale=0.2
 
    spawnInvader();
    if(mousePressedOver(shot)){
      spmiss();
      rocket.play();
    }
 if(missileGr.isTouching(invaderGr)){
  invaderGr.destroyEach();
  missileGr.destroyEach();
  rocket.stop();
  score=score+1
}
if(life=0){
  invaderGr.destroyEach();
}
 if(invaderGr.isTouching(shooter)){
   overSnd.play()
   gameState=END
 }
  }
  if(gameState===END){
    shooter.x=450;
    shooter.y=300;
    shooter.addImage(over);
    shooter.scale=1;
    invaderGr.setVelocityYEach(0);
    shooter.setCollider("rectangle",0,0,-5,-5);
    invaderGr.destroyEach();
    invader1GR.destroyEach();
    music1.visible=false;
    music2.visible=false;
    music3.visible=false;
    
    rty=createSprite(800,290,200,40)
    rty.visible=false;
    textSize(30)
    fill("white")
    text("NEXT>>",800,300)
    spec.stop();
    alo.stop();
    sound1()
    if(mousePressedOver(rty)){
      gameState=ENDTEXT
    }
    reset()
  }
 

 
  if(score===100){
  
  earth.scale=0.2
  fill("black")
  textSize(35)
  text("YOU WON",350,200);
  text("You saved the Earth from the invaders",200,300);
  shooter.visible=false;
  earth.visible=true; 
  invaderGr.destroyEach();
  invader1GR.destroyEach();
  missile.visible=false;
  rocket.stop();
  
  if(keyCode===82){
    
    gameState=PLAY;
    score=0
  }
  }

  drawSprites();
  textSize(15);
  noStroke();
  fill("white")
  text("Score:"+score,530,20);
  text("score 100 to win",500,590);

}
function spawnInvader(){
  if(frameCount%50===0){
    invader=createSprite(Math.round(random(10,590)),-50)
    invader.velocityY=28
    invader.addImage(inv) 
    invader.scale=0.1
    invader.lifetime=-1
    invaderGr.add(invader)
  
  
  
  
  
  }
}
function spmiss(){
   missile= createSprite(100,100,12,12) 
 missile.addImage(miss);
 missile.scale=0.1 
 missile.velocityY=-14; 
  missile.x=shooter.x
  missile.y=shooter.y
  missile.lifetime=-1
 missileGr.add(missile) 
 rocket.play();
 
}
function reset(){

  
}
function sound(){
 if(frameCount-5===0){
  
 }
  
  
 

}
function sound1(){
  song.stop();
  
}
function asd(){
  BigInvader=createSprite(500,300,10,10)
  BigInvader.addImage(inv)
  BigInvader.scale=0.2
  MISSILE=createSprite(520,500,20,10)
  MISSILE.addImage(miss1)
  MISSILE.scale=0.2; 
}
function Spaces(){
  if(gameState===PLAY){
    if(keyDown("space")){
       rocket.play();
        spmiss();
}}
}
function mouseDragged(){
  shooter.x=World.mouseX
  shooter.y=World.mouseY
 

}
function mouseReleased(){
 
}