var car,wall;
var speed,weight;
var deformation;
var rand; 

function setup() {
  createCanvas(1600,400);
  speed = random(55,90);
  weight = random(400,1500);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  deformation = 0.5 * weight * speed * speed/ 22500;
  rand = random(100,180);
}

function draw() {
  background(255,255,255);  
  car.velocityX = speed;
 
  if(deformation > 180){
    car.shapeColor = "red";
  }

  if(deformation < 100){
    car.shapeColor = "green";
  }

  if(deformation = rand){
    car.shapeColor = "yellow";
  }
  
  drawSprites();
}
