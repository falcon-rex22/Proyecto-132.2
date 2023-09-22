object_detector = "";
img = "";
status = "";

objects = []

function preload(){
    img = loadImage("televisión.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status: detectando objetos";
}

function draw(){
    image(img, 0, 0, 640, 420);

    text("televisión", 45, 75);
    stroke("black");
    noFill();
    rect(30, 15, 500, 300);
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