song = "";

function preload() {
 sound1 = loadSound("Empire.mp3");
}

rightwristx = 0;
rightwristy = 0;

leftwristx = 0;
leftwristy = 0;

function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    Video = createCapture(VIDEO);
    Video.hide();

    poseNet = ml5.poseNet(Video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("model has loaded");
}

function gotPoses(results) {

        leftwristx = results[0].pose.leftWrist.x;
        leftwristy = results[0].pose.leftWrist.y;
        console.log("left wrist x=" + leftwristx + ", left wrist y=" + leftwristy);
        
        rightwristx = results[0].pose.rightWrist.x;
        rightwristy = results[0].pose.rightWrist.y;
        console.log(" right wrist x=" + rightwristx + ",  right wrist y=" + rightwristy);
    }

function draw() 
{
    image(Video, 0, 0, 600, 500);
}

function play()
{
    sound1.play();
    sound1.setVolume(0.1);
    sound1.rate(1);
    
}

function stop()
{
    sound1.stop();
    sound2.stop();
}
