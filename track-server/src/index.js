require('./models/users');
require('./models/track');

const express = require('express');
const mongoose =  require('mongoose');
const mongooseUri = 'mongodb+srv://rohanh:wV3n15PBJK9aqHh8@cluster0.v7rbraw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackroutes');
const bodyParser = require('body-parser');
const requireAuth = require('./middlewares/requireAuth');

const app = express();
app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

mongoose.connect(mongooseUri);

mongoose.connection.on('connected',

    function(){
        console.log("Connected to the mongoose database !! ");
    }
)

mongoose.connection.on('error',
    function(){
        console.log("Error Connecting to mongoose !! ");
    }
)

app.get('/',requireAuth,
    
    function(req,res){
        res.send(`Your Email : ${res.user.email}`);

    })

app.listen(3001,

    function(){
        console.log("Lisening on port 3001");
    }


)