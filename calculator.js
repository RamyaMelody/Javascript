function dis(val) { 
    document.getElementById("result").value += val;
}
function clr() { 
    document.getElementById("result").value = "";
}
function solve(){
    var x = document.getElementById("result").value;
    var cal = new calc(parseInt(x[0]),parseInt(x[2]));
    switch(x[1]){
            case '+':
            y = cal.add();
            break;
            case '-':
            y = cal.sub();
            break;
            case '/':
            y = cal.div();
            break;
            case '*':
            y = cal.mul();
            break;
    }
    document.getElementById("result").value = y;
}
class calc{
    constructor(a,b){
        this.a=a;
        this.b=b;
    }
    add(){
        return this.a + this.b;
    }
    sub(){
        return this.a-this.b;
    }
    mul(){
        return this.a*this.b;
    }
    div(){
        return this.a/this.b;
    }
}
