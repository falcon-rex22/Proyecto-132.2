object_detector = "";
img = "";
status = "";

objects = []

function preload(){
    img = loadImage("mesa_cristal.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status: detectando objetos";
}

function draw(){
    image(img, 0, 0, 640, 420);

    text("mesa", 55, 75);
    stroke("ligthblue");
    noFill();
    rect(50, 60, 530, 330);
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