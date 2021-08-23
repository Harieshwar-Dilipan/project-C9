
function setup() {
  createCanvas(400,400);


}

function draw() 
{
  background(30);
  if(keyDown("r")){
    background("red");
  }
  if(keyDown("b")){
    background("blue");
  }
  if(keyDown("y")){
    background("yellow");
  }
  if(keyDown("g")){
    background("green");
  }
}




