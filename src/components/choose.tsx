import React, { useState } from 'react';
import '../styles/choose.css'

const luoghi = [
  "Bagno", "Cucina", "Soggiorno", "Camera Da Letto", "Garage", "Giardino", "Parco", "Scuola", "Ufficio", 
  "Negozio", "Biblioteca", "Ospedale", "Cinema", "Palestra", "Stazione", "Aeroporto", "Museo", "Ristorante", 
  "Chiesa", "Supermercato", "Farmacia", "Teatro", "Banca", "Bar", "Stadio", "Spiaggia", "Montagna", "Fiume", 
  "Lago", "Piscina", "Rifugio", "Albergo", "Residenza", "Aula", "Sala Conferenze", "Giardinetto", "Centro Commerciale", 
  "Ferrovia", "Viale", "Piazza", "Porto", "Parcheggio", "Fattoria", "Azienda", "Laboratorio", "Mensa", "Accademia", 
  "Centro di Yoga", "Fermata dell’autobus", "Zoo", "Planetario", "Caffetteria", "Gelateria", "Fermata del tram", 
  "Acquario", "Chiosco", "Falegnameria", "Panetteria", "Autolavaggio", "Condominio", "Studio Medico", "Finestra", 
  "Oratorio", "Villaggio", "Cimitero", "Circolo", "Area Picnic", "Edificio Storico", "Fattoria Didattica", 
  "Oasi Naturale", "Basilica", "Castello", "Palazzo", "Roccia", "Ponte", "Torre", "Chalet", "Casetta in Legno", 
  "Molo", "Galleria d’Arte", "Cattedrale", "Osservatorio", "Palazzo Comunale", "Tribunale", "Carcere", "Armeria", 
  "Rifugio di Montagna", "Pista da Sci", "Cave", "Bunker", "Grotta", "Fornace", "Focolaio", "Scuderia", "Campagna", 
  "Mura", "Caffè Letterario", "Hammam", "Parco Avventura", "Stabilimento Balneare", "Discoteca", "Night Club", 
  "Sala Giochi", "Escursione", "Sentiero", "Camping", "Caserma", "Mensa Scolastica", "Aula Magna", "Centro Benessere", 
  "Luna Park", "Parco Tematico", "Planetario", "Giro in Barca", "Centro Termale", "Giostra", "Scivolo", "Cascata", 
  "Centro Congressi", "Stazione della Metro", "Azienda Agricola", "Piazzale", "Portico", "Galleria Commerciale", 
  "Strada Pedonale", "Ferrovia Storica", "Terme", "Rovine", "Villaggio Turistico", "Fornitore di Servizi", "Area Residenziale", 
  "Stazione di Servizio", "Sottopassaggio", "Parco Nazionale", "Ciclo-Pista", "Torre di Controllo", "Pista Ciclabile", 
  "Villa", "Area Industriale", "Capannone", "Centro di Ricerca", "Centro Storico", "Basilica", "Muzeo della Scienza", 
  "Parco Archeologico", "Piazza del Mercato", "Fattoria Didattica", "Tenda", "Campeggio", "Masseria", "Giardino Botanico", 
  "Fiume Navigabile", "Ristorante Tipico", "Baita", "Foresta", "Porticciolo", "Borgo", "Libreria", "Fiera", 
  "Tempio", "Villa Storica", "Cava", "Trattoria", "Bottega", "Salotto", "Trampolino", "Cucina Industrial", "Vetrina", 
  "Scalinata", "Cupola", "Sorgente", "Tevere", "Isola", "Lago Alpino", "Mercato Rionale", "Piazza del Duomo", "Chiesa Parrocchiale", 
  "Sala da Ballo", "Torre Medievale", "Tetto", "Osservatorio Astronomico", "Sentiero di Montagna", "Fiume Di Montagna", 
  "Sentiero di Foresta", "Negozio di abbigliamento", "Stazione Spaziale", "Sala d’attesa", "Ospedale Psichiatrico", "Villa Comunale", 
  "Vigneto", "Centro di Supporto", "Antiquariato", "Ristorante Romantico", "Basilica Minore", "Stazione dei Carabinieri", 
  "Sede del Comune", "Casinò", "Parco Acquatico", "Chiosco di Limonata", "Lido", "Caffè Pubblico", "Laboratorio di Fisica", 
  "Giardino Segreto", "Chiesa Evangelica", "Ristorante Vegetariano", "Piazza della Libertà", "Accademia di Belle Arti", 
  "Università", "Centro di Educazione", "Parco per Bambini", "Ufficio Postale", "Salone delle Feste", "Luogo di culto", 
  "Struttura Alberghiera", "Spazio Comuni", "Club Sportivo", "Caffetteria Letteraria", "Pista di Atletica", "Campetto di Calcio", 
  "Club Privato", "Spazio Pubblico", "Piazza del Popolo", "Sala del Cinema", "Cinema all’aperto", "Aula Studio", "Sala Riunioni", 
  "Piazza del Mercato", "Piazza San Marco", "Mercato Contadino", "Trattoria Locale", "Centro di Terapia", "Biblioteca Comunale", 
  "Galleria di Moda", "Centro di Fitness", "Pizzeria", "Corte", "Stabilimento", "Giardino delle Rose", "Frutteto", "Picnic", 
  "Casa di Riposo", "Stazione Spaziale Internazionale", "Osservatorio della Natura", "Corridoio", "Fermata Taxi", "Sala Lettura"
];

