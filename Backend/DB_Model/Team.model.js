const mongoose =require('mongoose');

const MemberSchema = new mongoose.Schema({
     name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    socialLink: {
        type: String,
        required: true
    },
    role: {
        type: String,
        required: true
    }
});

const Schema = new mongoose.Schema({
    teamName:{
        type:String,
        required:true
    },
    teamdescription:{
        type:String,
    },
    teamSize:{
        type:Number,
    },
    members:[MemberSchema],
    theme:{
        type:String,
        required:true
    },
    participantType:{
        type:String,
        required:true
    },
    source:{
        type:String,
        required:true
    }
})
const Team = mongoose.model('Team',Schema);
module.exports = Team;