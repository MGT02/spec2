const myRate = 2;
var rateNow = 0;

var env, wave;
function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	stroke(255);
	
	env = new p5.Env();
	env.setADSR(0.05, 0.2, 0.3, 1);
	env.setRange(0.8, 0);
	
	wave = new p5.Oscillator();
	
	wave.setType('sine');
	
	wave.freq(400);
	wave.amp(1,1);
	wave.start();
}

function draw() {
	if(rateNow++ != myRate)
		return;
	rateNow = 0;
	
	background(0);	
	for(var i in aliqArr)
	{
		aliqArr[i].show();
	}
}

function mousePressed()
{
	createAliq(mouseX, mouseY);
	env.play();
}