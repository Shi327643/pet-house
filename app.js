const  express= require("express");
const path = require("path");
const app = express();
var mongoose = require('mongoose');
const bodyparser = require("body-parser");
mongoose.connect('mongodb://localhost/contactDance', {useNewUrlParser: true,useUnifiedTopology: true });


const port = 8000;

var contactSchema = new mongoose.Schema({
    name: String,
    breed: String,
    card:String,
    date:String,
    phone: String,
    email: String,
    address: String,
    cvv:String
  });
var Contact = mongoose.model('Contact', contactSchema);






app.use('/static',express.static('static'))
app.use(express.urlencoded())

app.set('view engine', 'pug')
app.set('views',path.join(__dirname,'views'))

app.get('/home',(req,res)=> {
    const con = "This is a nice website"
    const params = {   }
    res.status(200).render('home.pug',params)

})
app.get('/about',(req,res)=> {
    const con = "This is a nice website"
    const params = {   }
    res.status(200).render('about.pug',params)

})
app.get('/booking',(req,res)=> {
    const con = "This is a nice website"
    const params = {   }
    res.status(200).render('booking.pug',params)

})
app.get('/contact',(req,res)=> {
    const con = "This is a nice website"
    const params = {   }
    res.status(200).render('contact.pug',params)

})
app.get('/playgame',(req,res)=> {
    const con = "This is a nice website"
    const params = {   }
    res.status(200).render('playgame.pug',params)

})




app.post('/contact',(req,res)=> {       
    var myData = new Contact(req.body);
    myData.save().then(()=>{
        res.send("successfully done!")
     
    }).catch(()=>{
        res.status(400).send("Item has not been saved in your databse")
    })
    

   // res.status(200).render('contact.pug',params);

})




app.listen(port,()=>{
    console.log(`this website is successsfully starrted ${port}`);
});
     
