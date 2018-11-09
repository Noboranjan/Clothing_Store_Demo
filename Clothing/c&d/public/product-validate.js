$(document).ready(function(){
  
  $("#add-update-product").submit(function(event) {

    var pname = $("#pname").val();
    var ptitle = $("#ptitle").val();
    var pfor = $("#pfor").val();
    var category = $("#category").val();
    var size = $("#size").val();
    var price = $("#price").val();
    var currency = $("#currency").val();
    var cost = $("#cost").val();
    var available = $("#available").val();
    var offer = $("#offer").val();

    console.log(pname);
    console.log(ptitle);

    var fileInput = document.getElementById('productpic1');
    var $fileUpload = $("#productpic1");
    var filePath = fileInput.value;
    var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

    if(filePath!="")
    {
      if(!allowedExtensions.exec(filePath)){
        //alert('Please upload file having extensions .jpeg/.jpg/.png/.gif only.');
        $("#productpic1Help").html("Please upload file having extensions .jpeg/.jpg/.png/.gif only.");
        //fileInput.value = '';
        //return false;
        event.preventDefault();

      }else {

        $("#productpic1Help").html("");

      }
      
      if(parseInt($fileUpload.get(0).files.length)>5){

        //alert("You can only upload a maximum of 2 files");
        $("#productpic1Help").html("maximum 5 files are allowed");
        event.preventDefault();

       }else{

        $("#productpic1Help").html("");

      }

    }

    if((pname=="")||(ptitle==""))
    {
      if(pname=="")
      {
        //alert("username empty.");
        $("#pname").addClass("is-invalid");
        $("#pnameHelp").html("product name can't be empty");

      }else if(pname!=""){
        //alert("username OK.");
        $("#pname").removeClass("is-invalid");
        $("#pnameHelp").html("");
      }

      if(ptitle=="")
      {
        $("#ptitle").addClass("is-invalid");
        $("#ptitleHelp").html("product title can't be empty");

      }else if(ptitle!=""){

        $("#ptitle").removeClass("is-invalid");
        $("#ptitleHelp").html("");

      }

      event.preventDefault();

    }else{

      var hasNumber = /\d/;

      if(hasNumber.test(pname))
      {
        //alert("username can't contain a number");
        $("#pname").addClass("is-invalid");
        $("#pnameHelp").html("product name can't contain a number");
        event.preventDefault();

      }else if(!(hasNumber.test(pname))){

        $("#pname").removeClass("is-invalid");
        $("#pnameHelp").html("");

      }
  
      if(pname.length<3)
      {
        //alert("pname length should be at least 3");
        $("#pname").addClass("is-invalid");
        $("#pnameHelp").html("product name length should be at least 3");
        event.preventDefault();

      }else if(pname.length>=3){

        $("#pname").removeClass("is-invalid");
        $("#pnameHelp").html("");
      }

      if(ptitle.length<3)
      {
        //alert("ptitle length should be at least 3");
        $("#ptitle").addClass("is-invalid");
        $("#ptitleHelp").html("product title length should be at least 3");
        event.preventDefault();

      }else if(ptitle.length>=3){

        $("#ptitle").removeClass("is-invalid");
        $("#ptitleHelp").html("");

      }

    }
    
  });

});