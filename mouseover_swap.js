var div = document.createElement('div');
var div1 = document.createElement('div');
var div2 = document.createElement('div');
var button = document.createElement('button');
document.body.appendChild(div);
document.body.appendChild(div1);
document.body.appendChild(div2);
document.body.appendChild(button);
button.style.width ="80px";
button.style.height ="20px";
div.id = 'id';
div1.id = 'id1';
div2.id = 'id2';
id.textContent = "HelloWorld";
id1.textContent = "I am div1";
id2.textContent = "I am div2";
button.textContent="Click"
id.addEventListener("mouseover", myfun);
button.addEventListener("click",myfun);
function myfun(){
div.style.color ="red";
swap = id1.textContent;
id1.textContent = id2.textContent;
id2.textContent = swap;
}


	