const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1;

function setup(){
    createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    block1 = new Block(330,235,30,40,"pink");
    block2 = new Block(360,235,30,40,"pink");
    block3 = new Block(390,235,30,40,"pink");
    block4 = new Block(420,235,30,40,"pink");
    block5 = new Block(450,235,30,40,"pink");
    block6 = new Block(360,195,30,40,"pink");
    block7 = new Block(390,195,30,40,"pink");
    block8 = new Block(420,195,30,40,"pink");
    block9 = new Block(390,155,30,40,"pink");

    ground = new Ground(600,height,1200,20);

   

}

function draw(){
    background(0);
    Engine.update(engine);
    


}