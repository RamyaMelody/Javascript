var form1 = document.createElement('form');
document.body.appendChild(form1);
form1.name="form";

var textbox1 = document.createElement('input');
textbox1.setAttribute("type","text");
textbox1.id ="text1";
textbox1.placeholder="Username";

var textbox2= document.createElement('input');
textbox2.type="text";
textbox2.id="pwd";
textbox2.placeholder="Password";

var button= document.createElement('button');
button.style.width="70px";
button.style.height="20px";
button.textContent = "Validate";

form1.appendChild(textbox1);
form1.appendChild(textbox2);
form1.appendChild(button);
button.addEventListener("click", emailValidation);

function emailValidation(textbox1){

var text1val = document.getElementById("text1").value;
var text2val = document.getElementById("pwd").value;

var emailExp = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
		+ "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";
//var numExp = /^[0-9]+$/;

//if(!(text1val.match(emailExp)) || !(text1val.match(numExp)))
if(!(text1val.match(emailExp))){
alert("invalid email");
}
if(text2val.length <8){
alert("Password should be 8 characters long");
}
}

