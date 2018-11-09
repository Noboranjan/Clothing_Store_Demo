var express=require('express');
var router=express.Router();
var dbAccess=require.main.require('./models/database/db-access');

var fs = require('file-system');
var empty = require('is-empty');
//var multer = require('multer');
//var upload = multer({ dest: 'public/uploads/'});


router.get('/',function(req,res){

	if(req.session.un)
	{
		res.redirect('/homepage');

	}else{

		res.render('registerpage/registerpage');

	}

});

router.post('/updateuser/:id',function(req,res){

	//res.send("Welcome after registration");
	var user={
		id:req.params.id,
		username:req.body.username,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    gender:req.body.gender,
    dob:req.body.DOB,
    email:req.body.email,
    pnumber:req.body.pnumber,
    password:req.body.password,
    country:req.body.country,
    city:req.body.city,
    area:req.body.area,
		address:req.body.address,
		acctype:req.body.acctype,
		ppic:"",
	}

	console.log(user);

	//file upload code start
	console.log(req.files);

	if(!(empty(req.files)))
	{
		var propic = req.files.profilepic;
		var propicName = req.files.profilepic.name;
		var userDir = user.acctype.toLowerCase() + "s";

		console.log("User directory : "+userDir);

		// Use the mv() method to place the file somewhere on your server
		//propic.mv('public/uploads/users/' + user.username + '/profilepic/' + user.username + '.jpg' , function(err) {
		if(!(fs.existsSync('public/uploads/' + userDir + '/' + user.username + '/profilepic')))
		{
			//fs.rmdir()
			//fs.unlink()
			fs.mkdirSync('public/uploads/' + userDir + '/' + user.username + '/profilepic');
		}
		propic.mv('public/uploads/' + userDir + '/' + user.username + '/profilepic/' + user.username + '.jpg' , function(err) {
			if(err)
			{
				console.log(err);
				
			}else{

				console.log("uploaded");
				user.ppic= 'public/uploads/users/' + user.username + '/profilepic/' + user.username + '.jpg';
				console.log(user.ppic);

			}
		});

	}
	//file upload code end

	dbAccess.updateUser(user,function(result){

		console.log(result);
		if(result)
		{
			if(req.body.updater="Admin")
			{
				console.log("Successfully updated "+user.acctype);
				res.redirect('/adminpage/usertable');

			}else{

				res.redirect('/homepage');
			}
			
		}else{

			if(req.body.updater="Admin")
			{
				console.log("Something went wrong while updating Admin or adding User");
				res.redirect('/adminpage/usertable');

			}else{

				res.redirect('/homepage');

			}

		}

	});


});

//router.post('/',upload.any(),function(req,res){
router.post('/',function(req,res){
	//res.send("Welcome after registration");
	var userreg={
		username:req.body.username,
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    gender:req.body.gender,
    dob:req.body.DOB,
    email:req.body.email,
    pnumber:req.body.pnumber,
    password:req.body.password,
    country:req.body.country,
    city:req.body.city,
    area:req.body.area,
		address:req.body.address,
		acctype:req.body.acctype,
		ppic:"",
	}

	console.log(userreg);

	//file upload code start
	console.log(req.files);

	if(!(empty(req.files)))
	{
		var propic = req.files.profilepic;
		var propicName = req.files.profilepic.name;
		var userDir = userreg.acctype.toLowerCase() + "s";

		console.log("User directory : "+userDir);

		// Use the mv() method to place the file somewhere on your server
		//propic.mv('public/uploads/users/' + userreg.username + '/profilepic/' + userreg.username + '.jpg' , function(err) {
		if(!(fs.existsSync('public/uploads/' + userDir + '/' + userreg.username + '/profilepic')))
		{
			//fs.rmdir()
			//fs.unlink()
			fs.mkdirSync('public/uploads/' + userDir + '/' + userreg.username + '/profilepic');
		}
		propic.mv('public/uploads/' + userDir + '/' + userreg.username + '/profilepic/' + userreg.username + '.jpg' , function(err) {
			if(err)
			{
				console.log(err);
				
			}else{

				console.log("uploaded");
				userreg.ppic= 'public/uploads/users/' + userreg.username + '/profilepic/' + userreg.username + '.jpg';
				console.log(userreg.ppic);

			}
		});

	}
	//file upload code end

	dbAccess.registerUser(userreg,function(result){

		console.log(result);
		if(result)
		{
			if(req.body.assign="adding")
			{
				console.log("Successfully added "+userreg.acctype);
				res.redirect('/adminpage/usertable');

			}else{

				res.redirect('/loginpage');
			}
			
		}else{

			if(req.body.assign="adding")
			{
				console.log("Something went wrong while assigning Admin or adding User");
				res.redirect('/adminpage/usertable');

			}else{

				res.redirect('/registerpage');
			}

		}

	});

});

module.exports=router;