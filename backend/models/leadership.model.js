import mongoose from "mongoose";

const leadershipSchema = new mongoose.Schema({
   title: {
       type: String,
       required: true,
   },
   organization: {
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

const Leadership = mongoose.model("Leadership", leadershipSchema);

export default Leadership;
