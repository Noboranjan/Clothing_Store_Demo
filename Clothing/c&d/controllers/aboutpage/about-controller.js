var express=require('express');
var router=express.Router();

router.get('/',function(req,res){

	//res.send("<script>alert('hello')</script>");
	if(req.session.un)
	{
		//res.render('homepage/about');
		res.render('homepage/about',{name:req.session.un});

	}else{

		//res.render('homepage/about');
		res.render('homepage/about',{name:""});

	}

});

module.exports=router;