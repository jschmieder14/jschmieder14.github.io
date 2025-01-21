import mongoose from "mongoose";

const mentoringSchema = new mongoose.Schema({
   institution: {
       type: String,
       required: true,
   },
   studentName: {
       type: String,
       required: true,
   },
    studentTitle: {
        type: String,
        required: true,
    },
    studentDegree: {
        type: String,
        required: true,
    },
    studentInstitution: {
        type: String,
        required: true,
    },
    mentorStartDate: {
        type: Date,
        required: true,
    },
    mentorEndDate: {
        type: Date,
        required: true,
    },
    jobTitle: {
        type: String,
        required: true,
    },
    awards: {
        type: String,
        required: true,
    },
},)

const Mentoring = mongoose.model("Mentoring", mentoringSchema);

export default Mentoring;