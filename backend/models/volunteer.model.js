import mongoose from "mongoose";

const volunteerSchema = new mongoose.Schema({
   volunteerTitle: {
         type: String,
         required: true,
   },
    hours: {
        type: Number,
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
        required: true,
    },

},)

const Volunteer = mongoose.model("Volunteer", volunteerSchema);

export default Volunteer;
