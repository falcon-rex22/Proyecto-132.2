object_detector = "";
img = "";
status = "";

objects = []

function preload(){
    img = loadImage("cama.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status: detectando objetos";
}

function draw(){
    image(img, 0, 0, 640, 420);

    text("cama", 80, 75);
    stroke("grey");
    noFill();
    rect(120, 60, 430, 310);
}

function modelLoaded(){
    console.log("modelo cargado");
    status = true;

    object_detector.detect(img, gotResults);
}

function gotResults(results, error){
    if(error){
        console.error(error);
    }

    else{
        console.log(results);
    }
}