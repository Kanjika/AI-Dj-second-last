song1 = "";
song2 = "";
leftWristX = "";
leftWristY = "";
rightWristX = "";
rightWristY = "";


function preload()
{
    song1 = loadSound("music.mp3");
    song2 = loadSound("music2.mp3");
}


function setup(){
    canvas = createCanvas(600, 500);


    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('poses', gotPoses);
}

function gotPoses()
{
    if (results.length > 0)
    {
        console.log(results);
        leftWristX = results[0].poses.leftWrist.X;
        leftWristY = results[0].poses.leftWrist.y;
        console.log("leftWristX" + leftWristY + "leftWristY" + leftWristY)

        rightWristX = results[0].poses.rightWrist.X;
        rightWristY = results[0].poses.righttWrist.y;
    }
}

function draw()
{
    image(video, 0, 0, 600, 500);
}


function play()
{
    song1.play();
    song.play();
    song.setVolume(1);
    song.rate(1);
}


function stop()
{
    song1.stop();
}



function play2()
{
    song2.play();
    song.play();
    song.setVolume(1);
    song.rate(1);
}


function stop2()
{
    song2.stop();
}