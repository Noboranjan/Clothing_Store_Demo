//var arrayCart = new Array();

$(document).ready(function(){

	var arrayCart = [];
	var totalitem = 0;
	var qntty;
	console.log(arrayCart.length);

	$(".mzs-atc").click(function(e){

		//var arrayCart = [];
		
		console.log($(this).parents().parents().parents().attr('id'));
		var parentDivId = (e.target).parentNode.parentNode.parentNode.id;
		console.log(parentDivId);

		var pid = $("#" + parentDivId + " > input[name='pid']").val();
		var pname = $("#" + parentDivId + " > input[name='pname']").val();
		var ptitle = $("#" + parentDivId + " > input[name='ptitle']").val();
		var category = $("#" + parentDivId + " > input[name='category']").val();
		var pfor = $("#" + parentDivId + " > input[name='pfor']").val();
		var size = $("#" + parentDivId + " > input[name='size']").val();
		var available = $("#" + parentDivId + " > input[name='available']").val();
		//var rating = $("#" + parentDivId + " > input[name='rating']").val();
		var price = $("#" + parentDivId + " > input[name='price']").val();
		var currency = $("#" + parentDivId + " > input[name='currency']").val();
		var cost = $("#" + parentDivId + " > input[name='cost']").val();
		var offer = $("#" + parentDivId + " > input[name='offer']").val();
		var quantity = $( "#" + parentDivId ).find( "input[name='quantity']" ).val();
		var avmax = $( "#" + parentDivId ).find( "input[name='quantity']" ).attr("max");

		console.log(avmax);
		console.log(quantity);

		var sub = Number(avmax);
		sub-= Number(quantity);
		mini = 1;

		if(sub<1)
		{
			sub=0;
			mini=0;
		}

		$("#" + parentDivId ).find( "input[name='quantity']").attr({
			"max" : sub,        // substitute your own
			"min" : mini          // values (or variables) here
		});

		totalitem+=Number(quantity);
		$('#cartitem').html(totalitem);
		//console.log(cost);
		//console.log(available);

		var cartObj = {};
		cartObj.pid = pid;
		cartObj.pname = pname;
		cartObj.ptitle = ptitle;
		cartObj.pfor = pfor;
		cartObj.category = category;
		cartObj.size = size;
		cartObj.available = available;
		cartObj.quantity = Number(quantity);
		cartObj.price = price;
		cartObj.cost = cost;
		cartObj.currency = currency;
		cartObj.offer = offer;

		console.log(cartObj);
		qntty = Number(quantity);

		if(arrayCart.length==0)
		{
			arrayCart.push(cartObj);
			//$.cookie("products", JSON.stringify(arrayCart));

		}else{

			var found = false;

			for(var i=0;i<arrayCart.length;i++)
			{
				if(cartObj.pid==arrayCart[i].pid)
				{
					arrayCart[i].quantity+=Number(cartObj.quantity);
					//$.cookie("products", JSON.stringify(arrayCart));
					found=true;
					break;
				}

			}

			if(found==false)
			{
				arrayCart.push(cartObj);
				//$.cookie("products", JSON.stringify(arrayCart));
			}

		}

		console.log(arrayCart);

		$.ajax({
			url: "/cartlist",
			method:"post",
			data: {
				pid:pid,
				quantity:qntty,
				pname:pname,
				ptitle:ptitle,
				category:category,
				pfor:pfor,
				size:size,
				available:sub,
				price:price,
				currency:currency,
				cost:cost,
				offer:offer
				},
			success: function (msg) {

				console.log("success");

			}

		});

	});


	/*$("#cart-btn").click(function(e){

		console.log("Working");
		//var products = $.parseJSON($.cookie("products"));
		//console.log(products);
			$.ajax({
				url:"/cartlist/checkout",
				method:"post",
				data:{
					//name:$('#nam').val()
					cartitems:"ok"
				},
				success:function(res){

					//window.location = "http://google.com";
					window.location = "/cartlist";
					
				}
			});
	
	});	*/

});
