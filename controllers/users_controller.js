// const { userInfo } = require("os");
const User=require('../models/user');

module.exports.profile=function(req,res){
    res.end('<h1> User Profile </h1>');
}

//Sign Up
module.exports.signUp=function(req,res){
    return res.render('user_sign_up',{
        title:"EveryLivesMatters | Sign Up"
    })
}
//Sign In
module.exports.signIn=function(req,res){
    return res.render('user_sign_in',{
        title:"EveryLivesMatters | Sign In"
    })
}

module.exports.create=function(req,res){
      if(req.body.password != req.body.confirm_password){
        return res.redirect('back');
      }

      User.findOne({email:req.body.email},function(err,user){
        if(err){console.log('error in finding');return}

        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in create user while signUp');return}

                return res.redirect('/users/sign-in');
            })
        }else{
            return res.redirect('back');
        }
      });
}


module.exports.createSession=function(req,res){
    //
}