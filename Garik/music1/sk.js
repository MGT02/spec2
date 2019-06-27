var colors = {
	bg : 0,//background
	rmin : 0, rmax : 50,
	gmin : 100, gmax : 255,
	bmin : 62, bmax : 255
}

function preload(){
	sound = loadSound('../audio/music1.mp3');
}
var fft;
function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	stroke(255);
	sound.loop();
	fft = new p5.FFT(0, 32);
}
k = 0;
var spectrum;
var delta = 0;
var delta1 = 0;
var delta2 = 0;
var delta3 = 0;
var delta4 = 0;
function draw() {	

	spectrum = fft.analyze();
	for(var i in spectrum)
	{			
		var x;
		var y;
		if(i > 22){
			if(spectrum[i] < 3 + delta)
				continue;
			
			x = map(i, 23, 31, 0, width-50);
			y = height/13;
			y += noise(k+=0.01)*60;
			//x += noise(k+=0.01)*60;
		}else if(i > 12){
			if(spectrum[i] < 200 + delta1)
				continue;
			
			x = map(i, 13, 22, 0, width - 50);
			y = height - 100;
			//y += noise(k+=0.01)*60;
			x += noise(k+=0.01)*60;
		}else if(i > 7){
			if(spectrum[i] < 200 + delta2)
				continue;
			
			y = map(i, 8, 12, height/7*2, height - 100);
			x = 50;
			y += noise(k+=0.01)*60;
			//x += noise(k+=0.01)*60;
		}else if(i > 2){
			if(spectrum[i] < 220 + delta3)
				continue;
			
			y = map(i, 3, 7, height/7*2, height - 100);
			x = width - 50;
			//y += noise(k+=0.01)*60;
			x += noise(k+=0.01)*60;
		}else{
			if(spectrum[i] < 253 + delta4)
			continue;			
			//x = map(i, 0, 2, width/3 + 300, 2*width/3);
			/*if(i == 1){
				x = map(2, 0, 2, width/3, 2*width/3);
			}else if(i == 2){
				x = map(1, 0, 2, width/3, 2*width/3);
			}else{
				x = map(0, 0, 2, width/3, 2*width/3);
			}*/
			x = map(i, 0, 2, width/3, 2*width/3);
			x += noise(k+=0.01)*60;
			y = height/2;
		}
		createAliq(x, y);
	}
	
	if(frameCount >= 6000 && delta1 == 0){
		delta1 += 10;
		delta2 += 30;
		delta3 += 5;
		delta4++;
		
		colors = {
			bg : 0,//background
			rmin : 60, rmax : 180,
			gmin : 0, gmax : 40,
			bmin : 62, bmax : 255
		}
	}else if(frameCount >= 18500 && delta1 != -5){
		delta1 = -5;
		delta2 -= 20;
		delta3 -= 3;
		
		colors = {
			bg : 0,//background
			rmin : 30, rmax : 150,
			gmin : 90, gmax : 240,
			bmin : 0, bmax : 80
		}
	}

	background(colors.bg);	

	for(var i in aliqArr)
	{
		aliqArr[i].show();
	}
}
var stop = false;
function _mousePressed(){
	if(!stop){
		sound.pause();
		stop = true;
	}
	else
	{
		stop = false;
		sound.loop();
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