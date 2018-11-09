var express=require('express');
var router=express.Router();
var dbAccess=require.main.require('./models/database/db-access');

router.get('/',function(req,res){

	dbAccess.getAllProducts(function(result){

		if(result.length > 0)
		{
			if(req.session.un)
			{
				res.render('clothings/products',{name:req.session.un,pagename:"All Clothings",productlist:result});

			}else{
				
				res.render('clothings/products',{name:"",pagename:"All Clothings",productlist:result});
			 
			}
			
		}else{

				console.log("All Product result not found from db!");

		}
		
	});

});

router.post('/searchproduct',function(req,res){

	console.log(req.body.typo);
	
	dbAccess.searchFromProduct(req.body.typo,function(result){
		if(result.length>0)
		{
			console.log(result);
			console.log(req.body.typo);
			//res.send(result[0]);
			res.send(result);
		}
		else
		{
			res.send("Not found...");
		}

	});
	
});

module.exports=router;