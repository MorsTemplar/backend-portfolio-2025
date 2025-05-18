const Project = require('../models/Project');

exports.getAllProjects = async (req, res) => {
  const projects = await Project.find();
  res.json(projects);
};

exports.getProjectById = async (req, res) => {
  const project = await Project.findById(req.params.id);
  res.json(project);
};

exports.createProject = async (req, res) => {
  const newProject = await Project.create(req.body);
  res.status(201).json(newProject);
};

exports.updateProject = async (req, res) => {
  const updated = await Project.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
};

exports.deleteProject = async (req, res) => {
  await Project.findByIdAndDelete(req.params.id);
  res.json({ message: 'Deleted successfully' });
};
