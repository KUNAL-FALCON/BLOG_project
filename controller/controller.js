const user=require('../model/model');

exports.create=function(req,res){
    
    console.log("The User is:",req.body);
    const new_user=new user(req.body);
    
    user.create(new_user,(err,user)=>{
        if(err)
        {
            //console.log("Error ocurred due to ",err);
            res.send(err);
        }
        else
        {
            console.log("User Added Successfully :)");
            res.json(user);   
        }
    });
};

exports.search=function(req,res){
    user.search(req.body.username,(err,user)=>{
        if(err)
        {
            //console.log("Error occured due to ",err);
            res.send(err);
        }
        else
        {
            res.json(user);
        }
    });
};

exports.showall=function(req,res){
    user.showall((err,user)=>{
        if(err)
        {
            //console.log("Error occured due to ",err);
            res.send(err);
        }
        else
        {
            console.log(user);
            res.send(user);
        }
    });
};

exports.delete=function(req,res){
    user.delete(req.body.username,(err,user)=>{
        
        if(err)
            res.send(err);
        else
            res.json(user);
    });
};    

exports.update=function(req,res){
    user.update(req.body.username,req.body.password,(err,user)=>{
        if(err)
        {
            console.log("Error occured due to ",err);
            res.send(err);
        }
        else
        {
            res.json(user);
        }
    });

};