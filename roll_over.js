var div = document.createElement("div");
document.body.appendChild(div);
div.id='div1';
var images = ["img1.jpg","img2.jpg","img3.jpg","img4.jpg"];
var img = document.createElement('img');
div.appendChild(img);
img.id='img1';
img.style.width="200px";
img.style.height="150px";
img1.addEventListener("mouseover",mouseOver);

var i=0;
img.src =images[0];
function mouseOver(){
i=i+1;
i=i%images.length;
document.getElementById("img1").src =images[i];
}