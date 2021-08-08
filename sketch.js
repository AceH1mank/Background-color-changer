
function setup() {
  createCanvas(400,400);
}

function draw() 
{
  background(30);
if(keyIsDown(DOWN_ARROW)){
  background('yellow');
}
if(keyIsDown(UP_ARROW)){
  background('black');
}
if(keyIsDown(LEFT_ARROW)){
  background('white');
}
if(keyIsDown(RIGHT_ARROW)){
  background('blue');
}
fill('red');
text('hold down arrow for yellow right for blue left for white and up for black',30,200);

}




