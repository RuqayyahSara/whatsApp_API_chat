// require NPMs
const express = require("express");
const bodyParser = require("body-parser");

// setup express
const app = express();
const port = process.env.PORT || 2000;

// setup middlewares
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));


app.post("/", (req,res) => {
    var number = req.body.mobile;
    var text= req.body.message;
    res.redirect(`https://wa.me/91${number}?text=${text}`);
});

app.listen(port,(err)=>{
    if(err)
    throw err;
    console.log("Listening on port: "+port);
    
})