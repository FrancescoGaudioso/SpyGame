import React, { useState, useEffect } from "react";
import '../styles/ingame.css'

interface IngameProps {
    onNext: () => void;
    gameState: { players: number, minutes: number};
  }
  
const Ingame: React.FC<IngameProps> = ({ onNext, gameState }) => {
    const [secondsRemaining, setSecondsRemaining] = useState<number>(gameState.minutes * 60);
  const [timerRunning, ] = useState<boolean>(true);
  const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);

  useEffect(() => {
    if (secondsRemaining <= 0 || !timerRunning) {
        setIsPopupVisible(true)
        return;
    }
    const intervalId = setInterval(() => {
      setSecondsRemaining(prev => prev - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [secondsRemaining, timerRunning]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  };
  return (
    
    <div className="container">
        
      <h2>Trova la spia!</h2>
      <p>Tempo rimanente: {formatTime(secondsRemaining)}</p>

{/* Popup */}
{isPopupVisible && (
        <div
        className= 'popup'
        >
          <div
            className= 'popup-content'
          >
            <h3>Partita terminata</h3>
            <button onClick={onNext} style={{ marginTop: '20px' }}>
            Torna alla pagina iniziale
            </button>
          </div>
        </div>
      )}

      <button onClick={() => setIsPopupVisible(true)}>Termina partita</button>
    </div>
  );
};

export default Ingame;
