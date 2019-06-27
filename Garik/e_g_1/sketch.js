var rateNow = 0;
var rndNoise = 0;

var env, wave;
function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	stroke(255);
	
	env = new p5.Env();
	env.setADSR(0.001, 0.001, 0.001, 0.3);
	env.setRange(0.8, 0);
	
	wave = new p5.Oscillator();
	
	wave.setType('sine');
	wave.start();
	wave.freq(400);
	wave.amp(env);

}

function draw() {
	if(frameCount % 4 == 0)
		mD();
	if(frameCount % 3 < 2)
		return;

	background(0);	
	
	for(var i in aliqArr)
	{
		aliqArr[i].show();
	}
}
function mD()
{
	env.setADSR(random(0.001, 0.008), random(0.001, 0.008), random(0.001, 0.008), random(0.01, 0.03));
	createAliq(noise(rndNoise) * width, noise(rndNoise+=0.1) * height);
	env.play();
}
// function mouseDragged()
// {
// 	env.setADSR(random(0.001, 0.008), random(0.001, 0.008), random(0.001, 0.008), random(0.01, 0.03));
// 	createAliq(noise(rndNoise) * width, noise(rndNoise+=0.1) * height);
// 	env.play();
// }
// function mD()
// {
// 	env.setADSR(random(0.001, 0.008), random(0.001, 0.008), random(0.001, 0.008), random(0.01, 0.03));
// 	createAliq(noise(rndNoise) * width, noise(rndNoise+=0.1) * height);
// 	env.play();
// }