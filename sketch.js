// setup() is called once at page-load
function setup() {
    createCanvas(800,600); // make an HTML canvas element width x height pixels
}

// draw() is called 60 times per second
function draw() {
    let hr = hour();
    let min = minute();
    let sec = second();

    background(225);
    //translate(width / 2, height / 2);
    /*
    textSize(32);
    fill(180);
    text(hr, 10, 30);
    fill(100);
    text(min, 10, 60);
    fill(0);
    text(sec, 10, 90);*/

      // Map the time values to angles
    let hAngle = map(hr % 12, 0, 12, 0, 360);
    let mAngle = map(min, 0, 60, 0, 360);
    let sAngle = map(sec, 0, 60, 0, 360);

  let angles = [radians(12), radians(60), radians(60)];

  // Draw three right-angled triangles side by side, the red part as a proportion of the triangle shows the time
  for (let i = 0; i < 3; i++) {
    // Right-angled triangle with specified angles
    let angleA = radians(angles[i]);
    let angleB = radians(90 - angles[i]);
    let hypotenuse = 100;
    let xOffset = i * 200 + 100; // Separate the triangles by 200 pixels

    // Calculating coordinates of  triangle vertices
    let x1 = xOffset;
    let y1 = height / 2 + hypotenuse / 2;
    let x2 = x1 + hypotenuse * cos(angleB);
    let y2 = y1 + hypotenuse * sin(angleB);
    let x3 = x1 + hypotenuse * cos(angleA);
    let y3 = y1 - hypotenuse * sin(angleA);

    // Draw the right-angled triangle
    fill(200); // Light gray for the triangle
    triangle(x1, y1, x2, y2, x3, y3);

    // Line inside the triangle
    let lineLength = 60;
    let lineX = 0
    let lineY = 0

    // Calculate position of line inside the triangle
    if (i == 0) {
        lineX = x1 + (hypotenuse / 2) * cos(hAngle);
        lineY = y1 - (hypotenuse / 2) * sin(hAngle);
    } else if (i == 1){
        lineX = x1 + (hypotenuse / 2) * cos(mAngle);
        lineY = y1 - (hypotenuse / 2) * sin(mAngle);
    } else {
        lineX = x1 + (hypotenuse / 2) * cos(sAngle);
        lineY = y1 - (hypotenuse / 2) * sin(sAngle);
    }

    // ensure lines are inside the triangle
    //lineX = constrain(lineX, min(x1, x3), max(x1, x3));
    //lineY = constrain(lineY, min(y1, y3), max(y1, y3));

    // Draw the line
    stroke(0); // Black for the line
    line(x1, y1, lineX, lineY);

    // Color the area below the line
    beginShape();
    fill(255, 0, 0, 100); // Red with some transparency
    vertex(x1, y1);
    vertex(lineX, lineY);
    vertex(x3, y3);
    endShape(CLOSE);
  }

}