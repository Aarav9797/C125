var song="";
var left_wrist_x=0;
var left_wrist_y=0;
var right_wrist_x=0;
var right_wrist_y=0;
var score_left_wrist=0;
var score_right_wrist=0;
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
    if(score_right_wrist>0.2){
        fill(0,128,128)
        circle(right_wrist_x,right_wrist_y,20)
        if(right_wrist_y>0 && right_wrist_y<=100){
            document.getElementById("speed2").innerHTML="0.5x"
            song.rate(0.5)
        }
        if(right_wrist_y>100 && right_wrist_y<=200){
            document.getElementById("speed2").innerHTML="1x"
            song.rate(1)
        }
        if(right_wrist_y>200 && right_wrist_y<=300){
            document.getElementById("speed2").innerHTML="1.5x"
            song.rate(1.5)
        } 
           if(right_wrist_y>300 && right_wrist_y<=400){
            document.getElementById("speed2").innerHTML="2x"
            song.rate(2)
        } 
           if(right_wrist_y>400 && right_wrist_y<=500){
            document.getElementById("speed2").innerHTML="2.5x"
            song.rate(2.5)
        }
    }
    if(score_left_wrist>0.2){
        fill(255,0,0) 
        circle(left_wrist_x,left_wrist_y,20)
        volume_value=Number(left_wrist_y);
        volume_value=floor(volume_value);
        volume_value=volume_value/500;
        document.getElementById("volume2").innerHTML=volume_value;
        song.setVolume(volume_value);
    }
}
function preload(){
    song=loadSound("music.mp3");
}
function songplay(){
    music_status = song.isPlaying();
    if(music_status==true){
      song.stop()
    }
    else{
        song.rate(1)
        song.setVolume(0.2)
        song.play()
    }
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
   score_left_wrist=results[0].pose.keypoints[9].score;
   score_right_wrist=results[0].pose.keypoints[10].score;
}
}