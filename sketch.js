const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
const Render = Matter.Render;

var bob1,bob2,bob3,bob4;
 var roof;
 var rope1,rope2,rope3,rope4;
 var world;

function preload()
{	
}
function setup() 
{
	createCanvas(800, 700);
	engine = Engine.create();
	world = engine.world;

  bobDiameter=40;

	//Create the Bodies Here
   
    roof=new Roof(400,200,200,20);

	bob1=new Bob(200,600,40,40);
	bob2=new Bob(240,600,40,40);
	bob3=new Bob(280,600,40,40);
	bob4=new Bob(320,600,40,40);
	

  rope1=new Rope(bob1.body,roof.body,-bobDiameter*2, 0)
	rope2=new Rope(bob2.body,roof.body,-bobDiameter*1, 0)
	rope3=new Rope(bob3.body,roof.body,0, 0)
	rope4=new Rope(bob4.body,roof.body,bobDiameter*1, 0)

	/*constraint1={
		bodyA:bobObject1.body,
		bodyB:roofObject.body,
		pointB: {x:-bobDiameter*2, y:0}
	}
	constraint2={
		bodyA:bobObject2.body,
		bodyB:roofObject.body,		
		pointB: {x:-bobDiameter, y:0}
	}
	constraint3={
		bodyA:bobObject3.body,
		bodyB:roofObject.body,		
		pointB: {x:0, y:0}
	}
	constraint4={
		bodyA:bobObject4.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter, y:0}	
	}
	constraint5={
		bodyA:bobObject5.body,
		bodyB:roofObject.body,		
		pointB: {x:bobDiameter*2, y:0}
	}
	var pendulum1=Constraint.create(constraint1)
	var pendulum2=Constraint.create(constraint2)
	var pendulum3=Constraint.create(constraint3)
	var pendulum4=Constraint.create(constraint4)
	var pendulum5=Constraint.create(constraint5)
	World.add(world, pendulum1);
	World.add(world, pendulum2);
	World.add(world, pendulum3);
	World.add(world, pendulum4);
	World.add(world, pendulum5);
	*/

	Engine.run(engine); 
	//render.run (render);
}
function draw() 
{
  background("lightBlue");
  Engine.update(engine);

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();

  roof.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  

  drawSprites();
}

function keyPressed() {
  if (keyCode === UP_ARROW)
   {
    Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-50,y:-45});
  }
}

function drawLine(constraint)
{
bobBodyPosition=constraint.bodyA.position
roofBodyPosition=constraint.bodyB.position

roofBodyOffset=constraint.pointB;

roofBodyX=roofBodyPosition.x+roofBodyOffset.x
roofBodyY=roofBodyPosition.y+roofBodyOffset.y
line(bobBodyPosition.x, bobBodyPosition.y, roofBodyX,roofBodyY);
}