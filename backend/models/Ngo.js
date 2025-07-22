// models/Ngo.js
import mongoose from 'mongoose';

const ngoSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    registrationNumber: { type: String, unique: true, required: true },
    contactEmail: { type: String },
    location: { type: String },
    description: { type: String },
    verified: { type: Boolean, default: false },
    projects: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Project' }]
  },
  { timestamps: true }
);

export default mongoose.model('Ngo', ngoSchema);