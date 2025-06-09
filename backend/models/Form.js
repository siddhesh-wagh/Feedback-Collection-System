const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  type: { type: String, required: true, enum: ['text', 'rating', 'multiple-choice'] },
});

const formSchema = new mongoose.Schema({
  title: { type: String, required: true },
  questions: [questionSchema],
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Form', formSchema);
