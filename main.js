function preload() {}



function setup() {

canvas = createCanvas(350,350);
canvas.center();

video = createCapture(VIDEO);
video.size(350,350);
video.hide();
poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function gotPoses(){}
function modelLoaded() {

    console.log('PoseNet is initialized');
    
    }
    



function draw() {}


function take_snapshot() {

save("myFilter.png")

}