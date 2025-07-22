import mongoose from 'mongoose';

const ngoSchema = new mongoose.Schema({
  name: String,
  registrationNumber: { type: String, unique: true },
  contactEmail: String,
  location: String,
  description: String,
  verified: { type: Boolean, default: false },
});

export default mongoose.model('Ngo', ngoSchema);