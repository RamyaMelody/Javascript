var div1 = document.createElement("div");
div1.id='div1';
document.body.appendChild(div1);

var div2 = document.createElement("div");
div2.id='div2';
document.body.appendChild(div2);

var img1 = document.createElement("img");
img1.src="img1.jpg";
img1.id="img1";

img1.style.width='40%';
div1.align="center"; //when you want align the image to centre - *align it's div element to centre*...
div1.appendChild(img1);


var img2 = document.createElement("img");
img2.src="img2.jpg";
img2.id="img2";

img2.style.width="20%";
div2.appendChild(img2);
div2.align="center";



var img3 = document.createElement("img");
img3.src="img3.jpg";
img3.id="img3";

img3.style.width="20%";
div2.appendChild(img3);
div2.align="center";


//imgs=["pic2.jpg","pic3.jpg","pic4.jpg"]
var img4 = document.createElement("img");
img4.src="img4.jpg";
img4.id="img4";

img4.style.width="20%";
div2.appendChild(img4);
div2.align="center";

document.getElementById('img2').onclick=changeimg2;//before this was img2-same as the div element-so** give different names to functions ands elements**
document.getElementById('img3').onclick=changeimg3;
document.getElementById('img4').onclick=changeimg4;

function changeimg2(){
		document.getElementById('img1').src="img2.jpg";
		
	}
function changeimg3(){
		document.getElementById('img1').src="img3.jpg";
		
	}
function changeimg4(){
		document.getElementById('img1').src="img4.jpg";
		
	}