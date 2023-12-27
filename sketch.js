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

    /*
    // Draw the hour circle
    push();
    rotate(radians(hAngle));
    fill(255, 0, 0); // Red
    ellipse(50, 0, 90, 90);
    pop();

    // Draw the minute circle
    push();
    rotate(radians(mAngle));
    fill(0, 255, 0); // Green
    ellipse(100, 0, 60, 60);
    pop();

    // Draw the second circle
    push();
    rotate(radians(sAngle));
    fill(0, 0, 255); // Blue
    ellipse(150, 0, 30, 30);
    pop();
    */

    // Map the hour to an angle
    //let angle = map(h % 12, 0, 12, 0, 360);
/*
    hAngle2 = 12
    let x_1 = 0;
    let y_1 = 0;
    let x_2 = 100 * cos(radians(hAngle));
    let y_2 = 100 * sin(radians(hAngle));
    let x_3 = 100 * cos(radians(hAngle2 + HALF_PI));
    let y_3 = 100 * sin(radians(hAngle2 + HALF_PI));

   // scale(2.0,5.0)
    //scale(1,-1)
    fill(0,255,0) 
    noStroke();
    triangle(x_1,y_1,x_2,y_2,x_3,y_3)


  // Calculate the coordinates of the triangle vertices
    let x1 = 0;
    let y1 = 0;
    let x2 = 100 * cos(radians(hAngle));
    let y2 = 100 * sin(radians(hAngle));
    let x3 = 100 * cos(radians(hAngle + HALF_PI));
    let y3 = 100 * sin(radians(hAngle + HALF_PI));
*/
  // Draw the clock face
    //fill(255);
    //ellipse(0, 0, 200, 200);

  // Draw the hour hand (right-angled triangle)
  /*  
  fill(0, 0, 255); // Blue
    beginShape();
    vertex(x1, y1);
    vertex(x2, y2);
    vertex(x3, y3);
    endShape(CLOSE);
*//*
    scale(2.0,5.0)
    scale(1,-1)
    fill(0,0,255) 
    noStroke();
    triangle(x1,y1,x2,y2,x3,y3)
*/
/*
    // Right-angled triangle with specified angles
  let angleA = radians(60);
  let angleB = radians(90 - 60); // Calculate the second angle to ensure it's a right-angled triangle
  let hypotenuse = 150;

  // Calculate coordinates of the triangle vertices
  let x1 = 250;
  let y1 = hypotenuse / 2;
  let x2 = x1 + hypotenuse * cos(angleB);
  let y2 = y1 + hypotenuse * sin(angleB);
  let x3 = x1 + hypotenuse * cos(angleA);
  let y3 = y1 - hypotenuse * sin(angleA);

  // Draw the right-angled triangle
  fill(200); // Light gray for the triangle
  //translate(100,100)
  triangle(x1, y1, x2, y2, x3, y3);

  // Line inside the triangle
  let lineLength = 120;
  let x4 = x1 + (hypotenuse / 2) * cos(sAngle);
  let y4 = y1 - (hypotenuse / 2) * sin(sAngle);

  stroke(0); // Black for the line
  line(x1, y1, x4, y4);

  // Color the area below the line
  beginShape();
  fill(255, 0, 0, 100); // Red with some transparency
  vertex(x1, y1);
  vertex(x4, y4);
  vertex(x3, y3);
  endShape(CLOSE);


   // MINUTES
  // Right-angled triangle with specified angles
  let MangleA = radians(60);
  let MangleB = radians(90 - 60); // Calculate the second angle to ensure it's a right-angled triangle
  let Mhypotenuse = 150;

  // Calculate coordinates of the triangle vertices
  let m_x1 = 0;
  let m_y1 = Mhypotenuse / 2;
  let m_x2 = x1 + Mhypotenuse * cos(MangleB);
  let m_y2 = y1 + Mhypotenuse * sin(MangleB);
  let m_x3 = x1 + Mhypotenuse * cos(MangleA);
  let m_y3 = y1 - Mhypotenuse * sin(MangleA);

  // Draw the right-angled triangle
  fill(200); // Light gray for the triangle
  triangle(m_x1, m_y1, m_x2, m_y2, m_x3, m_y3);
  

  // Line inside the triangle
  let MlineLength = 120;
  let m_x4 = x1 + MlineLength * cos(mAngle);
  let m_y4 = y1 - MlineLength * sin(mAngle);

  stroke(0); // Black for the line
  line(m_x1, m_y1, m_x4, m_y4);
  

  // Color the area below the line
  beginShape();
  fill(255, 0, 0, 100); // Red with some transparency
  vertex(m_x1, m_y1);
  vertex(m_x4, m_y4);
  vertex(m_x3, m_y3);
  endShape(CLOSE);
  */ 

  let angles = [radians(12), radians(60), radians(60)];

  // Draw three right-angled triangles side by side
  for (let i = 0; i < 3; i++) {
    // Right-angled triangle with specified angles
    let angleA = radians(angles[i]);
    let angleB = radians(90 - angles[i]);
    let hypotenuse = 100;
    let xOffset = i * 200 + 100; // Separate the triangles by 200 pixels

    // Calculate coordinates of the triangle vertices
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

    // Calculate the position of the line inside the triangle
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