let capture;
let posenet=null;
let noseX,noseY;
let reyeX,reyeY;
let leyeX,leyeY;
let singlePose;

function setup(){
    createCanvas(800,500);
   capture=createCapture(VIDEO);
   capture.hide();

   posenet= ml5.poseNet(capture,modelLoaded);
   posenet.on('pose',receivedPoses);
}
function receivedPoses(poses){
    console.log(poses);
    if(poses.length>0){
        singlePose=poses[0].pose;
        noseX=singlePose.nose.x;
        noseY=singlePose.nose.y;

        reyeX=singlePose.rightEye.x;
        reyeY=singlePose.rightEye.y;

        leyeX=singlePose.leftEye.x;
        leyeY=singlePose.leftEye.y;
    }
    console.log(noseX+" "+noseY);
}

function modelLoaded(){
    console.log('Model has loaded');
}


function draw(){
    background(200);

    image(capture,0,0,800,600);
    fill(255,0,0);
    ellipse(reyeX,reyeY,30,30);
    ellipse(leyeX,leyeY,30,30);
    
}