var express=require('express');
var router=express.Router();

router.get('/',function(req,res){

	if((req.session.un)&&(req.session.at=="Admin"))
	{
		res.render('add_products/add-products',{name:req.session.un});

	}else{

		res.redirect('/loginpage');

	}

});

module.exports=router;