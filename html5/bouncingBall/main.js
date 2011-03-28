window.onload = function () {
	var xStep = 7;
	var yStep = 4;
	var canvas = document.getElementById('sandbox');
	var ctx = canvas.getContext('2d');
	var img = new Image();
	var ballParams = {
		'x' : 0,
		'xDirection': 1,
		'y' : 0,
		'yDirection' : 1
	};

	img.onload = function() {
		setInterval(function () {
			ballParams.x = ballParams.xDirection > 0 ? ballParams.x + xStep : ballParams.x - xStep;
			ballParams.y = ballParams.yDirection > 0 ? ballParams.y + yStep : ballParams.y - yStep;
			
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(img, ballParams.x, ballParams.y);
			
			if (ballParams.x + img.width >= canvas.width || ballParams.x === 0)
				ballParams.xDirection = -ballParams.xDirection;
			if (ballParams.y + img.height >= canvas.height || ballParams.y === 0)
				ballParams.yDirection = -ballParams.yDirection;
		}, 20);
	};
	img.src = 'soccer.jpg';
};