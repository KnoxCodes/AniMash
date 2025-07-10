import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const API = import.meta.env.VITE_API_BASE_URL;

export default function Voting() {
  const [characters, setCharacters] = useState([]);

  const fetchCharacters = async () => {
    const res = await axios.get(`${API}/vote`);
    setCharacters(res.data);
  };

  const vote = async (id) => {
    await axios.put(`${API}/vote`, { id });
    fetchCharacters(); // Load next 2 characters
  };

  useEffect(() => {
    fetchCharacters();
  }, []);

  return (
    <div className='body'>
      <div className="vtitle"><h1>Voting Page</h1></div>
      <div className="vsubtitle"><h2>Choose the best one!!!</h2></div>
      <div className="images">
        {characters.length === 2 && (
          <>
            <div className="image1" onClick={() => vote(characters[0]._id)}>
              <img src={characters[0].image} alt={characters[0].name} width={200} height={300} />
              <div className="char-name">{characters[0].name}</div>
            </div>
            <div className="or">OR</div>
            <div className="image2" onClick={() => vote(characters[1]._id)}>
              <img src={characters[1].image} alt={characters[1].name} width={200} height={300} />
              <div className="char-name">{characters[1].name}</div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
