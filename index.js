var express = require('express');
var bodyparser=require('body-parser');
var multer = require('multer');

var app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));


app.use(express.static('/views'));

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/product.html");
})


app.post('/getData',(req,res)=>{
   

    
    
   
    fileupload(req,res,(err)=>{
        if(err){
        console.log("file uploading failed " +err);
        res.send(err);
        }
        else
        {
        console.log("file uploaded succesfully");

         var productname=req.body.productname;
         var price=req.body.price;
         var quantity=req.body.quantity;
         var image=req.body.image;
         var total=price*quantity;

         res.send("Name: " +productname+ " , Price: " +price+ " , quantity: " +quantity+ ", image: " +image+"total: " +total);

        
        }
    });
    

});



var st=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,"./productimages");
    },
    filename:(req,file,cb)=>{
        cb(null,file.originalname);
    }
});

var fileupload=multer({storage:st}).single('image');


     


app.listen(3000,(err)=>{
    if(err){ console.log(err)}
    else { console.log("server is running at http://localhost:3000")}
})