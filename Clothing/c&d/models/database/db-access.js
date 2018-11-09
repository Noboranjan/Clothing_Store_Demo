var db=require('./db');

module.exports={

	loginValidate:function(user,callback)
	{
		var sql="SELECT * from users WHERE username=? OR email=?";	
		db.getResult(sql,[user.username,user.username],function(result){
				if(result.length>0)
				{
					//callback(true);
					callback(true,result);
				}
				else
				{
					callback(false,null);
				}

		});
	},

	getAll:function(callback)
	{
		var sql="SELECT * from users";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},
	getProductTable:function(callback)
	{
		var sql="SELECT * from products";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},
	getUserTable:function(callback)
	{
		var sql="SELECT * from users";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},
	getPurchaseTable:function(callback)
	{
		var sql="SELECT * from purchases";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},

	getAllProducts:function(callback)
	{
		var sql="SELECT * from products";	
		db.getResult(sql,[],function(result){
				callback(result);

		});
	},
	getMenProducts:function(callback)
	{
		var sql="SELECT * from products WHERE pfor=?";	
		db.getResult(sql,["Men"],function(result){
				callback(result);

		});
	},
	getWomenProducts:function(callback)
	{
		var sql="SELECT * from products WHERE pfor=?";	
		db.getResult(sql,["Women"],function(result){
				callback(result);

		});
	},
	getChildProducts:function(callback)
	{
		var sql="SELECT * from products WHERE pfor=?";	
		db.getResult(sql,["Child"],function(result){
				callback(result);

		});
	},
	getProductDetails:function(pid,callback)
	{
		var sql="SELECT * from products WHERE pid=?";	
		db.getResult(sql,[pid],function(result){
				if(result.length>0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

		});
	},
	getUserDetails:function(id,callback)
	{
		var sql="SELECT * from users WHERE id=?";	
		db.getResult(sql,[id],function(result){
				if(result.length>0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

		});
	},
	addProduct:function(product,callback)
	{
		var sql="INSERT INTO products VALUES(null,?,?,?,?,?,?,?,?,?,?,?,?)";	
		db.execute(sql,[product.pname,product.ptitle,product.category,product.pfor,product.size,product.available,null,product.price,product.currency,product.cost,product.offer,product.image],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},
	addPurchase:function(arrayCart,callback)
	{
		var sql="INSERT INTO purchases VALUES(null,?,?,?,?,?,?,?,?,?,?,?,?,?,?,null)";	
		db.execute(sql,[arrayCart.pid,arrayCart.pname,arrayCart.ptitle,arrayCart.category,arrayCart.pfor,arrayCart.quantity,arrayCart.price,arrayCart.currency,arrayCart.purchasedby,arrayCart.date,arrayCart.purchasedmethod,arrayCart.phonenumber,arrayCart.address,arrayCart.total],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},
	registerUser:function(userreg,callback)
	{
		var sql="INSERT INTO users VALUES(null,?,?,?,?,?,?,?,?,?,?,?,?,?,?)";	
		db.execute(sql,[userreg.username,userreg.firstname,userreg.lastname,userreg.email,userreg.password,userreg.gender,userreg.dob,userreg.pnumber,userreg.country,userreg.city,userreg.area,userreg.address,userreg.ppic,userreg.acctype],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},
	insert:function(user,callback)
	{
		var sql="INSERT INTO user VALUES(null,?,?)";	
		db.execute(sql,[user.username,user.password],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},

	getById:function(id,callback)
	{
		var sql="SELECT * from user WHERE id=?";	
		db.getResult(sql,[id],function(result){
				if(result.length>0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

		});
	},
	getUserById:function(id,callback)
	{
		var sql="SELECT * from users WHERE id=?";	
		db.getResult(sql,[id],function(result){
				if(result.length>0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

		});
	},
	getProductById:function(pid,callback)
	{
		var sql="SELECT * from products WHERE pid=?";	
		db.getResult(sql,[pid],function(result){
				if(result.length>0)
				{
					callback(result[0]);
				}
				else
				{
					callback([]);
				}

		});
	},

	updateUser:function(user,callback)
	{
		var sql="UPDATE users SET username=?,firstname=?,lastname=?,email=?,password=?,gender=?,dob=?,phonenumber=?,country=?,city=?,area=?,address=?,profilepic=?,accounttype=? where id=?";	
		db.execute(sql,[user.username,user.firstname,user.lastname,user.email,user.password,user.gender,user.dob,user.pnumber,user.country,user.city,user.area,user.address,user.ppic,user.acctype,user.id],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},
	updateProduct:function(product,callback)
	{
		var sql="UPDATE products SET pname=?,ptitle=?,category=?,pfor=?,size=?,available=?,price=?,currency=?,cost=?,offer=?,image=? where pid=?";	
		db.execute(sql,[product.pname,product.ptitle,product.category,product.pfor,product.size,product.available,product.price,product.currency,product.cost,product.offer,product.image,product.pid],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},


	deleteUser:function(id,callback)
	{
		var sql="DELETE from users where id=?";	
		db.execute(sql,[id],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},
	deleteProduct:function(pid,callback)
	{
		var sql="DELETE from products where pid=?";	
		db.execute(sql,[pid],function(result){
				if(result)
				{
					callback(true);
				}
				else
				{
					callback(false);
				}

		});
	},

	searchFromUser:function(typo,callback)
	{
		//var sql="SELECT * from user WHERE username=?";	
		var sql="SELECT * from users WHERE username like ? OR firstname like ? OR lastname like ? OR email like ? OR phonenumber like ? OR gender like ? OR country like ? OR city like ? OR area like ? ";	
		db.getResult(sql,[typo,typo,typo,typo,typo,typo,typo,typo,typo],function(result){

				if(result.length>0)
				{
					callback(result);
				}
				else
				{
					callback([]);
				}

		});
	},
	searchFromProduct:function(typo,callback)
	{
		//var sql="SELECT * from user WHERE username=?";	
		var sql="SELECT * from products WHERE pname like ? OR ptitle like ? OR pfor like ? OR category like ? OR price like ?";	
		db.getResult(sql,[typo,typo,typo,typo,typo],function(result){

				if(result.length>0)
				{
					
					callback(result);
				}
				else
				{
					
					callback([]);
				}

		});
	},
	searchFromPurchase:function(typo,callback)
	{
		//var sql="SELECT * from user WHERE username=?";	
		var sql="SELECT * from purchases WHERE username like ?";	
		db.getResult(sql,[typo],function(result){

				if(result.length>0)
				{
					
					callback(result);
				}
				else
				{
					
					callback([]);
				}

		});
	},

	searchByName:function(name,callback)
	{
		//var sql="SELECT * from user WHERE username=?";	
		var sql="SELECT * from user WHERE username like ?";	
		db.getResult(sql,[name],function(result){

				if(result.length>0)
				{
					
					callback(result);
				}
				else
				{
					
					callback([]);
				}

		});
	}
};

