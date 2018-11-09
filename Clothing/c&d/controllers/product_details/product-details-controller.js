var express=require('express');
var router=express.Router();
var dbAccess=require.main.require('./models/database/db-access');

router.get('/',function(req,res){
	
	//console.log("/get");
	if(req.session.un)
	{
		res.render('clothings/product-details',{name:req.session.un});

	}else{

		res.render('clothings/product-details',{name:""});

	}

});

router.get('/:pid',function(req,res){

	//console.log("before db access /get/pid");
	dbAccess.getProductDetails(req.params.pid,function(product){
		//console.log("after db access /get/pid");
		console.log(product);

		if(req.session.un)
		{
			res.render('clothings/product-details',{name:req.session.un,product});

		}else{
			
			res.render('clothings/product-details',{name:"",product});
			
		}
	});

});

module.exports=router;