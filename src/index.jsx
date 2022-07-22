import React from 'react';
import ReactDOM from 'react-dom/client';
import MarvelService from './services/MarvelService';
import { Button } from './components/button';
import { Banner } from './components/banner';
import Header from './containers/header';
import "./resources/main.scss";

const ms = new MarvelService();
// ms.getCharacters()
//   .then(characters => characters.forEach(character => console.log(character.id)));
ms.getCharacter(1017100)
  .then(character => console.log(character));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <div className='wrapper'>
      <Header/>
      <Banner/>
      <Button title="Test Button" onClick={() => console.log(1)} long={true} secondary={true}/>
    </div>
  </React.StrictMode>
);