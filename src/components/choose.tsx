import React, { useState } from 'react';
import '../styles/choose.css'

const luoghi = [
    "Bagno", "Cucina", "Soggiorno", "Camera Da Letto", "Garage", "Giardino",
    "Balcone", "Terrazza", "Cantina", "Soffitta", "Scala", "Ingresso", 
    "Corridoio", "Studio", "Ufficio", "Biblioteca", "Scuola", "Aula", 
    "Palestra", "Piscina", "Stadio", "Campo Da Calcio", "Campo Da Tennis", 
    "Cinema", "Teatro", "Museo", "Galleria D'Arte", "Ristorante", "Bar", 
    "Pizzeria", "Discoteca", "Hotel", "Ostello", "Campeggio", "Spiaggia", 
    "Mare", "Lago", "Fiume", "Montagna", "Bosco", "Parco", "Piazza", 
    "Mercato", "Supermercato", "Negozio", "Farmacia", "Ospedale", "Clinica", 
    "Stazione Ferroviaria", "Fermata Dell'Autobus", "Aeroporto", "Porto", 
    "Auto", "Treno", "Autobus", "Aereo", "Nave", "Bicicletta", "Moto", 
    "Ascensore", "Parcheggio", "Strada", "Marciapiede", "Autostrada", 
    "Tunnel", "Ponte", "Chiesa", "Cimitero", "Monastero", "Sinagoga", 
    "Moschea", "Tempio", "Sala Conferenze", "Auditorium", "Laboratorio", 
    "Studio Televisivo", "Studio Radiofonico", "Fabbrica", "Magazzino", 
    "Officina", "Caserma", "Tribunale", "Carcere", "Stazione Di Polizia", 
    "Caserma Dei Pompieri", "Campo Da Gioco", "Parco Giochi", "Fattoria", 
    "Serra", "Orto", "Spiaggia Privata", "Cabina Telefonica", "Pista Da Sci", 
    "Pista Di Pattinaggio", "Zoo", "Acquario", "Luna Park", "Planisfero"
  ];
  
  


interface ChooseProps {
    onNext: () => void;
    gameState: { players: number, minutes: number};
  }

  const chooseWord = () => {
    const word = luoghi[randomNumberInRange(0,luoghi.length-1)]
    return word.charAt(0).toUpperCase() + word.slice(1)
  }
  
  const randomNumberInRange = (min: number, max: number) => {
    return Math.floor(Math.random()
        * (max - min + 1)) + min;
}

const Choose: React.FC<ChooseProps> = ({ onNext, gameState }) => {

    const { players } = gameState;

    const [isPopupVisible, setIsPopupVisible] = useState<boolean>(false);
    const [selectedCard, setSelectedCard] = useState<number | null>(null);
    const [disabledCards, setDisabledCards] = useState<number[]>([]);
    const [place, ] = useState<string>(chooseWord());
    const [spy, ] = useState<number>(randomNumberInRange(0, players-1));

    const cards = Array.from({ length: players }, (_, index) => ({
        id: index + 1,
        content: (index == spy)?"Spia": `${place}`,
      }));

      const handleCardClick = (cardId: number) => {
        if (disabledCards.includes(cardId)) return;
        setSelectedCard(cardId);
        setIsPopupVisible(true);
        setDisabledCards((prev) => [...prev, cardId]);
      };
    
      const dismissPopup = () => {
        setIsPopupVisible(false);
        setSelectedCard(null);
      };


  return (
    <div className="container">
      <h2>Scegli la tua carta!</h2>
      <p>Ogni giocatore deve scegliere la propria carta</p>
      <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
        {cards.map((card) => (
          <div
            key={card.id}
            className={`card ${disabledCards.includes(card.id) ? 'disabled' : ''}`}
            onClick={() => handleCardClick(card.id)}
          >
            {disabledCards.includes(card.id)?'':'Scopri'}
          </div>
        ))}
      </div>

      {/* Popup */}
      {isPopupVisible && (
        <div
        className= 'popup'
        >
          <div
            className= 'popup-content'
          >
            <h3>{cards.find((c) => c.id === selectedCard)?.content}</h3>
            <button onClick={dismissPopup} style={{ marginTop: '20px' }}>
              Chiudi
            </button>
          </div>
        </div>
      )}

      <button disabled={disabledCards.length!=players} onClick={onNext} style={{ marginTop: '20px' }}>
        Inizia il gioco!
      </button>
    </div>
  );
};

export default Choose;
