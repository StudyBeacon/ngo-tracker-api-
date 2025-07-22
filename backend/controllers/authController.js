import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

export const register = async (req, res) => {
  const user = await User.create(req.body);
  const token = generateToken(user._id);
  res.json({ token, role: user.role });
};

export const login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (!user || !(await user.matchPassword(password))) return res.status(400).send('Invalid credentials');
  const token = generateToken(user._id);
  res.json({ token, role: user.role });
};