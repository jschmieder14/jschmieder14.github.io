import mongoose from "mongoose";

const educationSchema = new mongoose.Schema({
    school: {
        type: String,
        required: true,
    },
    degree: {
        type: String,
        required: true,
    },
    field: {
        type: String,
        required: true,
    },
    grade: {
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
    thesis: {
        type: String,
        required: false,
    },
    dissertation: {
        type: String,
        required: false,
    },
    honors: {
        type: String,
        required: false,
    }
},
{ timestamps: true }
);

const Education = mongoose.model("Education", educationSchema);

export default Education;

