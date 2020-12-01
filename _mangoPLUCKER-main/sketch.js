var Tree,TreeImage;
var Juno,JunoImage;
var Rock,RockImage;
var mango, mangoImage;
var ground
var sling;

var mango1,mango1Image;
var mango2,mango2Image;
var mango3,mango3Image;
var mango4,mango4Image;
var mango5,mango5Image;
var mango6,mango6Image;
var mango7,mango7Image;




const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	// load images
	mango1Image = loadImage ("MANGO.png");
	mango2Image = loadImage ("MANGO.png");
	mango3Image = loadImage ("MANGO.png");
	mango4Image = loadImage ("MANGO.png");
	mango5Image = loadImage ("MANGO.png");
	mango6Image = loadImage ("MANGO.png");
	mango7Image = loadImage ("MANGO.png");
	TreeImage = loadImage ("TREE.png");
	JunoImage = loadImage ("BOY.png");
	RockImage = loadImage ("STONE.png");
	mangoImage = loadImage ("MANGO.png");


}

function setup() {
	createCanvas(1500, 700);


	engine = Engine.create();
	world = engine.world;

	mango1= new Mango(1200,315,30);
	mango2= new Mango(1210,255,30);
	mango3= new Mango(1260,155,30);
	mango4= new Mango(1350,225,30);
	mango5= new Mango(1450,275,30);
	mango6= new Mango(1250,210,30);
	mango7= new Mango(1390,190,30);

	rock= new Stone(220,440,50);

	ground= new Ground(750,700,1500,20);

	sling= new Slingshot(rock.body,{x:110,y:330})



	Engine.run(engine);
  
}


function draw() {
  imageMode(CENTER);
  background("white");

 
  image(JunoImage,200,440,200,300);
  image(TreeImage,1300,300,400,400);

  mango1.display();
  mango2.display();   
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  rock.display();                 
  ground.display();
  sling.display();
  detectollision(rock,mango1)
  detectollision(rock,mango2)
  detectollision(rock,mango3)
  detectollision(rock,mango4)
  detectollision(rock,mango5)
  detectollision(rock,mango6)
  detectollision(rock,mango7)

  drawSprites();
 
}
function detectollision(lrock,mango)
{
mangoBodyPosition=mango.body.position
RockBodyPosition=lrock.body.position

var distance = dist(RockBodyPosition.x,RockBodyPosition.y,mangoBodyPosition.x,mangoBodyPosition.y)
if (distance<=mango.r+lrock.r)
{
	Matter.Body.setStatic(mango.body,false);
}
}
function mouseDragged()
{
	Matter.Body.setPosition(rock.body, {x:mouseX, y:mouseY}) 
}

function mouseReleased()
{
	sling.fly();
     
}


function keyPressed() {
	if (keyCode === 32) {
    Matter.Body.setPosition(rock.body, {x:110, y:330}) 
	  sling.attach(rock.body);
	}
  }




