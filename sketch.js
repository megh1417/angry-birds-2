const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine,world, ground, box1, box2; 
var backgroundImage

function preload(){
 backgroundImage=loadImage("sprites/bg.png")
}



function setup() {
  createCanvas(1500-300,400);
   engine= Engine.create();
   world= engine.world; 
   box1= new Box(700,320,70,70);
   box2= new Box(920,320,70,70);
   ground= new Ground(600,height,1200,20);
   pig= new Pig(810,350);
   log1= new Log(810,260,300,PI/2);
   box3= new Box(700,240,70,70);
   box4= new Box(920,240,70,70);
   log2= new Log(810,180,300,PI/2);
   pig2= new Pig(810,220);
   box5= new Box(810,160,70,70);
   log3= new Log(750,120,150,PI/7);
   log4= new Log(880,120,150,-PI/7);
   bird= new Bird(100,200)  
  
  
}

function draw() {
  background(backgroundImage);
  Engine.update(engine);
  box1.display();
  box2.display();
  ground.display();
  pig.display();
  log1.display();
  box3.display();
  box4.display();
  log2.display();
  pig2.display();
  box5.display();
  log3.display();
  log4.display();
  bird.display();
  
  
}