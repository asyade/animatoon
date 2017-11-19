var ctx = canvas.getContext("2d");


function shoot(cx, cy, ctx) {
	var particles = new create_particle();
	var x = 100;
	while (x > 0) {
		draw(particles, ctx);
		x -= 1;
	}
}

function create_particle()
{
	//Random position on the canvas
	this.x = Math.random()*W;
	this.y = Math.random()*H;
	
	//Lets add random velocity to each particle
	this.vx = Math.random()*20-10;
	this.vy = Math.random()*20-10;
	
	//Random colors
	var r = Math.random()*255>>0;
	var g = Math.random()*255>>0;
	var b = Math.random()*255>>0;
	this.color = "rgba("+r+", "+g+", "+b+", 0.5)";
	
	//Random size
	this.radius = Math.random()*20+20;
}

function draw(p, ctx)
{
	//Moving this BG paint code insde draw() will help remove the trail
	//of the particle
	//Lets paint the canvas black
	//But the BG paint shouldn't blend with the previous frame
	ctx.globalCompositeOperation = "source-over";
	//Lets reduce the opacity of the BG paint to give the final touch
	ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
	ctx.fillRect(0, 0, W, H);
	
	//Lets blend the particle with the BG
	ctx.globalCompositeOperation = "lighter";
	
	//Lets draw particles from the array now
		ctx.beginPath();
		
	//Time for some colors
	var gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
	gradient.addColorStop(0, "white");
	gradient.addColorStop(0.4, "white");
	gradient.addColorStop(0.4, p.color);
	gradient.addColorStop(1, "black");
		
	ctx.fillStyle = gradient;
	ctx.arc(p.x, p.y, p.radius, Math.PI*2, false);
	ctx.fill();
}
