// models/Ngo.js
import mongoose from 'mongoose';

const ngoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  registrationNumber: { type: String, unique: true },
  contactEmail: String,
  website: String,
  verified: { type: Boolean, default: false },
  description: String,
  location: String,
  projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }],
});

export default mongoose.model('Ngo', ngoSchema);