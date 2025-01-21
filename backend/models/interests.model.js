import mongoose from "mongoose";

const interestSchema = new mongoose.Schema({
   title: {
       type: String,
       required: true,
   },
    description: {
            type: String,
            required: true,
    },
},)

const Interest = mongoose.model("Interest", interestSchema);

export default Interest;
