import React, { useState } from 'react';
import { api } from '../utils/api';

const SubmitProject: React.FC = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await api.post('/projects/add', {
        title,
        description,
        startDate,
        endDate,
      });
      alert('Project submitted successfully!');
      setTitle('');
      setDescription('');
      setStartDate('');
      setEndDate('');
    } catch {
      alert('Failed to submit project. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Submit New Project</h2>

      <label htmlFor="title">Title</label>
      <input
        id="title"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Project Title"
        required
      />

      <label htmlFor="description">Description</label>
      <textarea
        id="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Describe your project"
        rows={4}
      />

      <label htmlFor="startDate">Start Date</label>
      <input
        id="startDate"
        type="date"
        value={startDate}
        onChange={(e) => setStartDate(e.target.value)}
        required
      />

      <label htmlFor="endDate">End Date</label>
      <input
        id="endDate"
        type="date"
        value={endDate}
        onChange={(e) => setEndDate(e.target.value)}
        required
      />

      <button type="submit">Submit Project</button>
    </form>
  );
};

export default SubmitProject;