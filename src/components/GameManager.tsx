import React, { useState } from 'react';
import Initial from '../components/initial';
import Choose from '../components/choose';
import Ingame from '../components/ingame';


interface GameState {
    players: number;
    minutes: number;
}

const GameManager: React.FC = () => {
    const [currentPhase, setCurrentPhase] = useState<number>(1);
    const [gameState, setGameState] = useState<GameState>({ players: 0, minutes: 0 });

    const goToNextPhase = () => {
        setCurrentPhase((prev) => prev + 1);
    };

    const endGame = () => {
        setCurrentPhase(1);
    };

    const renderPhase = () => {
        switch (currentPhase) {
            case 1:
                return <Initial onNext={goToNextPhase} setGameState={setGameState} />;
            case 2:
                return <Choose onNext={goToNextPhase} gameState={gameState} />;
            case 3:
                return <Ingame onNext={endGame} gameState={gameState} />;
            default:
                return <h1>Oops, non dovresti essere qui!</h1>;
        }
    };

    return (
        <div>
            {renderPhase()}
        </div>
    );
};

export default GameManager;
