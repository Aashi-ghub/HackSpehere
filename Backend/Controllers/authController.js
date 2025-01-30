const teamModel=require('../DB_Model/Team.model');

module.exports.teamRegister= async (req,res)=>{
    const {teamName,teamdescription,teamSize,members,theme,participantType,source}=req.body;
    try{
        if(!teamName ||!teamSize||!members||!theme ||!participantType||!source){
            return res.status(400).json({meassage:"All fields are required!"});
        }
        const userExsist= await teamModel.findOne({teamName});
        if(userExsist) {
            res.status(400);
            throw new Error("Team Name already exits");   
        }
        const team = new teamModel({
            teamName,
            teamdescription,
            teamSize,
            members,
            theme,
            participantType,
            source
        });
        await team.save();
        res.status(201).json({message:'Team Registration successfully!',team});
    }
    catch(err){
        console.log(err)
        res.status(400).json({message:'Server error',err});
    }
}
