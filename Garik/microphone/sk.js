var colors = {
	bg : 0,//background
	rmin : 0, rmax : 50,
	gmin : 100, gmax : 255,
	bmin : 62, bmax : 255
}
var fft, mic;
function setup() {
	createCanvas(windowWidth, windowHeight);
	noFill();
	stroke(255);
	//sound.loop();
	mic = new p5.AudioIn();
	mic.start();
	fft = new p5.FFT(0, 32);
	fft.setInput(mic);
}
k = 0;
var mid = 253, up = 20, rigth = 150, left = 200, down = 220;
var aliqCounter = 0;
function draw() {	
	var spectrum = fft.analyze();
	for(var i in spectrum)
	{			
		var x;
		var y;
		if(i > 22){
			if(spectrum[i] < up)
				continue;
			
			x = map(i, 23, 31, 0, width-50);
			y = height/13;
			y += noise(k+=0.01)*60;
			//x += noise(k+=0.01)*60;
		}else if(i > 12){
			if(spectrum[i] < down)
				continue;
			
			x = map(i, 13, 22, 0, width - 50);
			y = height - 100;
			//y += noise(k+=0.01)*60;
			x += noise(k+=0.01)*60;
		}else if(i > 7){
			if(spectrum[i] < left)
				continue;
			
			y = map(i, 8, 12, height/7*2, height - 100);
			x = 50;
			y += noise(k+=0.01)*60;
			//x += noise(k+=0.01)*60;
		}else if(i > 2){
			if(spectrum[i] < rigth)
				continue;
			
			y = map(i, 3, 7, height/7*2, height - 100);
			x = width - 50;
			//y += noise(k+=0.01)*60;
			x += noise(k+=0.01)*60;
		}else{
			if(spectrum[i] < mid)
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
		if(++aliqCounter > 50){
			aliqCounter = 0;
			colors = {
				bg : 0,//background
				rmin : random(50), rmax : random(50, 150),
				gmin : random(150), gmax : random(150,255),
				bmin : random(150), bmax : random(150,255)
			}
			console.log('change');
		}
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