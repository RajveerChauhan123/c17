var box1
var box1


function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,200,10,10);
  box2 = new Box(100,100,25,40,2)
}

function draw() 
{
  background(220);
  box1.show()
  box2.show()
  box2.move();
}
