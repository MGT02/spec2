var aliqId = 0;
const ellipseCount = 7;
var aliqArr = [];

class myBall
{
	constructor(x, y, size){
		this.x = x;
		this.y = y;
		this.size = size;
	}
	
	show(){
		stroke(random(50), random(100,255), random(62,255));
		ellipse(this.x, this.y, this.size, this.size);
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
	}
	
	show(){
		if(this.timer < ellipseCount){
			this.timer++;
			this.ellipses.push(new myBall(
				this.x, this.y, this.size * this.timer
			));
		}
		else{
			this.ellipses.splice(0, 1);
			this.timer++;
			if(this.timer == ellipseCount*2)
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