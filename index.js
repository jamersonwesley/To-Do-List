const express = require('express');
const path = require('path');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}))
app.post('/',(req,res)=>{
       tasks.push(req.body.task);
       res.render('index',{tasklist:tasks});
})
app.post('/deletar/:id',(req,res)=>{
    tasks.push(req.body.task);
    res.render('index',{tasklist:tasks});
})

app.engine('html',require('ejs').renderFile);
app.set('view engine','html');
app.use('/public',express.static(path.join(__dirname,'public')));
app.set('views',path.join(__dirname,'/views'));


var tasks = ['Otimize the Code','Refatoring The Code','Study JavaScript']
app.get('/',(req,res)=>{

    res.render('index',{tasklist:tasks});
})
app.get('/deletar/:id',(req,res)=>{

            tasks = tasks.filter(function(val,index){
                if(index != req.params.id){
                    return val;
                }
            })


    res.render('index',{tasklist:tasks});
})


app.listen(5000,()=>{
    console.log('rodando');
})