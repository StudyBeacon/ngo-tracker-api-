import Project from '../models/Project.js';

export const createProject = async (req, res) => {
  try {
    const newProject = await Project.create({ ...req.body, ngo: req.user._id });
    res.status(201).json(newProject);
  } catch (err) {
    res.status(500).send('Error creating project');
  }
};

export const getProjectsByNgo = async (req, res) => {
  try {
    const projects = await Project.find({ ngo: req.params.ngoId });
    res.json(projects);
  } catch (err) {
    res.status(500).send('Error fetching projects');
  }
};