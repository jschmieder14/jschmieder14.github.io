import mongoose from "mongoose";

const skillSchema = new mongoose.Schema({
   skillType: {
       enum: ["Engineering", "Human", "In vitro"],
       required: true,
   },
    skillTitle: {
            type: String,
            required: true,
    },
},)

const Skill = mongoose.model("Skill", skillSchema);

export default Skill;
