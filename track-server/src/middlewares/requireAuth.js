const jwt =  require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User');

module.exports = 

function(res,req,next){
        const {authorization} = res.headers;
        if(!authorization){
            return req.send("You must be loggedin")
        }

        const token = authorization.replace('Bearer ','');
        jwt.verify(token,'MY_SECRET_KEY', 
            async function(err,payload){

                if(err){
                    return  req.status(401).send({error:'you must be loggedin '});

            }

            const {userId} = payload;

            const user = await User.findById(userId);

            req.user = user;

            next()

        })
    }