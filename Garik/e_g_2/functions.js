var myInterval = null;
var isBlack = true;
function createAliq(x, y)
{
	aliqArr.push(new aliq(x, y, aliqId++));
}
function res1start(){
	speed = Math.floor(random(25, 50));
}
function res2start(){
	speed = Math.floor(random(4, 10));
}
function getTime1(){
	return Math.floor(Math.random() * 600) + 600; 
}
function getTime2(){
	return Math.floor(Math.random() * 200) + 200; 
}
function smoothlyChange()
{
	if(colors.bg == 0)
		isBlack = true;
	else
		isBlack = false;
	myInterval = setInterval(startChange, 50);
}
function startChange(){
	if(isBlack && colors.bg < 255){
		colors.bg+=4;
	}
	else if(isBlack)
	{
		isBlack = false;
		stopInterval();
	}
	if(!isBlack && colors.bg > 0)
	{
		colors.bg-=4;
	}
	else if(!isBlack)
	{
		isBlack = true;
		stopInterval();
	}
}
function stopInterval(){
	clearInterval(myInterval);
}