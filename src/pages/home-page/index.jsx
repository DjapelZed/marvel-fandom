import { useEffect, useState } from "react";
import RandomCharacter from "./components/random-character/randomCharacter";
import Characters from "./components/characters/characters";
import CharacterInfo from "./components/character-info/characterInfo";
import MarvelService from "../../services/MarvelService";
import "./_characters.scss";

function HomePage() {
    const [chars, setChars] = useState([]);
    
    const mv = new MarvelService();
    
    const updateChars = () => {
        const characters = mv.getCharacters();
        characters.then(characters => {
        setChars(characters);
    });    
    };

    useEffect(() => {
        updateChars();
    }, []);

    return <>
            <RandomCharacter/>
            <View chars={chars.slice(0, 9)}/>
        </>
    
}

const View = ({chars}) => {    
    return <div className="main__content">
        <Characters chars={chars}/>
        {/* <CharacterInfo char={chars[0]}/> */}
    </div>
}

export default HomePage;