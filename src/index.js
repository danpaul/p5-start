import 'p5'

window.setup = () => {
  createCanvas(800, 800);
  stroke(255); // Set line drawing color to white
  fill(255)
  frameRate(30);
}

window.draw = () => {
  background(0, 0, 0, 1);
  ellipse(50, 50, 30, 30);
  ellipse(mouseX, mouseY, 30, 30);
}
