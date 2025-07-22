import React, { useEffect, useState } from 'react';
import { api } from '../utils/api';
import './Dashboard.css';

interface NGO {
  _id: string;
  name: string;
  verified: boolean;
}

const Dashboard: React.FC = () => {
  const [ngos, setNgos] = useState<NGO[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    api
      .get('/ngos')
      .then((res) => setNgos(res.data))
      .catch(() => setError('Failed to load NGOs. Please try again.'));
  }, []);

  return (
    <section className="dashboard">
      <h2>Registered NGOs</h2>

      {error && <p className="error">{error}</p>}

      {ngos.length === 0 && !error ? (
        <p>No NGOs found.</p>
      ) : (
        <ul>
          {ngos.map((ngo) => (
            <li key={ngo._id}>
              {ngo.name} {ngo.verified ? '✅ Verified' : '❌ Unverified'}
            </li>
          ))}
        </ul>
      )}
    </section>
  );
};

export default Dashboard;