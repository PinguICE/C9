
function setup() {
  createCanvas(400,400);
  var bloque = createSprite(200,200,20,20)
}


function draw() 
{
  
  background("yellow");
  if (keyIsDown(RIGHT_ARROW)) { background("red"); }

  drawSprites()
}




