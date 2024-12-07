import mongoose from 'mongoose';

const newsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  status: { 
    type: String, 
    enum: ['pending', 'published', 'rejected'], 
    default: 'pending' 
  },
  timestamp: { type: Date, default: Date.now },
});

export default mongoose.model('News', newsSchema);
