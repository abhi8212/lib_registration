const mongoose =require("mongoose");
 mongoose.connect("mongodb://localhost:27017/elibraryRegistration",
{
   useNewUrlParser:true,
    useUnifiedTopology:true
   //useFindAndModify: false,
   //useCreateIndex:true

}).then(() =>{
    console.log(`database created successful`);
}).catch((e) => {
    console.log(`database not created`);
})


//creation database;
/* mongoose.connect("mongodb://localhost:27017/abhipro")
.then( ()=> console.log("connection is successful"))
.catch((err) =>console.log(err))
*/


