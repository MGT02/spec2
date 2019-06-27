var rateNow = 0;
var rndNoise = 0;
var speed = Math.floor(Math.random() * 25) + 25; 
var res1 = true, res2 = false;
var time = 0, time1 = getTime1(), time2 = getTime2();
var colors = {
	bg : 0,//background
	rmin : 0, rmax : 50,
	gmin : 100, gmax : 255,
	bmin : 62, bmax : 255
}

var env, wave;
function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	stroke(255);
	
	env = new p5.Env();
	//env.setADSR(0.001, 0.001, 0.001, 0.3);
	env.setRange(0.8, 0);
	
	wave = new p5.Oscillator();
	
	wave.setType('sine');
	wave.start();
	wave.freq(200);
	wave.amp(env);

}

function draw() {
	my_timer();

	if(frameCount % speed == 0)
		api();

	if(frameCount % 3 < 2)
		return;

	
	if(res2)
	{
		background(colors.bg);	
		//background(random(100, 150), random(160, 200), random(100, 150));
	}else{
		background(colors.bg);	
	}

	for(var i in aliqArr)
	{
		aliqArr[i].show();
	}
}
function my_timer()
{
	if(res1 && time == time1){
		res1 = false;
		res2 = true;
		time1 = getTime1();
		time = 0;
		res2start();
	}
	else if(res2 && time == time2){
		res2 = false;
		res1 = true;
		time2 = getTime2();
		time = 0;
		res1start();
		smoothlyChange();
	}

	time++;
}
function api()
{
	createAliq(noise(rndNoise) * width, noise(rndNoise+=0.1) * height);
	env.play();
}
// function mouseDragged()
// {
// 	//env.setADSR(random(0.001, 0.008), random(0.001, 0.008), random(0.001, 0.008), random(0.01, 0.03));
// 	createAliq(mouseX, mouseY);
// 	env.play();
// }
// function mD()
// {
// 	env.setADSR(random(0.001, 0.008), random(0.001, 0.008), random(0.001, 0.008), random(0.01, 0.03));
// 	createAliq(noise(rndNoise) * width, noise(rndNoise+=0.1) * height);
// 	env.play();
// }