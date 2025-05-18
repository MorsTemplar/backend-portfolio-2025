const Education = require('../models/Education');

exports.getAllEducation = async (req, res) => {
  const records = await Education.find();
  res.json(records);
};

exports.getEducationById = async (req, res) => {
  const record = await Education.findById(req.params.id);
  res.json(record);
};

exports.createEducation = async (req, res) => {
  const newRecord = await Education.create(req.body);
  res.status(201).json(newRecord);
};

exports.updateEducation = async (req, res) => {
  const updated = await Education.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteEducation = async (req, res) => {
  await Education.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};
