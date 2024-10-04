let speed = 0;
let g = 0.5;
let speedY = 0;
let angle = 0;
let char = 
    {
    posX: 250,
    posY: 410,
    speed: 0
    }
let acceleration = 0;

function setup()
{
	createCanvas(1024, 576);

}

function draw()
{
	background(100, 155, 255); //fill the sky blue

	noStroke();
	fill(0,155,0);
	rect(0, 432, 1024, 144); //draw some green ground

	//1. a cloud in the sky
    
    stroke(255);
    strokeWeight(70);
    line(150, 100, 258, 100);
    circle(177, 65, 10);
    circle(220, 65, 10);

	//2. a mountain in the distance
    
    stroke(0);
    strokeWeight(0.3);
    fill(128);
    triangle(490, 432, 600, 150,700, 432);
    triangle(410, 432, 510, 325,575, 432);
    triangle(600, 432, 720, 270,800, 432);
    
    fill(255);
    beginShape();
        vertex(568, 230);
        vertex(600, 150);
        vertex(640, 260);
        vertex(610, 200);
    endShape();
    
    triangle(700, 296, 720, 270, 740, 310);

	//3. a tree
    
    fill('#5C2C06');
    rect(850, 432, 20, -80);
    fill('#386257')
    circle(840, 350, 60);
    circle(875, 350, 60);
    circle(850, 320, 60);
    circle(870, 320, 60);
    noStroke();
    beginShape();
        vertex(820, 328);
        vertex(840, 293);
        vertex(870, 291);
        vertex(900, 334);
        vertex(870, 377);
        vertex(840, 370);
        vertex(820, 328);
    endShape();
    
    stroke(0);
    fill('#B90000');
    circle(875, 350, 10);
    circle(868, 310, 10);
    circle(850, 330, 10);
    circle(830, 360, 10);

	//4. a canyon
    
    fill('#5C2C06');
    beginShape();
        vertex(80, 432);
        vertex(130, 432);
        vertex(120, 500);
        vertex(135, 530);
        vertex(120, 600);
        vertex(90, 530);
        vertex(80, 432);
    endShape();
    
    strokeWeight(2);
    fill('#4A1C04');
    beginShape();
        vertex(100, 432);
        vertex(130, 432);
        vertex(120, 500);
        vertex(135, 530);
        vertex(120, 600);
        vertex(120, 530);
        vertex(105, 500);
        vertex(100, 432);
    endShape();

	//5. a collectable token - eg. a jewel, fruit, coins

	stroke(0);
    strokeWeight(0.5);
    fill('#665600');
    ellipse(420, 432, 28, 30);
    ellipse(422, 432, 26, 30);
    fill('#e6c200');
    ellipse(422, 432, 25, 29);
    fill('#926500');
    ellipse(422, 432, 17, 21);
    fill('black');
    stroke("255")
    textSize(20);
    text("$", 416.5, 439);

    //6. logic of rotating Red Ball

    frameRate(60);
    let slowmo = 2000;
    let r = sqrt(char.posY**2 + char.posX **2);
    let newX = 0 + r * cos(angle-asin(char.posY/r));
    let newY = 20 - r * sin(angle-acos(char.posX/r));
    rotate(angle);
    angle = angle + speed / slowmo * 2 * PI;

    //7. Red Ball

    stroke('#44090a');
    strokeWeight(2);
    fill('#fc4b4c');
    circle(newX, newY - 20, 60);
    arc(newX + 25, newY - 22, 6, 8, PI * 4 / 10, PI * 14 / 10, OPEN);
    fill('white');
    arc(newX - 10, newY - 25, 12, 17, -PI / 10, PI * 12 / 10, CHORD);
    arc(newX + 10, newY - 25, 12, 17, -2 * PI / 10, PI * 9 / 10, CHORD);
    stroke('black');
    arc(newX + 10, newY - 25, 2, 4, -2 * PI / 10, PI * 9 / 10, CHORD);
    arc(newX - 10, newY - 25, 2, 4, -PI / 10, PI * 12 / 10, CHORD);
    noFill();
    stroke('#44090a');
    arc(newX + 4, newY - 25, 38, 48, PI * 1 / 10, PI * 16 / 28);

    //8. Walls of the level

    if (char.posX < 20) {
        char.posX = 20;
        speed = 0;
    } else if (char.posX > 1024 - 20) {
        char.posX = 1024 - 20;
        speed = 0;
    }

    //9. logic of smooth moving with acceleration

    char.posX = char.posX + speed / 10;
    if ((key == 'a' || key == 'A') && speed > -80 && keyIsPressed == true) {
        if (char.posY == 410) speed = speed - acceleration;
        acceleration = acceleration + 0.1;
    } else if ((key == 'd' || key == 'D') && speed < 80 && keyIsPressed == true) {
        speed = speed + acceleration;
        acceleration = acceleration + 0.1;
    } else {
        acceleration = 0;
        if (Math.abs(speed) < 1 && char.posY == 410) {
        speed = speed * 0.2;
        }
        if (Math.abs(speed) < 0.001 && char.posY == 410) {
        speed = 0;
        } else if (speed < 0 && char.posY == 410) {
                speed = speed + 2;
            } else if (char.posY == 410) {
                speed = speed - 2;
            }
    }

    //10. jumping with gravitation

    if (key == ' ' && char.posY == 410 && keyIsPressed == true) {
        speedY = 10;
        char.posY = char.posY - speedY;

    } else {

    }
    if (char.posY < 410) {
        speedY = speedY - g;
        char.posY = char.posY - speedY;
    }
    if (char.posY > 411) {
        char.posY = 410;
    }

}
