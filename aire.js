object_detector = "";
img = "";
status = "";

objects = []

function preload(){
    img = loadImage("aire_acondicionado.jpg");
}

function setup(){
    canvas = createCanvas(640, 420);
    canvas.center();
    object_detector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "status: detectando objetos";
}

function draw(){
    image(img, 0, 0, 640, 420);

    text("aire", 45, 75);
    stroke("darkgreen");
    noFill();
    rect(35, 35, 490, 380);
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