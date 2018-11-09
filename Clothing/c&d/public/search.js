$(document).ready(function(){

$("#search-user").click(function(){
	
	var search = $('#searchbox').val();
	search +="%";

	$.ajax({
		url:"/adminpage/searchuser",
		method:"post",
		data:{
			//name:$('#nam').val()
			typo:search
		},
		success:function(res){
			//$("#dataTable").html("<table><tr><th>ID</th><th>User Name</th><th>Password</th></tr><tr><td>"+res.id+"</td> <td>"+res.username+"</td> <td>"+res.password+"</td></tr></table>");

			$("#dataTable").html("<table><tr><th>All Operations</th><th>User Id</th><th>Username</th><th>User Firstname</th><th>User Lastname</th><th>User Email</th><th>User Password</th><th>User Gender</th><th>User Date of Birth</th><th>User Phone Number</th><th>User Country</th><th>User City</th><th>User Area</th><th>User Address</th><th>User Profile Pic</th><th>User Account Type</th></tr>");

			for(var i=0;i<res.length;i++)
			{
				$("#dataTable").append( "<tr><td> <a class='btn btn-success btn-sm' href='/adminpage/updateuser/"+res[i].id+"'>Update</a> <form action='/adminpage/deleteuser/"+res[i].id +"' method='post' id='delete-product'><button type='button' class='btn btn-danger btn-sm dropdown-toggle' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>Delete</button><div class='dropdown-menu'><input class='dropdown-item' type='submit' value='Yes' name='yes'/><div class='dropdown-divider'></div><input class='dropdown-item' type='submit' value='No' name='no'/></div></form></td><td>"+res[i].id+"</td> <td>"+res[i].username+"</td> <td>"+res[i].firstname+"</td><td>"+res[i].lastname+"</td><td>"+res[i].email+"</td><td>"+res[i].password+"</td><td>"+res[i].gender+"</td><td>"+res[i].dob+"</td><td>"+res[i].phonenumber+"</td><td>"+res[i].country+"</td><td>"+res[i].city+"</td><td>"+res[i].area+"</td><td>"+res[i].address+"</td><td>"+res[i].profilepic+"</td><td>"+res[i].accounttype+"</td></tr>" );
			}

			$("#dataTable").append( "</table>" );
			
			//document.write(res);
			console.log("success");
		}
	});
});

$( "#nam" ).keypress(function() {
	console.log( "Handler for .keypress() called." );
	
	var search = $('#nam').val();
	search +="%";

	$.ajax({
		url:"/allclothings/searchproduct",
		method:"post",
		data:{
			//name:$('#nam').val()
			typo:search
		},
		success:function(res){
			//$("#dataTable").html("<table><tr><th>ID</th><th>User Name</th><th>Password</th></tr><tr><td>"+res.id+"</td> <td>"+res.username+"</td> <td>"+res.password+"</td></tr></table>");

			for(var i=0;i<res.length;i++)
			{

			$(".row").html(`<div class="col-lg-4 col-sm-6 portfolio-item" id="${res[i].pid}">
          <input type="hidden" name="pid" value="${res[i].pid}"/>
          <input type="hidden" name="pname" value="${res[i].pname}"/>
          <input type="hidden" name="ptitle" value="${res[i].ptitle}"/>
          <input type="hidden" name="pfor" value="${res[i].pfor}"/>
          <input type="hidden" name="category" value="${res[i].category}"/>
          <input type="hidden" name="size" value="${res[i].size}"/>
          <input type="hidden" name="available" value="${res[i].available}"/>
          <input type="hidden" name="price" value="${res[i].price}"/>
          <input type="hidden" name="cost" value="${res[i].cost}"/>
          <input type="hidden" name="currency" value="${res[i].currency}"/>
          <input type="hidden" name="offer" value="${res[i].offer}"/>
          <div class="card h-100">
            <a href="#"><img class="card-img-top" src="uploads/products/${res[i].pname}/images/${res[i].pname}0.jpg" onerror="this.src = 'http://placehold.it/700x400'" alt=""></a>
            <div class="card-body">
              <h4 class="card-title">
                <a href="/productdetails/${res[i].pid}">${res[i].pname}</a>
              </h4>
              <p class="card-text">
                Product For : ${res[i].pfor}</br>
                Product Category : ${res[i].category}</br>
                Product Price : ${res[i].price} ${res[i].currency}</br>
                Product Size : ${res[i].size}
              </p>
						</div>
					</div>
        </div>`);
            /*if(name!=""){
            <div class="card-footer">
              <button type="button" class="btn btn-success btn-sm mzs-atc">Add to Cart</button>
              <input type="number" name="quantity" min="1" max="<%= productlist[i].available %>" value="1">
            </div>
            <% } %>
          </div>
        </div>
        <% } %>);*/

			}

			//$("#dataTable").append( "</table>" );
			
			//document.write(res);
			console.log("success");
		}
	});

});


});