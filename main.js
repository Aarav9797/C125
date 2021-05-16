var song="";
var left_wrist_x=0;
var left_wrist_y=0;
var right_wrist_x=0;
var right_wrist_y=0;
function setup(){
    canvas=createCanvas(600,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
    console.log(ml5.version)
 poseNet=ml5.poseNet(video,modelloaded)
 poseNet.on("pose",gotposes);
}
function draw(){
    image(video,0,0,600,500)
}
function preload(){
    song=loadSound("music.mp3");
}
function songplay(){
    song.rate(1)
    song.setVolume(0.2)
    song.play()
}
function songstop(){
    song.stop()
}
function modelloaded(){
    console.log("your model has been loaded")
}
function gotposes(results){
if(results.length>0){
    console.log(results);
   right_wrist_x=results[0].pose.rightWrist.x;
   right_wrist_y=results[0].pose.rightWrist.y;
   left_wrist_x=results[0].pose.leftWrist.x;
   left_wrist_y=results[0].pose.leftWrist.y;
   console.log(right_wrist_x,right_wrist_y,left_wrist_x,left_wrist_y);
}
}