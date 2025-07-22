import Ngo from '../models/Ngo.js';

export const registerNgo = async (req, res) => {
  const ngo = await Ngo.create(req.body);
  res.status(201).json(ngo);
};

export const getAllNgos = async (req, res) => {
  const ngos = await Ngo.find();
  res.json(ngos);
};

export const verifyNgo = async (req, res) => {
  const ngo = await Ngo.findByIdAndUpdate(req.params.id, { verified: true }, { new: true });
  res.json(ngo);
};