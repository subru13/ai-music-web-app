   song_1="dancemonkey.mp3";
   song_2="levitating.mp3";
   leftWristX=0;
   leftWristY=0;
   rightWristX=0;
   rightWristY=0;

   function preload()
{
    song_1=loadSound("dancemonkey.mp3");
    song_2=loadSound("levitating.mp3");
}

function setup()
{
    canvas=createCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet is Initialized!');
}

function draw(){
    image(video, 0, 0, 600, 500);

    if (leftWrist > 0.2){
    fill("#FF0000");
    stroke("#FF0000");

    if(song_1.isPlaying()=true){
       var song1_status="playing";
    }
    else{
      song1_status="stopped";     
    }
    if(song_2.isPlaying()=true){
        var song2_status="playing";
     }
     else{
       song2_status="stopped";     
     }
    }
}

function gotPoses()
{
    if(results.length>0)
    {
        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        console.log("leftWristX=" +  leftWristX + "leftWristY=" + leftWristY);

        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;
        console.log("rightWristX=" + rightWristX + "rightWristY=" + rightWristY);
    }
}