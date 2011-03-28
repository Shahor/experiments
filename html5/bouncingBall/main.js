window.onload = function () {
	var canvas = document.getElementById('sandbox');
	var ctx = canvas.getContext('2d');
	var img = new Image();
	var appParams = {
		'flatCoef' : 8,
		'xStep' : 7,
		'yStep' : 4
	};
	var ballParams = {
		'x' : 0,
		'y' : 0,
		'xDirection': 1,
		'yDirection' : 1,
		'flatEffect' : {
			'y' : 0,
			'x' : 0
			}
	};

	img.onload = function() {
		setInterval(function () {
			if (ballParams.flatEffect.x > 0)
				ballParams.flatEffect.x -= appParams.flatCoef / 4;
			if (ballParams.flatEffect.y > 0)
				ballParams.flatEffect.y -= appParams.flatCoef / 4;
			
			ballParams.x = ballParams.xDirection > 0 ? ballParams.x + appParams.xStep : ballParams.x - appParams.xStep;
			ballParams.y = ballParams.yDirection > 0 ? ballParams.y + appParams.yStep : ballParams.y - appParams.yStep;
			
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			ctx.drawImage(img, ballParams.x, ballParams.y, img.width - ballParams.flatEffect.x, img.height - ballParams.flatEffect.y);
			
			if (ballParams.x + img.width >= canvas.width || ballParams.x === 0)
			{
				if (ballParams.flatEffect.x == 0) ballParams.flatEffect.x = 3 * appParams.flatCoef;
				ballParams.xDirection = -ballParams.xDirection;
			}
			if (ballParams.y + img.height >= canvas.height || ballParams.y === 0)
			{
				if (ballParams.flatEffect.y == 0) ballParams.flatEffect.y = 3 * appParams.flatCoef;
				ballParams.yDirection = -ballParams.yDirection;
			}
		}, 20);
	};
	img.src = 'soccer.jpg';
};