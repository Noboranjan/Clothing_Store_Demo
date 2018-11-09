var express=require('express');
var router=express.Router();
var dbAccess=require.main.require('./models/database/db-access');

router.get('/',function(req,res){

	dbAccess.getMenProducts(function(result){

		if(result.length > 0)
		{
			if(req.session.un)
			{
				res.render('clothings/products',{name:req.session.un,pagename:"Men's Clothing",productlist:result});

			}else{
				
				res.render('clothings/products',{name:"",pagename:"Men's Clothing",productlist:result});
			 
			}
			
		}else{

				console.log("Men's Product result not found from db!");

		}

	});

});

module.exports=router;