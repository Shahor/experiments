$(function (){
	var xStep = 7;
	var yStep = 4;
	var canvas = document.getElementById('sandbox');
	var ctx = canvas.getContext('2d');
	var img = new Image();
	var animationTimer;
	var ballParams = {
		'x' : 0,
		'xDirection': 1,
		'y' : 0,
		'yDirection' : 1
	};

	img.onload = function() {
		animationTimer = setInterval(function () {
//			console.log("Image positions  x : " + ballParams.x + " | y : " + ballParams.y);
			ballParams.x = ballParams.xDirection > 0 ? ballParams.x + xStep : ballParams.x - xStep;
			ballParams.y = ballParams.yDirection > 0 ? ballParams.y + yStep : ballParams.y - yStep;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(img, ballParams.x, ballParams.y);
			
			if (ballParams.x + 80 >= canvas.width || ballParams.x === 0)
				ballParams.xDirection = -ballParams.xDirection;
			if (ballParams.y + 80 >= canvas.height || ballParams.y === 0)
				ballParams.yDirection = -ballParams.yDirection;
		}, 10);
	};
	img.src = 'soccer.jpg';
});