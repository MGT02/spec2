var colors = {
	bg : 0,//background
	rmin : 0, rmax : 50,
	gmin : 100, gmax : 255,
	bmin : 62, bmax : 255
}

function preload(){
	sound = loadSound('../audio/music.mp3');
}
var fft;
function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	stroke(255);
	sound.loop();
	fft = new p5.FFT(0, 32);
}

function draw() {	

	var spectrum = fft.analyze();
	for(var i in spectrum)
	{	
		if(spectrum[i] < 180)
			continue;
		
		var x;
		var y;
		if(i > 22){
			x = map(i, 23, 31, 0, width-50);
			y = height/7;
		}else if(i > 12){
			x = map(i, 13, 22, 0, width - 50);
			y = height - 100;
		}else if(i > 7){
			y = map(i, 8, 12, height/7*2, height - 100);
			x = 50;
		}else if(i > 2){
			y = map(i, 3, 7, height/7*2, height - 100);
			x = width - 50;
		}else{
			//x = map(i, 0, 2, width/3 + 300, 2*width/3);
			x = map(i, 0, 2, width/3, 2*width/3);
			y = height/2;
			console.log(spectrum[i]);
			if(spectrum[i] < 250)
			continue;
		}
		createAliq(x, y);
	}
	
	background(colors.bg);	

	for(var i in aliqArr)
	{
		aliqArr[i].show();
	}
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