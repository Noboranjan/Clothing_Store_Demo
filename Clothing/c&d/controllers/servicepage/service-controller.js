var express=require('express');
var router=express.Router();

router.get('/',function(req,res){

	if(req.session.un)
	{
		res.render('homepage/services',{name:req.session.un});

	}else{

		res.render('homepage/services',{name:""});

	}

});

module.exports=router;