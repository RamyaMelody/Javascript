const express = require('express');
const bodyparser = require('body-parser');
const app = express();

//app.use(bodyparser.json()) //middle ware 
app.use(bodyparser.urlencoded({ extended: true })); 

var myData=[];
app.get('/',function(req,res){
    res.json(myData)
});

app.post('/users',function(req,res){
    console.log(req.body);
    //store data, send email, send msg
    myData.push(req.body)
    res.json({
        message:"request received"
    })
})
app.put('/users/:id',function(req,res){ //id as the parameter to use for modify the existing one (id act as variable)
    console.log(req.params.id);
    res.json({
        message:"request received"
    })
})

app.delete('/', function(req,res){
    console.log(myData)
})

app.listen(3000,function(){
    console.log("port is running")
});