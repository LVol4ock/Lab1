/*

The Game Project

1 - Background Scenery

Use p5 drawing functions such as rect, ellipse, line, triangle and
point to draw the scenery as set out in the code comments. The items
should appear next to the text titles.

Each bit of scenery is worth two marks:

0 marks = not a reasonable attempt
1 mark = attempted but it's messy or lacks detail
2 marks = you've used several shape functions to create the scenery

I've given titles and chosen some base colours, but feel free to
imaginatively modify these and interpret the scenery titles loosely to
match your game theme.


WARNING: Do not get too carried away. If you're shape takes more than 5 lines
of code to draw then you've probably over done it.


*/

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
	//... add your code here
    
    stroke(255);
    strokeWeight(70);
    line(150, 100, 258, 100);
    circle(177, 65, 10);
    circle(220, 65, 10);


	//2. a mountain in the distance
	//... add your code here
    
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
	//... add your code here
    
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
	//NB. the canyon should go from ground-level to the bottom of the screen

	//... add your code here
    
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
	//... add your code here

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
}
