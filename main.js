var song="";
function setup(){
    canvas=createCanvas(600,500)
    canvas.center()
    video=createCapture(VIDEO)
    video.hide()
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
