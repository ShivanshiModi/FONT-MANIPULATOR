function setup() {
    video= createCapture(VIDEO);
    video.size(400,400);
    video.position(10,50);

    canvas= createCapture(400,400);
    canvas.position(430,130);

    poseNet= ml5.poseNet(video,modeloaded);
    posenet.on('pose',gotPoses);
  }

  function modeloaded(){
    console.log("the model is initialized and loaded");
}

function draw(){
    background("#f542ef");
}

function gotPoses(results,error){
 if(error){
    console.error(error);
 }
 if(results.length > 0){
    console.log(results);

    console.log("rightwrist_x - "+results[0].pose.rightwrist.x+"rightwrist_y - "+results[0].pose.rightwrist.y);
    console.log("leftwrist_x - "+results[0].pose.leftwrist.x+"leftwrist_y - "+results[0].pose.leftwrist.y);
 }
}