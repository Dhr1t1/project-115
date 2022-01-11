lipsX=0;
lipsY=0;

function preload(){

}

function setup(){
    canvas=createCanvas(300,300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw(){
    image(video,0,0,300,300);
}

function take_snap(){
    save('LipstickPicture.png');
}

function modelLoaded(){
    console.log('PoseNet is loaded');
}

function gotPoses(results){
    if(results.length>0){
        console.log(results);
        lipsX=results[0].pose.noseX;
        lipsY=results[0].pose.noseY;
    }
}