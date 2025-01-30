const express =require('express');
const router =express.Router();
const passport =require ('passport');
const GitHubStrategy =require('passport-github2').Strategy;
const authControllers=require('../Controllers/authController');
const session=require('express-session')

//Registration Route
router.post('/register',authControllers.teamRegister);

// login route    
router.get('/authentication/github',passport.authenticate('github'));
router.get('/authentication/github/callback',
             passport.authenticate('github',{failureRedirect:'/auth/authentication/github/error'}),
             (req,res)=>{ 
                //suceessful authentication
                console.log("successful authentication");
                res.redirect('/logout')
             } )  
router.get('/authentication/github/error',(req,res)=>{
    console.log("Error")
    res.send('Error while logging in with GitHub');
})             

 // logout route
router.get('/signout',(req,res)=>{
    try{
        req.session.destroy(function(err){
            console.log('session destroyed');
        })
        res.redirect('/login');
    }catch(err){
        res.status(400).send('unable to signout');
    }
})

module.exports=router;