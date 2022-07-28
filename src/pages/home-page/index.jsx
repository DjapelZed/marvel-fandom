import { useEffect, useState } from "react";
import RandomCharacter from "./components/random-character/randomCharacter";
import Characters from "./components/characters/characters";
import CharacterInfo from "./components/character-info/characterInfo";
import MarvelService from "../../services/MarvelService";
import "./_characters.scss";

function HomePage() {
    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);

    const mv = new MarvelService();
    
    const updateChars = () => {
        const characters = mv.getCharacters();
        characters.then(characters => {
        setChars(characters);
        setLoading(false);
    });    
    };

    useEffect(() => {
        updateChars();
    }, []);

    return <>
            <RandomCharacter/>
            <View chars={chars.slice(0, 9)} loading={loading}/>
        </>
    
}

const View = ({chars, loading}) => {
    const [charId, setCharId] = useState();

    return <div className="main__content">
        <Characters setCharId={setCharId} chars={chars} loading={loading}/>
        <CharacterInfo charId={charId}/>
    </div>
}

export default HomePage;