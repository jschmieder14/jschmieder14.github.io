import mongoose from "mongoose";

const committeeSchema = new mongoose.Schema({
   committee: {
       type: String,
       required: true,
   },
    position: {
        type: String,
        required: true,
    },
    start: {
         type: Date,
         required: true,
    },
    end: {
         type: Date,
         required: true,
    },
    description: {
        type: String,
        required: true,
    },
},)

const Committee = mongoose.model("Committee", committeeSchema);

export default Committee;