var chA,gr,gr1,cheetah,aliens,CH1,gr2,alienGroup,a1,a2,a3;

function preload()
{
   chA=loadAnimation("running-cheetah-png-1.png","ch.png.png" )  

  gr1=loadImage("Ground-PNG-HD.png")
  
  CH1=loadImage("ch.png.png" ) 
  
  a1=loadImage("unnamed (1).png")
  
  a2=loadImage("Alien-No-Background.png")
  
  a3=loadImage("alien-walking-alien-png-1200_1200.png")
}

function setup()
{
createCanvas(600,200)
 
  gr=createSprite(300,260,600,25)
  gr.addImage("g",gr1)
  gr.scale=1
  
  cheetah=createSprite(80,100)
  cheetah.addAnimation("A",chA)
  cheetah.scale=0.2
  
  gr2=createSprite(300,200,600,25)
  gr2.visible=false
  
  alienGroup=createGroup();
}

 
function draw()
{
background("black")
  //console.log(cheetah.y)
if(keyDown("space")&&cheetah.y>=160 ) 
{
cheetah.velocityY=-11 
cheetah.addImage("a",CH1) 
}  

  if(alienGroup.isTouching(cheetah))
  {
  gr.velocityX=0
  cheetah.velocityX=0
  }
  
if(gr.x<300)
{
gr.x=gr.width/2
 }
  
cheetah.velocityY=cheetah.velocityY+0.50

  gr.velocityX=-9
  
  cheetah.collide(gr2)
  spawnAliens();
drawSprites() 
}

function spawnAliens()
{
  if(frameCount%60===0)
  {
    aliens=createSprite(650,150,50,50)
    aliens.velocityX=-9 
    aliens.scale=0.2
    var rand=Math.round(random(1,3));
    alienGroup.add(aliens)
    
    switch(rand)
    {
     case 1:aliens.addImage("a11",a1)
     break
     case 2:aliens.addImage("a22",a2)
     break
     case 3:aliens.addImage("a33",a3)
     break
     default:break;
    }
    }
    }
