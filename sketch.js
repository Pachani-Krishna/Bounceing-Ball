var canvas;
var music;
var block1,block2,block3,block4
var ball
var bush1
var bush2
var bush3

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    block1 = createSprite(110,560,180,20);
    block1.shapeColor = ("blue")
    block2 = createSprite(305,560,180,20);
    block2.shapeColor = ("red")
    block3 = createSprite(500,560,180,20);
    block3.shapeColor = ("green");
    block4 = createSprite(690,560,180,20);
    block4.shapeColor = ("purple");
    ball = createSprite(400,100,20,20);
    ball.velocityX = 5;
    ball.velocityY = 9;
    bush1 = createSprite(799,300,5,600)
    bush1.visible = false
    bush2 = createSprite(1,300,5,600)
    bush2.visible = false
    bush3 = createSprite(400,1,1000,5)
    bush3.visible = false
}

function draw() {
    background(rgb(169,169,169));
    createEdgeSprites();
    

    
    if (block1.isTouching(ball)&&ball.bounceOff(block1)){
        ball.shapeColor = ("blue")
    }
    
    if (block2.isTouching(ball)&&ball.bounceOff(block2)){
        ball.shapeColor = ("red")
    }
    
    if (block3.isTouching(ball)&&ball.bounceOff(block3)){
        ball.shapeColor = ("green")
    }
    
    if (block4.isTouching(ball)&&ball.bounceOff(block4)){
        ball.shapeColor = ("purple")
    }
    
   if (bush1.isTouching(ball)||bush2.isTouching(ball)||bush3.isTouching(ball)){
        ball.bounceOff(bush1);
        ball.bounceOff(bush2);
        ball.bounceOff(bush3);
   }
    
    
    
   

    drawSprites();
}
