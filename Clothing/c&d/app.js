//Declaration
var express=require('express');
var app=express();
var homepageController=require('./controllers/homepage/homepage-controller');
var loginpageController=require('./controllers/loginpage/loginpage-controller');
var registerpageController=require('./controllers/registerpage/registerpage-controller');

var allController=require('./controllers/all_clothings/all-clothings-controller');
var mensController=require('./controllers/mens_clothing/mens-clothing-controller');
var womensController=require('./controllers/womens_clothing/womens-clothing-controller');
var childsController=require('./controllers/childs_clothing/childs-clothing-controller');
var productController=require('./controllers/product_details/product-details-controller');

var aboutController=require('./controllers/aboutpage/about-controller');
var serviceController=require('./controllers/servicepage/service-controller');
var contactusController=require('./controllers/contact_us/contact-us-controller');

var adminController=require('./controllers/adminpage/adminpage-controller');
var logoutController=require('./controllers/loginpage/logout-controller');

var addProductController=require('./controllers/add_products/add-products-controller');
var cartlistController=require('./controllers/cartlist/cartlist-controller');

var fileUpload = require('express-fileupload');

var bodyParser=require('body-parser');
var expressSession=require('express-session');
var port=1337;

//Configuration
app.set('view engine','ejs');

//Middlewares
app.use(bodyParser.urlencoded({extended:false}));
app.use(expressSession({secret:"My secret is secret",saveUninitialized:true,resave:false}));
app.use(express.static(__dirname +'/public/'));

app.use(fileUpload());

//Routes
app.use('/',homepageController);
app.use('/homepage',homepageController);
app.use('/loginpage',loginpageController);
app.use('/registerpage',registerpageController);

app.use('/allclothings',allController);
app.use('/mensclothing',mensController);
app.use('/womensclothing',womensController);
app.use('/childsclothing',childsController);
app.use('/productdetails',productController);

app.use('/about',aboutController);
app.use('/services',serviceController);
app.use('/contactus',contactusController);

app.use('/adminpage',adminController);
app.use('/logout',logoutController);
app.use('/addproducts',addProductController);
app.use('/cartlist',cartlistController);

//Server Start-up
app.listen(port,function(){
	console.log(" Cloth Server Started...");
});