import express from 'express';

const app = express();

app.get('/',
    
    function(req,res){
        res.send("Hi There ! ")

    })

app.listen(3000,

    function(){
        console.log("Lisening on port 3000")
    }


)