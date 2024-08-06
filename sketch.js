function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {

  stroke ("blue");
  fill ("purple");
  
  // console.log(mouseIsPressed);

  if (mouseIsPressed)
  rect(mouseX, mouseY, 30, 45);
}
