
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var dustbinObj, paperObject,groundObject,a;	
var world;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
    engine=Engine.create();
	world=engine.world;
	groundObject=new ground(width/2,670,width,20);
	paperObject=new paper(200,450,70);
	dustbinObj=new dustbin(1200,650);
	
	

	

	Engine.run(engine);
	
}


function draw() {
  rectMode(CENTER);
  background(135,206,235);
  
  
  paperObject.display();
  groundObject.display();
  dustbinObj.display();

  
 
  
  
 
}

function keyPressed() {
  	if (keyCode === UP_ARROW) {

    	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-160});

    
  	}
}





