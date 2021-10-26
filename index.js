const express =require('express');

const port =7070;
const app=express();


const expressLayouts = require("express-ejs-layouts");
app.use(express.static("./assets"));
app.use(expressLayouts);

app.set("layout extractStyles", true);
app.set("layout extractScripts", true);
// use express router
app.use("/",require("./routes"));

// set up view engine
app.set("view engine","ejs");
app.set("views","./views");



app.listen(port,function(err){


    if(err){

        console.log("Error:",err);

    }

    else{

        console.log(`server running sucessfully on port ${port}`);
    }

});