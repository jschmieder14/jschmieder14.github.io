import mongoose from "mongoose";

const workSchema = new mongoose.Schema({
   companyTitle: {
         type: String,
         required: true,
   },
    positionTitle: {
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
    location: {
            type: String,
            required: true,
    },
    responsibilities: {
            type: String,
            required: true,
    },
    honors: {
            type: String,
            required: true,
    },
    honorDate: {
            type: Date,
            required: true,
    },
    honorOrganization: {
            type: String,
            required: true,
    },
},)

const Work = mongoose.model("Work", workSchema);

export default Work;
