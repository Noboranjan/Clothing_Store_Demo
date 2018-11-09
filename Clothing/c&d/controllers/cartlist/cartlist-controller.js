var express=require('express');
var router=express.Router();
var dbAccess=require.main.require('./models/database/db-access');

var arrayCart = [];
//var cartObj = {};

router.get('/',function(req,res){

	console.log("Finally in Cart List get req");
	console.log(arrayCart);

	res.render('cartlist/cartlist',{name:req.session.un,pnumber:req.session.pn,address:req.session.adrs,list:arrayCart});


	//res.send("<script>alert('hello')</script>");
	//if(req.session.un)
	//{
		//res.render('homepage/about');
		//res.render('cartlist/cartlist',{name:req.session.un});

	//}else{

		//res.render('homepage/about');
		//res.render('cartlist/cartlist',{name:""});

	//}

});

router.post('/',function(req,res){

	//res.send("<script>alert('hello')</script>");
	console.log("in Cart List post req");

	var cartObj={
		pid:req.body.pid,
		quantity:req.body.quantity,
		pname:req.body.pname,
		ptitle:req.body.ptitle,
		category:req.body.category,
		pfor:req.body.pfor,
		size:req.body.size,
		available:req.body.available,
		price:req.body.price,
		currency:req.body.currency,
		purchasedby:"mzs",
		purchasedmethod:"xyz",
		phonenumber:"01744",
		address:"abc",
		cost:req.body.cost,
		offer:req.body.offer,
	}

	var numb = Number(cartObj.quantity);
	var prc = Number(cartObj.price);
	var totalprc = numb * prc;

	cartObj.total= totalprc;

	console.log(cartObj);

	if(arrayCart.length==0)
		{
			arrayCart.push(cartObj);

		}else{

			var found = false;

			for(var i=0;i<arrayCart.length;i++)
			{
				if(cartObj.pid==arrayCart[i].pid)
				{
					var qntty = Number(arrayCart[i].quantity);
					qntty+=Number(cartObj.quantity);
					arrayCart[i].quantity=qntty;
					numb = Number(arrayCart[i].quantity);
					prc = Number(arrayCart[i].price);
					totalprc = numb * prc;
					arrayCart[i].total=totalprc;
					found=true;
					break;
				}

			}

			if(found==false)
			{
				arrayCart.push(cartObj);
			}

		}

	res.send(arrayCart);

	/*if(req.session.un)
	{
		//res.render('homepage/about');
		res.render('cartlist/cartlist',{name:req.session.un});

	}else{

		//res.render('homepage/about');
		res.render('cartlist/cartlist',{name:""});

	}*/

});

router.post('/checkout',function(req,res){
	
	for(var i =0;i<arrayCart.length;i++)
	{
		var datetime = new Date();
		arrayCart[i].date = datetime;

		dbAccess.addPurchase(arrayCart[i],function(result){

			console.log(result);
			if(result)
			{
				console.log("successfiully added purchase");

			}else{
				
				console.log("something went wrong while adding purchase");

			}

		});

	}

	arrayCart = [];
	res.redirect('/homepage');



});

module.exports=router;