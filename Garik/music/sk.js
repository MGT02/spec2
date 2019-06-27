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
k = 0;
function draw() {	

	var spectrum = fft.analyze();
	console.log(spectrum);
	for(var i in spectrum)
	{			
		var x;
		var y;
		if(i > 22){
			if(spectrum[i] < 20)
				continue;
			
			x = map(i, 23, 31, 0, width-50);
			y = height/13;
			y += noise(k+=0.01)*60;
			//x += noise(k+=0.01)*60;
		}else if(i > 12){
			if(spectrum[i] < 200)
				continue;
			
			x = map(i, 13, 22, 0, width - 50);
			y = height - 100;
			//y += noise(k+=0.01)*60;
			x += noise(k+=0.01)*60;
		}else if(i > 7){
			if(spectrum[i] < 200)
				continue;
			
			y = map(i, 8, 12, height/7*2, height - 100);
			x = 50;
			y += noise(k+=0.01)*60;
			//x += noise(k+=0.01)*60;
		}else if(i > 2){
			if(spectrum[i] < 220)
				continue;
			
			y = map(i, 3, 7, height/7*2, height - 100);
			x = width - 50;
			//y += noise(k+=0.01)*60;
			x += noise(k+=0.01)*60;
		}else{
			if(spectrum[i] < 253)
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
	
	/*if(frameCount % 2 == 0){
		//return;
	}	*/	

	background(colors.bg);	

	for(var i in aliqArr)
	{
		aliqArr[i].show();
	}
}
var stop = false;
function mousePressed(){
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