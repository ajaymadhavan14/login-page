
var express = require('express');
var router = express.Router();
var app = require('../app');


const email1="ajay@gmail.com"
const password1="123";







 /*GET home page. */





router.get('/', function(req, res) {
  
  if (req.session.user) {
  
    res.render('home',{cards});
  }else{
    
    res.render('login',{"message":req.session.message})
  }
  
})

/*router.get('/home',(req,res)=>{
 
  

  res.render('home',{cards})
  
})*/




router.post('/login',(req,res,next)=>{
  const {email,password}=req.body;
  if(email===email1 && password===password1){
    console.log("post");
    req.session.user = true;
   
    
    res.redirect('/')}else{
      req.session.message=true;
      req.session.user = false;
      res.redirect('/')
    }
    //console.log(req.body.password,req.body.email);
 
})

router.get('/logout',(req,res)=>{
  req.session.destroy();
  res.header('Cache-Control', 'no-cache');
  
  res.redirect('/')
})



const cards=[
  {
      title:"Iphone",
      image:"https://kirygm.com/wp-content/uploads/2021/07/Capture-1.png",
      discription:"The display has rounded corners that follow a beautiful curved design, and these corners are within a standard rectangle. When measured as a standard rectangular shape... ",
  },
  {
      title:"Samsung",
      image:"https://th.bing.com/th/id/OIP.OmKqYtBOpLEDxT36QuZbiAHaHa?w=180&h=180&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      discription:"Samsung helps you discover a wide range of home electronics with cutting-edge technology including smartphones, tablets, TVs, home appliances and more,When measured as a standard...",
  },
  {
      title:"Mi",
      image:"https://th.bing.com/th/id/OIP.2lWQP8Tyr65mzzTthLRD9QHaHa?pid=ImgDet&rs=1",
      discription:"Get Xiaomi phones and accessories including Xiaomi 12 Pro Redmi Note 11S 5G Redmi 10C on mi.com. Due to COVID-19, the ongoing health and containment emergency measures may...",
  }, {
      title:"Realme",
      image:"https://i.pinimg.com/originals/54/1f/a1/541fa1621eb321a343dc3b255bc696d3.png",
      discription:"Realme 7 Pro This Realme new model has been hailed by consumers as arguably the best smartphone in the budget segment. ...",
  }, {
      title:"One Plus",
      image:"https://th.bing.com/th/id/OIP.uPbHeLOoS2C9MvpA-nA3NgHaH4?w=202&h=216&c=7&r=0&o=5&dpr=1.25&pid=1.7",
      discription:"OnePlus Nord CE 5G. 64 MP triple camera. Warp Charge 30T Plus + 4500mAh battery. 90 Hz AMOLED display and Snapdragon TM 750G 5G. From ₹22 999. ₹1000 off with HDFC Bank …",
  },
]









 


module.exports = router;
