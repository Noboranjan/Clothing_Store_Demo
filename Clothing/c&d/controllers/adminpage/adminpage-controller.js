var express=require('express');
var router=express.Router();
var dbAccess=require.main.require('./models/database/db-access');
//var userModel=require.main.require('./models/user-model');
var fs = require('file-system');
//var fs = require('fs-extra');
var empty = require('is-empty');

router.get('*',function(req,res,next){
	if(req.session.un==null)
	{
		res.redirect('/loginpage');
	}
	else{

		next();

	}
});

router.get('/',function(req,res){

	if(req.session.at=="User")
	{
		res.redirect('/homepage');

	}else if(req.session.at=="Admin"){

		dbAccess.getProductTable(function(result){

			if(result.length > 0)
			{
				res.render('adminpage/adminpage',{name:req.session.un,list:result});
			}
			else
			{
				res.render('adminpage/adminpage',{name:req.session.un,list:null});
			}
		});
	}
});

router.get('/usertable',function(req,res){

	if(req.session.at=="User")
	{
		res.redirect('/homepage');

	}else if(req.session.at=="Admin"){

		dbAccess.getUserTable(function(result){

			if(result.length > 0)
			{
				res.render('adminpage/adminpage-user',{name:req.session.un,list:result});
			}
			else
			{
				res.render('adminpage/adminpage-user',{name:req.session.un,list:null});
			}
		});
	}
});

router.get('/purchasetable',function(req,res){

	if(req.session.at=="User")
	{
		res.redirect('/homepage');

	}else if(req.session.at=="Admin"){

		dbAccess.getPurchaseTable(function(result){

			if(result.length > 0)
			{
				res.render('adminpage/adminpage-purchase',{name:req.session.un,list:result});
			}
			else
			{
				res.render('adminpage/adminpage-purchase',{name:req.session.un,list:null});
			}
		});
	}
});

router.get('/adduser/:usertype',function(req,res){

	if(req.session.at=="User")
	{
		res.redirect('/homepage');

	}else if(req.session.at=="Admin"){

		if((req.params.usertype=="User")||(req.params.usertype=="Admin"))
		{
			res.render('registerpage/adduser',{name:req.session.un,usertype:req.params.usertype});

		}else{

			res.redirect('/adminpage/usertable');

		}

	}

});

router.get('/updateuser/:id',function(req,res){

	if(req.session.at=="User")
	{
		res.redirect('/homepage');

	}else if(req.session.at=="Admin"){

			//console.log("before db access /get/pid");
		dbAccess.getUserDetails(req.params.id,function(user){
			//console.log("after db access /get/pid");
			console.log(user);
			res.render('registerpage/edit-user',{name:req.session.un,usertype:req.session.at,user});

		});
	
	}

});

router.get('/addproduct',function(req,res){
	console.log('got in add product get');
	if(req.session.at=="User")
	{
		res.redirect('/homepage');

	}else if(req.session.at=="Admin"){

		res.render('add_product/add-product',{name:req.session.un});
		
	}
	
});

router.get('/updateproduct/:pid',function(req,res){
	console.log('got in update product get');
	if(req.session.at=="User")
	{
		res.redirect('/homepage');

	}else if(req.session.at=="Admin"){

		dbAccess.getProductById(req.params.pid,function(product){

			console.log('Product by pid from Adminpage -');
			console.log(product);

			res.render('add_product/edit-product',{name:req.session.un,product});

		});

		//res.render('add_product/edit-product',{name:req.session.un});
		
	}
	
});



