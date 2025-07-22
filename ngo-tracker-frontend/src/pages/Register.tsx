// src/pages/Register.tsx
import React, { useState } from 'react';
import { api } from '../utils/api';

const Register: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('ngo');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await api.post('/auth/register', {
        name,
        email,
        password,
        role,
      });
      localStorage.setItem('token', data.token);
      localStorage.setItem('role', data.role);
      window.location.href = '/';
    } catch {
      setError('Registration failed. Please try again.');
    }
  };

  return (
    <form onSubmit={handleRegister} className="form-container">
      <h2>Register</h2>

      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter your name"
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter your email"
        required
      />

      <label htmlFor="password">Password</label>
      <input
        id="password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Choose a password"
        required
      />

      <label htmlFor="role">Role</label>
      <select
        id="role"
        value={role}
        onChange={(e) => setRole(e.target.value)}
        required
      >
        <option value="ngo">NGO</option>
        <option value="admin">Admin</option>
        <option value="donor">Donor</option>
      </select>

      <button type="submit">Register</button>

      {error && <p className="error">{error}</p>}
    </form>
  );
};

export default Register;