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