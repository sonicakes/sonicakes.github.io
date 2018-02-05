//require all npm packages

//web framework for Node.js
var express = require("express");
var app = express();
//Node.js body parsing middleware.
var bodyParser = require("body-parser");
//Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
var methodOverride = require("method-override");
//Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
var mongoose =  require("mongoose");
//express middleware used to remove potentially executable javascript from a snippet of html in the blog body
var expressSanitizer = require("express-sanitizer");

//EJS - Embedded JavaScript templates

//App configuration
mongoose.connect("mongodb://localhost/aww_app");
//specifies the format of files for later rendering
app.set("view engine", "ejs");
//serving static files from public directory,like CSS, imgs etc.
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(expressSanitizer());
app.use(methodOverride("_method"));


// Mongoose /Model Configuration
var awwSchema = new mongoose.Schema({
  title: String,
  image: String,
  body: String,
  created: {type: Date, default: Date.now}
});

var Aww = mongoose.model("Aww", awwSchema);


// RESTful Routes

//INDEX Route

app.get("/", function(req, res){
  res.redirect("/awws");
});

app.get("/awws", function(req, res){
  Aww.find({}, function(err, awws){
    if(err){
      console.log("Error has occured");
    }else{
      res.render("index", {awws: awws});
    }
  });
});

//NEW route
app.get("/awws/new", function(req, res){
  res.render("new");
});

//CREATE route
app.post("/awws", function(req, res){
  req.body.aww.body = req.sanitize(req.body.aww.body);
  Aww.create(req.body.aww, function(err, newAww){
    if(err){
      res.render("new");
    }else{
      res.redirect("/awws");
    }
  });
    });
    //SHOW Route
    app.get("/awws/:id", function(req, res){
      Aww.findById(req.params.id, function(err, foundAww){
        if(err){
          res.redirect("/awws");
        }else{
          res.render("show", {aww: foundAww});
        }
      });
    });

    //EDIT Route
    app.get("/awws/:id/edit", function(req, res){
      Aww.findById(req.params.id, function(err, foundAww){
        if(err){
          res.redirect("/aww");
        }else{
          res.render("edit", {aww: foundAww});
        }
      });
    });

    //UPDATE Route
    app.put("/awws/:id", function(req, res){
        req.body.aww.body = req.sanitize(req.body.aww.body);
    Aww.findByIdAndUpdate(req.params.id, req.body.aww, function(err, updatedAww){
      if (err){
        res.redirect("/awws");
      }else{
        res.redirect("/awws/" + req.params.id);
      }
    })
    });

    //DELETE Route
    app.delete("/awws/:id", function(req, res){
    Aww.findByIdAndRemove(req.params.id, function(err){
      if(err){
        res.redirect("/awws");
      }else{
        res.redirect("/awws");
      }
    });
    });



app.listen(3005, function(){
  console.log("The AWWWWWWWWWesome server has started!");
});
