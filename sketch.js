const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;
  Ground1 = new Ground(240,790,480,20)
  for (var k = 0; k <=width; k=k+80) {
    divisions.push(new Division(k, height-divisionHeight/2, 10, divisionHeight))
  }
  for (var j = 40; j <=width; j= j+50){
    plinkos.push(new Plinko(j,75));
  }

  for (var j = 15; j <=width-10; j= j+50){
    plinkos.push(new Plinko(j,175));
  }
}

function draw() {
  background("pink");
  Engine.update(engine);
  Ground1.display();
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-10, width/2+10),10));
  }
  for(var i = 0;i<divisions.length;i++){
     divisions[i].display();
  }
  for(var i = 0;i<plinkos.length;i++){
    plinkos[i].display();
 }
 for(var i = 0;i<particles.length;i++){
  particles[i].display();
}
  drawSprites();
}