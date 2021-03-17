
var gamestates = "play"

function preload(){
  
  doodler = loadImage("dodlejump-removebg-preview.png")
  bdj = loadImage("doodlejump_background.jpg")
  ground = loadImage("doodleground-removebg-preview.png")
  monster = loadImage("monster-removebg-preview.png")
  monster2 = loadImage("monster2-removebg-preview.png")
}

function setup(){
  createCanvas( displayWidth, displayHeight)

  backg = createSprite(667,800, 200,800)
  backg.addImage("Background", bdj)
  backg.scale = 3

  player = createSprite(displayHeight/2+220,displayHeight+10)
  player.addImage("doodler",doodler)
  player.scale = 0.2
  
    textSize(50)
  text("OH NO! REFRESH THE PAGE TO RETRY...", 260, 1500)

 
      


  gGroup = new Group();
  invisibleGroup = new Group();
  
}



function draw() {
  background("white")

  if(gamestates === "end"){
    textSize(40)
    textAlign(CENTER)
    text("GAME OVER",260,player.y)
    text("GAME OVER",1160,player.y)
    end = createSprite(player.x,player.y)
    end.addImage(monster2)
    drawSprites();
  }


  
   if(gamestates === "play"){
  
    console.log(player.y)

  //  if(backg.y>400){
    //backg.y = 300
  
    camera.position.x = displayWidth/2;
    camera.position.y = player.y
  
    if(keyDown("left")){
    player.x = player.x - 5;
  }
  
  if(keyDown("right")){
    player.x = player.x + 5;
  }
  
  
  if(keyDown("space")){
    player.velocityY = -5    
  }
  
         
  if(gGroup.isTouching(player)){
    player.velocityY = 0;}
     
  if(invisibleGroup.isTouching(player)){
    player.destroy();
    invisibleGroup.destroyEach();
    gGroup.destroyEach();
    gamestates = "end"
  }
  if(player.y  < -700){
    player.destroy();
    win = createSprite(player.x,player.y)
    win.addImage(doodler)
    fill("gold")
    textSize(20)
    text("YOU HAVE WON DOODLEJUMP!!!", 667,-800 )
    textSize(50)
    text("CONGRATULATIONS!!!", 690,-900)
    invisibleGroup.destroyEach();
    gGroup.destroyEach();
    

   }
  
   player.velocityY = player.velocityY +0.8 
  
  SpawnMonsters();
  SpawnGround();
 drawSprites();

 textSize(50)
 text("OH NO! REFRESH THE PAGE TO RETRY...", 260, 2000)
}
  

  
  
}

function SpawnGround(){
  if(frameCount%200 === 0){
    
    g = createSprite(200,-50)
    g.addImage("ground", ground);
    g.velocityY = 1;
    g.scale = 0.07;
    g.lifetime = 1000;
    gGroup.add(g)
    

     g.x = Math.round(random(560,790))
   
}}

function SpawnMonsters(){
  
   if(frameCount%100 === 0){
       invisible = createSprite(550,5,50,2);
    invisible.addImage(monster)
    invisible.scale = 0.1
    invisible.velocityY = 2;
    invisible.lifetime = 1000;
    invisibleGroup.add(invisible)   
     invisible.x = Math.round(random(560,790))
   } 
}