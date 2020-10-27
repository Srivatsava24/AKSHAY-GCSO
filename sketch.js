//Declaring the variables.
var car1,car2,car3,car4,wall;
var line1,line2,line3,line4;
var speed,weight1,weight2,weight3,weight4;
var deformation1,deformation2,deformation3,deformation4;


function setup() {
  //Creating the canvas area.
  createCanvas(1600,500);

  //Assigning speed and weight random values.
  speed = random(55,90);
  weight1 = random(400,1500);
  weight2 = random(400,1500);
  weight3 = random(400,1500);
  weight4 = random(400,1500);

  //Creating three line sprites.
  line1 = createSprite(730,90,1500,5.5);
  line2 = createSprite(730,190,1500,5.5);
  line3 = createSprite(730,290,1500,5.5);

  //Giving them white color.
  line1.shapeColor = color(255,255,255);
  line2.shapeColor = color(255,255,255);
  line3.shapeColor = color(255,255,255);

  //Creating 4 car sprites and giving them white color.
  car1 = createSprite(50,40,50,20);
  car1.shapeColor = color(255,255,255);

  car2 = createSprite(50,140,50,20);
  car2.shapeColor = color(255,255,255);

  car3 = createSprite(50,240,50,20);
  car3.shapeColor = color(255,255,255);

  car4= createSprite(50,340,50,20);
  car4.shapeColor = color(255,255,255);

  //Creating a wall sprite and giving it grey color.
  wall = createSprite(1350,200,15,400);
  wall.shapeColor = color("blue");


}

function draw() {
  //Setting background color to black.
  background(0,0,0);

  
  //Setting all the cars' velocity x same as the value of speed.
  car1.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  car4.velocityX = speed;

  //Assigning functions when any of the four cars touches the wall.
  //Setting that particular car's velocity x to 0.
  //Setting deformation1, deformation2, deformation3 & deformation4 values as 0.5*weight1*speed*speed / 22500.
  //Changing the cars' color as per the deformation's value.

  if(wall.x - car1.x < (car1.width + wall.width+70)/2) {
    car1.velocityX = 0;

    deformation1 = 0.5*weight1*speed*speed / 22500;

    if(deformation1 < 100) {
      car1.shapeColor = color(0,255,0);
    }
    if(deformation1 <180 && deformation1 >100) {
      car1.shapeColor = color(230,230,0);
    }
    if(deformation1 > 180) {
      car1.shapeColor = color(255,0,0);
    }
  }

  if(wall.x - car2.x < (car2.width + wall.width+70)/2) {
    car2.velocityX = 0;

    deformation2 = 0.5*weight2*speed*speed / 22500;

    if(deformation2 < 100) {
      car2.shapeColor = color(0,255,0);
    }
    if(deformation2 <180 && deformation2 >100) {
      car2.shapeColor = color(230,230,0);
    }
    if(deformation2 > 180) {
      car2.shapeColor = color(255,0,0);
    }
  }

  if(wall.x - car3.x < (car3.width + wall.width+70)/2) {
    car3.velocityX = 0;

    deformation3 = 0.5*weight3*speed*speed / 22500;

    if(deformation3 < 100) {
      car3.shapeColor = color(0,255,0);
    }
    if(deformation3 < 180 && deformation3 > 100) {
      car3.shapeColor = color(230,230,0);
    }
    if(deformation3 > 180) {
      car3.shapeColor = color(255,0,0);
    }
  }

  if(wall.x - car4.x < (car4.width + wall.width+70)/2) {
    //Displaying the text.
    fill("red");
    textSize(15);
    textStyle(BOLD);
    textFont("cursive");
    text("(Refresh the page to re-test)",620,380);

    


    car4.velocityX = 0;

    deformation4 = 0.5*weight4*speed*speed / 22500;

    if(deformation4 < 100) {
      car4.shapeColor = color(0,255,0);
    }
    if(deformation4 < 180 && deformation4 > 100) {
      car4.shapeColor = color(230,230,0);
    }
    if(deformation4 > 180) {
      car4.shapeColor = color(255,0,0);
    }
  }
//Displaying text as per the deformations' value.
if(deformation1 < 100) {
  fill(color(0,255,0));
  textStyle(BOLD);
  textFont("cursive");
  text("Good for the passengers.",1000,49);
}
else if(deformation1 >= 100 && deformation1 <= 180) {
  fill(color(230,230,0));
  textStyle(BOLD);
  textFont("cursive");
  text("Average.",1000,49);
}
else if(deformation1 > 180) {
  fill(color(255,0,0));
  textStyle(BOLD);
  textFont("cursive");
  text("Lethal for the passengers.",1000,49);
}

if(deformation2 < 100) {
  fill(color(0,255,0));
  textStyle(BOLD);
  textFont("cursive");
  text("Good for the passengers.",1000,149);
}
else if(deformation2 >= 100 && deformation2 <= 180) {
  fill(color(230,230,0));
  textStyle(BOLD);
  textFont("cursive");
  text("Average.",1000,149);
}
else if(deformation2 > 180) {
  fill(color(255,0,0));
  textStyle(BOLD);
  textFont("cursive");
  text("Lethal for the passengers.",1000,149);
}

if(deformation3 < 100) {
  fill(color(0,255,0));
  textStyle(BOLD);
  textFont("cursive");
  text("Good for the passengers.",1000,249);
}
else if(deformation3 >= 100 && deformation3 <= 180) {
  fill(color(230,230,0));
  textStyle(BOLD);
  textFont("cursive");
  text("Average.",1000,249);
}
else if(deformation3 > 180) {
  fill(color(255,0,0));
  textStyle(BOLD);
  textFont("cursive");
  text("Lethal for the passengers.",1000,249);
}

if(deformation4 < 100) {
  fill(color(0,255,0));
  textStyle(BOLD);
  textFont("cursive");
  text("Good for the passengers.",1000,349);
}
else if(deformation4 >= 100 && deformation4 <= 180) {
  fill(color(230,230,0));
  textStyle(BOLD);
  textFont("cursive");
  text("Average.",1000,349);
}
else if(deformation4 > 180) {
  fill(color(255,0,0));
  textStyle(BOLD);
  textFont("cursive");
  text("Lethal for the passengers.",1000,349);
}

fill("white");
textSize(20);
textStyle(BOLD);
textFont("Arial");

text("CAR 1",20,49);
text("CAR 2",20,149);
text("CAR 3",20,249);
text("CAR 4",20,349);

text("Speed: " + Math.round(speed),180,49);
text("Speed: " + Math.round(speed),180,149);
text("Speed: " + Math.round(speed),180,249);
text("Speed: " + Math.round(speed),180,349);

text("Weight: " + Math.round(weight1),400,49);
text("Weight: " + Math.round(weight2),400,149);
text("Weight: " + Math.round(weight3),400,249);
text("Weight: " + Math.round(weight4),400,349);
  
fill("aqua");
    textSize(40);
    textStyle(BOLD);
    textFont("Arial");
    text("AKSHAY'S GCSO SIMULATOR 2020",400,460);
    
  //Displaying all the sprites on the canvas.
  drawSprites();
}
