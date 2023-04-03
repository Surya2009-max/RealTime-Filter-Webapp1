nose_x = 0
nose_y = 0

function preload() {

}

function setup() {
    canvas = createCanvas(400, 300);
    canvas.position(550, 250);
    video = createCapture(VIDEO);
    video.hide()

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function modelLoaded() {
    console.log("Model Loaded");
}

function draw() {
    image(video, 0, 0, 400, 400);



    function gotPoses(results) {
        if (results.length > 0) {
            console.log(results);
            console.log("x cordinate of a moustache" + results[0].pose.nose.x);
            console.log("y cordinate of a muostache" + results[0].pose.nose.y);
        }
    }


    save('myFilter.png');
