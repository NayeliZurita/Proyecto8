var img;

const init = function(pro){
    with (pro) {
        size(400,400);
        fill(220, 0, 55);
        frameRate(600);
    }
};

function drawAfter(pro,callback){
    img = pro.loadImage("grass.png");
     setInterval(() => {
     	for (var p=0;p<500;p+=40)
        callback(img, p ,360, 40, 40)}
        ,1000/60);}

var sketchProc = function(processingInstance){
	 with(processingInstance){
	 	init(processingInstance)
        drawAfter(processingInstance, image);
        background(219, 255, 255);
		fill(224, 212, 76);
		triangle(200, 28, 350, 150, 50, 150);
		for(var x=60;x<332;x+=13){ 
		   fill(84, 72, 56);
		   for(var y=150;y<400;y+=15){
		    rect(x,y,15,15);  
		   }
		}
		fill(64, 133, 135);
		rect(178, 286, 51, 74);
		noStroke();
		for(var x=60;x<311;x+=50){ 
		   fill(99, 149, 235);
		    rect(x,183,25,25); 
		}
	 }
};
var canvas = document.getElementById("mycanvas");
var processing = new Processing(canvas, sketchProc);