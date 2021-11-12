function preload() {

}

function setup() {
canvas=createCanvas(640,480);
canvas.position(110,250);
video=createCapture(VIDEO);
video.hide();


tint_color="pink ";
}

function draw() {
image(video, 185, 93, 300, 275 );

fill("red");
stroke("red");
circle(45,45,80);
circle(595,45,80);
circle(45,430,80);
circle(595,430,80);

fill("green");
stroke("green");
rect(90,40,460,20);
rect(90,430,460,20);
rect(585,85,20,304);
rect(35,85,20,304);

}

function take_snapshot() {
save('picture.png');
}

