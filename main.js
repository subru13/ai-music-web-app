   song_1="dancemonkey.mp3";
   song_2="levitating.mp3";
   

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
}

function draw(){
    image(video, 0, 0, 600, 500);
}