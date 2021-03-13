var ground, groundSprite, paper, left, center, right;
//var paperSprite, leftSprite, centerSprite, rightSprite;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1440, 820);
//everything but the ground isn't showing up

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper (200, 300, 50)
	fill("white");
	//paperSprite = createSprite(200, 650, 50);

	groundSprite = createSprite(width/2, 810, 1500, 20)
	groundSprite.shapeColor = color("white")
	ground = new Ground (width/2, 838, 1500, 20)
	ground = new Ground (width/2, -10, 1500, 20)
	ground = new Ground (1480, 410, 20, 820)
	ground = new Ground (-40, 410, 20, 820)
	fill("black");

	left = new Box (1303, 743, 20, 75)
	fill("yellow");
	//leftSprite = createSprite(300, 400, 20, 100)
	center = new Box (1225, 820, 175, 20)
	fill("yellow");
	right = new Box (1148, 743, 20, 75)
	fill("yellow");
	//rightSprite = createSprite(500, 400, 20, 100)


	Engine.run(engine);
	centerSprite = createSprite(1225, 790, 175, 20)
	centerSprite.shapeColor = color("yellow")
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  left.display();
  center.display();
  right.display();
  
  //keyPressed();
  drawSprites();
 
}



function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position,{x: .85, y: -.85})
	}
}