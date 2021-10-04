const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;

function preload(){
  bg = loadImage("images/background.png")
  fruitimg = loadImage("images/melon.png")
  bunnyimg = loadImage('images/Rabbit-01.png')
}


function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;
  rope = new Rope(5,{x:250,y:30})
  fruit = Bodies.circle(250,50,25)
  World.add(world,fruit)

  bunny = createSprite(220,600)
  bunny.addImage(bunnyimg)
  bunny.scale = 0.2

  cut = createImg("images/cut_btn.png")
  cut.position(250,30)
  cut.size(50,50)
  cut.mouseClicked(function(){
    rope.break()
    link.remove()
  })
  link=new Link(rope,fruit)
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(bg);
  Engine.update(engine);
  rope.display()
  push()
  imageMode(CENTER)
  image(fruitimg,fruit.position.x,fruit.position.y,100,100)
  pop()
  drawSprites()
}




