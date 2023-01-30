import mongoose from "mongoose";

const { Schema } = mongoose;

const entrySchema = new Schema({
  user: { type: String },
  date: { type: String },
  mood: { type: String },
  good: { type: String },
  bad: { type: String },
});

const Entry = mongoose.models.Word || mongoose.model("Entry", entrySchema);

export default Entry;
