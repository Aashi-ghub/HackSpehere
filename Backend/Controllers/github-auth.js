const passport =require ('passport');
const GitHubStrategy =require('passport-github').Strategy;
const express =require('express');
const router =express.Router();


passport.use(
     new GitHubStrategy(
        { 
            clientID: process.env.GITHUB_CLIENT_ID,
            clientSecret:process.env.GITHUB_CLIENT_SECRET,
            callbackURL: process.env.GITHUB_CALLBACK_URL
            // 'http://localhost:3000/auth/github/callback'
        },
        async(accesToken ,refreshToken ,profile,cb)=>{
            // checking if the user is already present in the database
            const user =await loggedInUser.findOne({
                accountId:profile.id,
                 provider:'gitHub'
            });
            // store the new user in the database
            if(!user){
            const user= new loggedInUser({
                name:profile.username,
                accountId:profile.id,
                provider:profile.provider
            });
            await user.save();
            // console.log(user);
            return done(null,)
        }
        else {
            console.log("GitHub user already present in the database");
            return cb(null,profile);
        }
    }));

router.get('/authentication/github',passport.authenticate('github'));
router.get('/authentication/github/callback',
             passport.authenticate('github',{failureRedirect:'/authentication/github/error'}),
             (req,res)=>{ 
                //suceessful authentication
                res.redirect('/')
             } )  
router.get('/authentication/github/error',(req,res)=>{
    res.send('Error while logging in with GitHub');
})             


router.get('/signout',(req,res)=>{
    try{
        req.session.destory(function(err){
            console.log('session destroyed');
        })
        res.redirect('/auth/login');
    }catch(err){
        res.status(400).send('unable to signout');
    }
})
module.exports=router;
