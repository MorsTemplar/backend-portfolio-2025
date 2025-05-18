const mongoose = require('mongoose');

const EducationSchema = new mongoose.Schema({
  degree: String,
  university: String,
  year: String,
});

module.exports = mongoose.model('Education', EducationSchema);
