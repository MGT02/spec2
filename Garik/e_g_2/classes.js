var aliqId = 0;
const ellipseCount = 7;
var aliqArr = [];

class myBall
{
	constructor(x, y, size){
		this.x = x;
		this.y = y;
		this.size = size;
		this.alive = true;
		this.alpha = 250;
	}
	
	show(){
		if(this.alpha < 0)
			return;

		if(this.alive){
			if(isBlack)
				stroke(random(colors.rmin, colors.rmax), random(colors.gmin, colors.gmax), random(colors.bmin, colors.bmax));
			else
				stroke(random(30, 60));
		}
		else{
			if(isBlack)
				stroke(random(colors.rmin, colors.rmax), random(colors.gmin, colors.gmax), random(colors.bmin, colors.bmax), this.alpha);
			else
				stroke(random(30, 60), this.alpha);
			this.alpha -= 5;
		}
		ellipse(this.x, this.y, this.size, this.size);
	}

	die(){
		this.alive = false;
	}
}

class aliq
{
	constructor(x, y, id){
		this.x = x;
		this.y = y;
		this.id = id;
		this.ellipses = [];
		this.timer = 0;
		this.size = (width/2 - Math.abs(x - width/2) + height/2
			- Math.abs(y - height/2)) / 10;	
		//0 - 200	
		this.j = 0;
	}
	
	show(){
		if (this.timer == 0) {
			var delta = this.size / 10000 + 0.001;
			//env.setADSR(random(0.001, 0.008), random(0.001, 0.008), random(0.001, 0.008), random(0.01, 0.03));
			env.setADSR(delta/10, delta, delta, delta*10);
		}
		if(this.timer < ellipseCount){
			this.timer++;
			this.ellipses.push(new myBall(
				this.x, this.y, this.size * this.timer
			));
		}
		else{
			//this.ellipses.splice(0, 1);//die
			if(this.j < ellipseCount)
				this.ellipses[this.j++].die();
			this.timer++;
			/*if(this.timer == ellipseCount*2){
				//this.die();
			}*/
			if(this.ellipses[ellipseCount-1].alpha <= 0)
				this.die();
		}
		for(var i in this.ellipses)
			this.ellipses[i].show();
	}
	
	die()
	{
		for(var i in aliqArr){
			if(aliqArr[i].id == this.id){
				aliqArr.splice(i, 1);
				break;
				console.log(aliqArr);
			}
		}
	}
	
}