router.post('/searchuser',function(req,res){

	console.log(req.body.typo);
	
	dbAccess.searchFromUser(req.body.typo,function(result){
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

router.post('/deleteproduct/:pid',function(req,res){
	console.log('got in delete product post');
	if(req.session.at=="User")
	{
		res.redirect('/homepage');

	}else if(req.session.at=="Admin"){

		if(req.body.yes)
		{
			dbAccess.deleteProduct(req.params.pid,function(status){
				if(status)
				{
					/*var dirname = req.body.productname;
					
					if(fs.existsSync('public/uploads/products/' + dirname ))
					{
						//fs.rmdir()
						//fs.rmdirSync(dirpath)
						//fs.unlink()
						//fs.unlinkSync()
						fs.rmdir('public/uploads/products/' + dirname );
					}*/
					res.redirect('/adminpage');
				}
				else
				{
					res.send('Error in deleting...');
				}

			});
		}else{
			res.redirect('/adminpage');
		}
		
	}
	
});

router.post('/deleteuser/:id',function(req,res){
	console.log('got in delete user post');
	if(req.session.at=="User")
	{
		res.redirect('/homepage');

	}else if(req.session.at=="Admin"){

		if(req.body.yes)
		{
			dbAccess.deleteUser(req.params.id,function(status){
				if(status)
				{
					res.redirect('/adminpage/usertable');
				}
				else
				{
					res.send('Error in deleting...');
				}

			});
		}else{
			res.redirect('/adminpage/usertable');
		}
		
	}
	
});

router.post('/addproduct',function(req,res){
	console.log('got in add product post');
	if(req.session.at=="User")
	{
		res.redirect('/homepage');

	}else if(req.session.at=="Admin"){

		var product={
			pname:req.body.pname,
			ptitle:req.body.ptitle,
			category:req.body.category,
			pfor:req.body.pfor,
			size:req.body.size,
			available:req.body.available,
			price:req.body.price,
			currency:req.body.currency,
			cost:req.body.cost,
			offer:req.body.offer,
			image:"",
		}
	
		//file upload code start
	
		console.log(req.files);
	
		if(!(empty(req.files)))
		{
			var productImage = req.files.productpic1;
			//var productimageName = req.files.productpic1.name;

			console.log("Total Images : " + productImage.length);
	
			// Use the mv() method to place the file somewhere on your server
			//propic.mv('public/uploads/users/' + userreg.username + '/profilepic/' + userreg.username + '.jpg' , function(err) {
			if(!(fs.existsSync('public/uploads/products/' + product.pname + '/images')))
			{
				//fs.rmdir()
				//fs.rmdirSync(dirpath)
				//fs.unlink()
				//fs.unlinkSync()
				fs.mkdirSync('public/uploads/products/' + product.pname + '/images');
			}

			for(var i=0; i<productImage.length; i++)
			{
				productImage[i].mv('public/uploads/products/' + product.pname + '/images/' + product.pname + i + '.jpg' , function(err) {
					if(err)
					{
						console.log(err);

					}else{
		
						console.log("uploaded");
						product.image= 'public/uploads/products/' + product.pname + '/images/' + product.pname + i + '.jpg';
						console.log(product.image);
		
					}
				});
			}
	
		}
		//file upload code end

		dbAccess.addProduct(product,function(result){

			console.log(result);
			if(result)
			{
				console.log("successfiully added product");
				res.redirect('/adminpage');
	
			}else{
				
				console.log("something wnt wrong while adding product");
				res.redirect('/adminpage');
	
			}
	
		});
		
	}
	
});

router.post('/updateproduct/:pid',function(req,res){

	console.log('got in update product post :'+req.params.pid);

	if(req.session.at=="User")
	{
		res.redirect('/homepage');

	}else if(req.session.at=="Admin"){

		var product={
			pid:req.params.pid,
			pname:req.body.pname,
			ptitle:req.body.ptitle,
			category:req.body.category,
			pfor:req.body.pfor,
			size:req.body.size,
			available:req.body.available,
			price:req.body.price,
			currency:req.body.currency,
			cost:req.body.cost,
			offer:req.body.offer,
			image:"",
		}
		console.log("data from update page");
		console.log(product.pname);
		console.log(product.ptitle);
		console.log(product.pfor);
		console.log(product.category);
		console.log(product.size);
		console.log(product.available);
		console.log(product.price);
		console.log(product.currency);
		console.log(product.cost);
		console.log(product.offer);
	
		//file upload code start
	
		console.log(req.files);
	
		if(!(empty(req.files)))
		{
			var productImage = req.files.productpic1;
			var productimageName = req.files.productpic1.name;
	
			// Use the mv() method to place the file somewhere on your server
			//propic.mv('public/uploads/users/' + userreg.username + '/profilepic/' + userreg.username + '.jpg' , function(err) {
			if(!(fs.existsSync('public/uploads/products/' + product.pname + '/images')))
			{
				//fs.rmdir()
				//fs.unlink()
				fs.mkdirSync('public/uploads/products/' + product.pname + '/images');
			}
			productImage.mv('public/uploads/products/' + product.pname + '/images/' + product.pname + '1.jpg' , function(err) {
				if(err)
				{
					console.log(err);

				}else{
	
					console.log("uploaded");
					product.image= 'public/uploads/products/' + product.pname + '/images/' + product.pname + '1.jpg';
					console.log(product.image);
	
				}
			});
	
		}
		//file upload code end

		dbAccess.updateProduct(product,function(result){

			console.log(result);
			if(result)
			{
				console.log("successfiully updated product");
				res.redirect('/adminpage');
	
			}else{
				
				console.log("something wnt wrong while updaing product");
				res.redirect('/adminpage');
	
			}
	
		});
		
	}
	
});


/*router.get('/create',function(req,res){
	res.render('create/index');
});



router.post('/create',function(req,res){
	var user={
		username:req.body.username,
		password:req.body.password
	};

	userModel.insert(user,function(status){
		if(status)
		{
			res.redirect('/home');

		}
		else
		{
			res.send('Error in adding...');
		}
	});
});

router.get('/edit/:id',function(req,res){
	var id=req.params.id;
	userModel.getById(id,function(user){
		console.log(user);
		res.render('edit/index',user);
	});
	
});



router.post('/edit/:id',function(req,res){
	
	var user={
		id:req.params.id,
		username:req.body.username,
		password:req.body.password,
	};

	userModel.update(user,function(status){
		if(status)
		{
			res.redirect('/home');

		}
		else
		{
			res.send('Error in updating...');
		}
	});
	
});


router.get('/delete/:id',function(req,res){
	
	res.render('delete/index',{id:req.params.id});
	
});


router.post('/delete/:id',function(req,res){
	
	if(req.body.yes)
	{
		userModel.delete(req.params.id,function(status){
			if(status)
			{
				res.redirect('/home');
			}
			else
			{
				res.send('Error in deleting...');
			}

		})
	}
	else
	{
		res.redirect('/home');
	}
	
});

router.post('/getData',function(req,res){

	console.log(req.body.name);
	
	userModel.searchByName(req.body.name,function(result){
		if(result.length>0)
		{
			console.log(result);
			console.log(req.body.name);
			//res.send(result[0]);
			res.send(result);
		}
		else
		{
			res.send("Not found...");
		}
	});
	
	
});*/

module.exports=router;
