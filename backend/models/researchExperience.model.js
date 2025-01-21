import mongoose from "mongoose";

const researchExperienceSchema = new mongoose.Schema({
        institution: {
            type: String,
            required: true,
        },
        department: {
            type: String,
            required: true,
        },
        positionTitle: {
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
        location: {
            type: String,
            required: true,
        },
        principalInvestigator: {
            type: String,
            required: true,
        },
        projectTitle: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    }
);

const ResearchExperience = mongoose.model("ResearchExperience", researchExperienceSchema);

export default ResearchExperience;
