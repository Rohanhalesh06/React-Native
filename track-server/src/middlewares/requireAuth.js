const jwt =  require ('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User');

module.exports = 

function(req,res,next){
        const {authorization} = req.headers;
        if(!authorization){
            return res.status(401).send({ error: 'You must be logged in.' });        }

        const token = authorization.replace('Bearer ','');
        jwt.verify(token,'MY_SECRET_KEY', 
            async function(err,payload){

                if(err){
                    return  res.status(401).send({error:'you must be loggedin '});

            }

            const {userId} = payload;

            const user = await User.findById(userId);

            req.user = user;

            next()

        })
    }