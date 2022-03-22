var sprite1;
var randomNum;
var colors = ["White","Red","Yellow","Blue","Green","Orange"];
function setup() {
  createCanvas(400,400);
  sprite1 = createSprite(200,200,30,30);
  randomNum = Math.round(random(0,5));
}

function draw() {
  background(colors[randomNum]);

  fill("black");
  textSize(14);
  text("Use the space bar to switch between different colors!",20,300,400,400);
  sprite1.shapeColor = randomNum;


  if(keyDown("space")){
    randomNum = Math.round(random(0,4));  
    console.log(randomNum);  
  }

  drawSprites();
}
