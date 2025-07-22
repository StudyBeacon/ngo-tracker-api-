import mongoose from 'mongoose';

const projectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: String,
  status: { type: String, enum: ['active', 'completed'], default: 'active' },
  startDate: Date,
  endDate: Date,
  ngo: { type: mongoose.Schema.Types.ObjectId, ref: 'Ngo' },
}, { timestamps: true });

export default mongoose.model('Project', projectSchema);