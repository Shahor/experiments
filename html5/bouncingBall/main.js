$(function (){
	var canvas = document.getElementById('sandbox');
	var ctx = canvas.getContext('2d');
	var img = new Image();
	var animationTimer;
	var position = {
		'x' : 0,
		'y' : 0
	};

	img.onload = function() {
		animationTimer = setInterval(function () {
			console.log("Image positions  x : " + position.x + " | y : " + position.y);
			if (position.x + 80 == canvas.width)
			{
					clearInterval(animationTimer);
					return false;
			}
			else
			{
				position.x += 5;
				position.y += 5;
				ctx.clearRect(0, 0, canvas.width, canvas.height);
				ctx.drawImage(img, position.x, position.y);
			}
			
		}, 100)

		
	};
	img.src = 'soccer.jpg';
});