// controllers/authController.js
import User from '../models/User.js';
import jwt from 'jsonwebtoken';

const generateToken = (user) =>
  jwt.sign({ id: user._id, role: user.role }, process.env.JWT_SECRET, {
    expiresIn: '7d',
  });

export const register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    const token = generateToken(user);
    res.status(201).json({ token, role: user.role });
  } catch (err) {
    console.error('Registration Error:', err.message);
    res.status(500).send('Server error during registration');
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).send('Email not found');
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(400).send('Invalid password');
    }

    const token = generateToken(user);
    res.json({ token, role: user.role });
  } catch (err) {
    console.error('Login Error:', err.message);
    res.status(500).send('Server error during login');
  }
};