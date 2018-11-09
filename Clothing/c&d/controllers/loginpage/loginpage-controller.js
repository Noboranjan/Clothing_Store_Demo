var express=require('express');
var router=express.Router();
var dbAccess=require.main.require('./models/database/db-access');

router.get('/',function(req,res){

	console.log("loginpage session un = "+req.session.un);
	if(req.session.un)
	{
		res.redirect('/homepage');

	}else{

		res.render('loginpage/loginpage');

	}

});

router.post('/',function(req,res){

	console.log("loginpage post");
	var user={
		username:req.body.usernameEmail,
		password:req.body.password
	};

	dbAccess.loginValidate(user,function(success,result){

		console.log(result);
		if(success)
		{
			if(result[0].password==user.password)
			{
				req.session.un=result[0].username;
				req.session.pn=result[0].phonenumber;
				req.session.at=result[0].accounttype;
				req.session.adrs=result[0].address;
				
				if(result[0].accounttype=="Admin")
				{
					res.redirect('/adminpage');

				}else if(result[0].accounttype=="User"){

					res.redirect('/homepage');

				}

			}else{
				console.log("1st else login redirect");
				res.redirect('/loginpage');
	
			}

		}else{

			console.log("2nd else login redirect");
			res.redirect('/loginpage');

		}

	});

});

module.exports=router;