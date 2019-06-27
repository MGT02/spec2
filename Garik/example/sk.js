var pickFrames;
var x = 0;

function setup() {
    createCanvas(windowWidth, windowHeight-100);
    background(0);

    pickFrames = createP('pickFrames');
    button = createButton('Play');
    button.mousePressed(tgPlay);
}

function draw() {
    background(20);
    fill(255, 30);
    stroke(255, 80);
    line(x, 0, x, height)
    x +=3;
    if (x > width) {
        x = 0;
    }
}
var isPlaying = false;
var interval = null;
function tgPlay() {
    if(isPlaying){
       interval = setInterval(makeNote,500);
       isPlaying = false;
    }else{
        clearInterval(interval);
        isPlaying = true;
    }
}

function makeNote() {
    pickFrames.html(frameCount);
}