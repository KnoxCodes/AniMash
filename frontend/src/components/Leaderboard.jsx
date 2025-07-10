import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './styles.css';

const API = import.meta.env.VITE_API_BASE_URL;

function Leaderboard() {
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    axios.get(`${API}/leaderboard`).then((res) => {
      setLeaders(res.data);
    });
  }, []);

  return (
    <div className='body'>
      <div className="ltitle"><h1>Leaderboard</h1></div>
      <div className="leaderboard-list">
        {leaders.map((char, index) => (
          <div key={char._id} style={{ margin: '10px 0' }}>
            <h3>{index + 1}. {char.name} — {char.votes} votes</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Leaderboard;
