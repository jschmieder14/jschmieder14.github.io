import mongoose from "mongoose";

const publicationSchema = new mongoose.Schema({
    institution: {
        type: String,
        required: false,
    },
    positionTitle: {
        type: String,
        required: false,
    },
    positionStart: {
        type: Date,
        required: false,
    },
    positionEnd: {
        type: Date,
        required: false,
    },
    publicationType: {
        enum: ["Journal Publication", "Conference Presentations", "Book Chapter", "Abstracts",
        "Other Materials", "Patents", "Research Grants","In Preparation"],
        required: true,
    },
    projectTitle: {
        type: String,
        required: true,
    },
    completion: {
        enum: ["Completed", "In Progress"],
        required: false,
    },
    journal: {
        type: String,
        required: false,
    },
    volume: {
        type: String,
        required: false,
    },
    issue: {
        type: String,
        required: false,
    },
    page: {
        type: String,
        required: false,
    },
    doi: {
        type: String,
        required: false,
    },
    url: {
        type: String,
        required: false,
    },
    authors: {
        type: String,
        required: false,
    },
    abstract: {
        type: String,
        required: false,
    },
    keywords: {
        type: String,
        required: false,
    },
    conference: {
        type: String,
        required: false,
    },
    publicationDate: {
        type: Date,
        required: false,
    },
    principalInvestigator: {
        type: String,
        required: false,
    },
    cost: {
        type: Number,
        required: false,
    },

},);

const Publication = mongoose.model("Publication", publicationSchema);

export default Publication;
