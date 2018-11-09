var express=require('express');
var router=express.Router();
var dbAccess=require.main.require('./models/database/db-access');

router.get('/',function(req,res){

	dbAccess.getChildProducts(function(result){

		if(result.length > 0)
		{
			if(req.session.un)
			{
				res.render('clothings/products',{name:req.session.un,pagename:"Child's Clothing",productlist:result});

			}else{
				
				res.render('clothings/products',{name:"",pagename:"Child's Clothing",productlist:result});
			 
			}
			
		}else{

				console.log("Child's Product result not found from db!");

		}
		
	});

});

module.exports=router;