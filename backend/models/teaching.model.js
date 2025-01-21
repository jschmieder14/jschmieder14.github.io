import mongoose from "mongoose";

const teachingSchema = new mongoose.Schema({
   institution: {
       type: String,
       required: true,
   },
    institutionStartDate: {
        type: Date,
        required: true,
    },
    institutionEndDate: {
        type: Date,
        required: true,
    },
    courseID: {
        type: String,
        required: true,
    },
    courseName: {
        type: String,
        required: true,
    },
    courseStartDate: {
        type: Date,
        required: true,
    },
    courseEndDate: {
        type: Date,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    courseType: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
},)

const Teaching = mongoose.model("Teaching", teachingSchema);

export default Teaching;
