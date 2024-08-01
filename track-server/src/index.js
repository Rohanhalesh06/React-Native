require('./models/users')

const express = require('express');
const mongoose =  require('mongoose')
const mongooseUri = 'mongodb+srv://rohanh:wV3n15PBJK9aqHh8@cluster0.v7rbraw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
const authRoutes = require('./routes/authRoutes')
const bodyParser = require('body-parser')


const app = express();
app.use(bodyParser.json())
app.use(authRoutes);

mongoose.connect(mongooseUri)

mongoose.connection.on('connected',

    function(){
        console.log("Connected to the mongoose database !! ")
    }
)

mongoose.connection.on('error',
    function(){
        console.log("Error Connecting to mongoose !! ")
    }
)

app.get('/',
    
    function(req,res){
        res.send("Hi There ! ")

    })

app.listen(3001,

    function(){
        console.log("Lisening on port 3001")
    }


)