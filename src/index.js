import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import MarvelService from './services/MarvelService';

const ms = new MarvelService();
// ms.getCharacters()
//   .then(characters => characters.forEach(character => console.log(character.id)));
ms.getCharacter(1017100)
  .then(character => console.log(character));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    
  </React.StrictMode>
);