const oggetti = [
  "Telefono","Sedia","Tavolo","Bicchiere","Forchetta","Coltello","Cucchiaio","Piatto","Bottiglia","Tazza",
  "Computer","Mouse","Tastiera","Monitor","Lampada","Libro","Quaderno","Penna","Matita","Evidenziatore",
  "Gomma","Zaino","Valigia","Portafoglio","Orologio","Bracciale","Anello","Occhiali","Chiave",
  "Portachiavi","Cuscino","Coperta","Lenzuolo","Cassetto","Armadio","Specchio","Spazzolino","Dentifricio","Asciugamano",
  "Sapone","Shampoo","Phon","Rasoio","Pettine","Spugna","Secchio","Scopa","Paletta","Straccio",
  "Lavatrice","Asciugatrice","Ferro da stiro","Stendino","Cestino","Sacchetto","Borsa","Busta","Scatola","Nastro adesivo",
  "Colla","Forbici","Righello","Calcolatrice","Agenda","Post-it","Stampante","Carta","Busta da lettera","Francobollo",
  "Sedia a rotelle","Termometro","Mascherina","Guanto","Cerotto","Benda","Cuscinetto","Siringa giocattolo","Pallone","Palla",
  "Racchetta","Corda","Pesetto","Tappetino","Bicicletta","Casco","Catena","Campanello","Pompa","Zappa",
  "Annaffiatoio","Vaso","Semi","Terriccio","Cesoie","Tagliaerba","Innaffiatrice","Carriola","Rastrello","Guanti da giardino",
  "Trapano","Cacciavite","Martello","Chiodo","Vite","Chiave inglese","Metro","Livella","Sega","Colla a caldo",
  "Pittura","Pennello","Rullo","Carta vetrata","Telo","Scala","Lampadina","Presa","Ciabatta elettrica","Batteria",
  "Telecomando","Antenna","Cuffie","Altoparlante","Microfono","Webcam","Power bank","Caricatore","Cavo USB","Hard disk",
  "Pen drive","Fotocamera","Treppiede","Scheda di memoria","Binocolo","Ombrello","Cappello","Cintura","Sciarpa","Guanti",
  "Scarpe","Stivali","Calzini","Maglietta","Felpa","Giacca","Pantaloni","Gonna","Abito","Cappotto",
  "Frigorifero","Freezer","Forno","Fornello","Microonde","Tostapane","Frullatore","Impastatrice","Pentola","Padella",
  "Coperchio","Colapasta","Tagliere","Mestolo","Frusta","Apriscatole","Spremiagrumi","Bilancia da cucina","Timer","Ciotola",
  "Scatoletta","Barattolo","Spezie","Olio","Sale","Pepe","Zucchero","Farina","Riso","Pasta",
  "Zuppiera","Caraffa","Bottiglia termica","Ghiaccio sintetico","Termos","Borsa frigo","Contenitore","Pellicola","Alluminio","Carta forno",
  "Album","Cornice","Fotografia","Quadro","Poster","Calendario","Mappa","Globo","Giocattolo","Bambola",
  "Macchinina","Puzzle","Costruzioni","Dado","Carte","Scacchiera","Libro illustrato","Colori","Pennarello","Pastelli",
  "Temperamatite","Elastico","Graffetta","Puntina","Spillatrice","Spilli","Astuccio","Porta penne","Rubinetto","Doccetta",
  "Sapone liquido","Dispenser","Cestino per la carta","Zerbino","Campanello","Citofono","Maniglia","Serratura","Tappeto","Ventilatore",
  "Climatizzatore","Termosifone","Sveglia","Radio","Registratore","Agenda elettronica","Tablet","E-reader","Console","Joystick",
  "Stampella","Gancio","Copriwater","Spazzolone","Secchiello","Candela","Fiammiferi"
];

  
  


interface ChooseProps {
    onNext: () => void;
    gameState: { players: number, minutes: number};
  }

  const chooseWord = () => {
    const word = oggetti[randomNumberInRange(0,oggetti.length-1)]
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
