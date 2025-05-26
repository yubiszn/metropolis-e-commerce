const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

// Database Connection with MongoDB
mongoose.connect("mongodb+srv://alia14:Tatum2021@cluster0.jhu5xjd.mongodb.net/e-commerce")
  .then(() => console.log("MongoDB Successfully Connected"))
  .catch((error) => 
    {
      console.error("MongoDB Connection Failed:", error);
      process.exit(1); 
    });



// API Creation

app.get("/",(req,res)=>{
    res.send("Express App is Running")
})


// Image Storage Engine 

const storage = multer.diskStorage ({
	destination: './upload/images',
	filename:(req,file,cb)=>{
		return cb(null,`${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`)
	}
})

const upload = multer({storage:storage})

// Creating Endpoint for Uploading Images

app.use('/images',express.static('upload/images'))
app.post("/upload", upload.single('product'),(req, res)=>{
	res.json({
	success:1,
	image_url: `http://localhost:${port}/images/${req.file.filename}`
  })
})


// Schema for Creating Products

const Product = mongoose.model("Product", {
  id: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  }, 
  category: {
    type: String,
    required: true,
  },
  new_price: {
    type: Number,
    required: true,
  },
  old_price: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  available: {
    type: Boolean,
    default: true,
  },
})

// Creating Endpoint for Adding Products

app.post('/addproduct', async (req, res)=> {
    const product = new Product({
      id:req.body.id,
      name:req.body.name,
      image:req.body.image,
      category:req.body.category,
      new_price:req.body.new_price,
      old_price:req.body.old_price,
    });
    console.log(product);
    await product.save();
    console.log("Saved");
    res.json({
      success:true,
      name:req.body.name,
    })
})



// Starting the Express server and listening for incoming requests

app.listen(port,(error)=> {
  if (!error) {
    console.log("Server Running on Port " + port)
  }
  else
  {
    console.log("Error: " + error)
  }
})

