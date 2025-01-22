import React, { useState } from 'react';
import '../styles/initial.css'

interface InitialProps {
    onNext: () => void;
    setGameState: React.Dispatch<React.SetStateAction<{ players: number , minutes: number}>>;
}

const Initial: React.FC<InitialProps> = ({ onNext , setGameState}) => {
    const [players, setPlayers] = useState<number>(3);
    const [minutes, setMinutes] = useState<number>(5);
  
    const handleNext = () => {
      setGameState((prevState) => ({ ...prevState, players, minutes }));
      onNext();
    };

  return (
    <div className="container">
      <h2>Inizia una partita!</h2>
      <p>Scegli numero di giocatori e durata della partita</p>
      <div>
        <label>
          Giocatori: <strong>{players}</strong>
        </label>
        <input
          type="range"
          min="3"
          max="15"
          value={players}
          onChange={(e) => setPlayers(Number(e.target.value))}
        />
      </div>
      <div>
        <label>
          Durata (minuti): <strong>{minutes}</strong>
        </label>
        <input
          type="range"
          min="5"
          max="30"
          value={minutes}
          onChange={(e) => setMinutes(Number(e.target.value))}
        />
      </div>
      <button onClick={handleNext}>Vai alla scelta delle carte</button>
    </div>
  );
};

export default Initial;
