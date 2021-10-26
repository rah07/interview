const express =require('express');

const port =7070;
const app=express();



app.listen(port,function(err){


    if(err){

        console.log("Error:",err);

    }

    else{

        console.log(`server running sucessfully on port ${port}`);
    }

});