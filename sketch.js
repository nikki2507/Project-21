
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground;
var left;
var right;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 500);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground =new Ground(200,400,2000,20);
	left =new Ground(600,340,20,100);
    right =new Ground(800,340,20,100);

	Engine.run(engine);


	var ball_options = {
		isStatic: false,
		restitution: 0.3,
		friction: 0,
		density: 1.2
	}

	 ball = Bodies.circle( 30, 40, 10, ball_options);
	 World.add(world, ball);

	 ellipseMode(RADIUS);
	 rectMode(CENTER);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
 
  ellipse(ball.position.x, ball.position.y, 10);
  ground.show();
  left.show();
  right.show();
  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball, ball.position.x, ball.position.y ,  {x:0, y:-0.02});
	}
}

