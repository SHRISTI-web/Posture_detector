let capture;

function setup(){
    createCanvas(800,500);
   capture=createCapture(VIDEO);
   capture.hide();
}

function draw(){
    background(200);

    image(capture,0,0,800,600);
    
}