import mongoose, { Types } from "mongoose";

const schema = new mongoose.Schema({
    content:String,
    attachment:[{
        public_id:{
            type:String,
            required:true
        },
        url:{
            type:String,
            required:true
        },
    }],
    sender:{
        type:Types.ObjectId,
        ref:"User",
        required:true
    },
    chat:{
        type:Types.ObjectId,
        ref:"Chat",
        required:true
    },
},{
    timestamps:true
});

export const Message = mongoose.models.Message || mongoose.model("Message", schema);