
const express =require("express");
const app= express();
const path =require("path");
const ejs =require("ejs");

const connection_string = process.env.CONNECTION_STRING;
require("./db/conn");
//contact require;
app.use(express.urlencoded({extended:false}));
const Contacts=require("./models/contacts");




const Registers =require("./models/registers");
const port =process.env.PORT || 5000;


const static_path = path.join(__dirname, "../public");
const templates_path =path.join(__dirname,"../templates/views");
const partials_path =path.join(__dirname,"../templates/partials");

//for contact;
//app.use(express.urlencoded({extended:false}));

//app.use(express.json());
//app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
//set ejs as templationg engine;
app.set('view engine', 'ejs');
app.set('views',templates_path);
//app.set("views",partials_path);


//console.log(__dirname,templates_path);

app.get("/",(req,res) => {
    res.render("index")
});

app.get("/contact",(req,res) => {
     res.render("index");
});


app.post("/contact", async(req,res)=>{
    try{
     
        const contactstudent=new Contacts
        ({
            name :req.body.name,
            locallity: req.body.locallity,
            phone:req.body.phone,
            email:req.body.email,
            message:req.body.message
        })
     //   console.log(contactstudent);

        const contacted = await contactstudent.save();
      //  res.render(201).render("index");
      res.status(201).render("index");

    }
    catch(error){
        res.status(400).send("the contact is not saved");
    }
});




app.get("/register",(req,res) => {
    res.render("register")
});

app.get("/btech_first",(req,res) => {
    res.render("btech_first")
});


app.get("/btech_second",(req,res) => {
    res.render("btech_second")
});


app.get("/btech_third",(req,res) => {
    res.render("btech_third")
});

app.get("/btech_fourth",(req,res) => {
    res.render("btech_fourth")
});


 app.post("/register", async (req,res) => {
    try {
        const password = req.body.password;
        const cpassword =req.body.cpassword;
        if(password == cpassword)
        {
            const registerstudent =new Registers
             ({
              First:req.body.First,
              Last:req.body.Last,
              user:req.body.user,
              email:req.body.email,
              course:req.body.course,
              password:req.body.password,
              cpassowrd:req.body.cpassword,
              gender:req.body.gender

            })

            //save the data;
            const registered = await registerstudent.save();
            //calling index;
             res.status(201).render("login");
                
        }
        else{
            res.send("passowrd are not matching");
        }     
    }
    catch(error){
        res.status(400).send("the register is not save");
    }
});


app.get("/login",(req,res)=>{
    res.render("login");
});

//for login check;
app.post("/login",async(req,res)=>{
    try{
        const email =req.body.email;
        const password=req.body.password;

        console.log(`${email} and password is ${password}`);

    } catch(error)
    {
        res.status(400).send("invalid email");
    }
});


app.listen(port, () => {
    console.log(`server is run on ${port}`);
})


