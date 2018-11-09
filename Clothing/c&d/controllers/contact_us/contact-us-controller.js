var express=require('express');
var router=express.Router();

router.get('/',function(req,res){

	if(req.session.un)
	{
		res.render('homepage/contact-us',{name:req.session.un});

	}else{

		res.render('homepage/contact-us',{name:""});

	}

});

module.exports=router;