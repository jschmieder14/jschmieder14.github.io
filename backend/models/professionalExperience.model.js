import mongoose from "mongoose";

const professionalExperienceSchema = new mongoose.Schema({
    organization: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true,
    },
    startDate: {
        type: Date,
        required: true,
    },
    endDate: {
        type: Date,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
},)

const ProfessionalExperience = mongoose.model("ProfessionalExperience", professionalExperienceSchema);

export default ProfessionalExperience;
