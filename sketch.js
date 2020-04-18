const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var rain


function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 engine = Engine.create();
    world = engine.world;
    for(var i=0;i<20;i++){
      rain= new Rain(random(20,780),10,10,50);
    }
  
}

function draw() {
  background(0,100);  
  Engine.update(engine);
  rain.display();
  
 
}

 
