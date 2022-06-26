const express = require('express');
const mongoose = require('mongoose');
const router = require("./routes/book-routes");
const cors = require("cors");
const app = express();


// const app = express();

//Middlewares
app.use(express.json());
app.use(cors());
app.use("/books", router);




app.use('/', (req,res, next)=>{
    res.send("This is our starting app");
})


mongoose.connect(
    "mongodb+srv://admin:scoXSmTaG6uiLRn9@cluster0.ekuyc.mongodb.net/bookStore?retryWrites=true&w=majority"
    )
    .then(()=>console.log("Connected to the Database"))
    .then(()=>{
        app.listen(5000)
    }).catch((err) => console.log(err)); 
//scoXSmTaG6uiLRn9