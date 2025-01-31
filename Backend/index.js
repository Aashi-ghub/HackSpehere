const express =require('express');
const path =require('path')
const dotenv=require('dotenv');
dotenv.config()
const app = express();
const cors = require('cors');
const session =require('express-session');
const port =process.env.PORT||5000
var connectDB=require('./DB_Connect/dbConnection');
var authRoutes=require('./Routes/authRoutes');
const passport=require('passport');
const GitHubStrategy =require('passport-github2').Strategy;
const loggedInUser=require('./DB_Model/logInUser')



connectDB();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

// Configure express-session
app.use(session({
    secret:'Hack-A-Thon',
    resave:false,
    saveUninitialized:false,
    cookie:{secure:false}
}));


app.use(passport.initialize());
app.use(passport.session());


// Configure Passport with GitHub strategy
passport.use(
    new GitHubStrategy(
       { 
           clientID: process.env.GITHUB_CLIENT_ID,
           clientSecret:process.env.GITHUB_CLIENT_SECRET,
           callbackURL: process.env.GITHUB_CALLBACK_URL
       },
       async(accesToken ,refreshToken ,profile,cb)=>{
           // checking if the user is already present in the database
           const user =await loggedInUser.findOne({
               accountId:profile.id,
                provider:'github'
           });
           // store the new user in the database
           if(!user){
           const user= new loggedInUser({
               name:profile.username,
               accountId:profile.id,
               provider:profile.provider
           });
           await user.save();
           //  console.log(user);
           return cb(null);
       }
       else {
           console.log("GitHub user already present in the database");
           return cb(null,profile);
       }
   }));

// Serialize user into the session
passport.serializeUser((user, cb) => {
    cb(null, user);
  });

// Deserialize user from the session
passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });     


app.get('/login',(req,res)=>{
    res.send('<a href="/auth/authentication/github">Login with GitHub</a>');
})
app.get('/logout',(req,res)=>{
    res.send('<a href="/auth/signout">Logout with GitHub</a>');
})
// API routes
app.use('/auth',authRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });