let video;
let label = 'waiting.....................................';
let classifier;

function preload(){
  classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-rG28WgeD/model.json");
}

function setup() {
  createCanvas(1600,780);
  video = createCapture(VIDEO);
  video.hide();
  classifyVideo();
}

function classifyVideo() {
  classifier.classify(video, gotResults);
}

function draw() {
  background(0);
  image(video, 500,150);
  textSize(32);
  textAlign(CENTER, CENTER);
  fill(255);
  text(label, width / 2, height - 16);
}

function gotResults(error,results) {
  if (error) {
    console.error(error);
    return;
  }

  label = results[0].label;
  classifyVideo();
  
}

