import mongoose from "mongoose";

const honorsSchema = new mongoose.Schema({
   honorTitle: {
       type: String,
       required: true,
   },
   receiptDate: {
         type: Date,
         required: true,
   },
},)

const Honors = mongoose.model("Honors", honorsSchema);

export default Honors;
