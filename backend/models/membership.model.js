import mongoose from "mongoose";

const membershipSchema = new mongoose.Schema({
   organization: {
       type: String,
       required: true,
   },
},)

const Membership = mongoose.model("Membership", membershipSchema);

export default Membership;
