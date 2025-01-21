import mongoose from "mongoose";

const involvementSchema = new mongoose.Schema({
   organization: {
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

const Involvement = mongoose.model("Involvement", involvementSchema);

export default Involvement;
