import { useEffect, useState } from "react";
import RandomCharacter from "./components/random-character/randomCharacter";
import Characters from "./components/characters/characters";
import CharacterInfo from "./components/character-info/characterInfo";
import MarvelService from "../../services/MarvelService";
import "./_characters.scss";
import ErrorBoundary from "../../components/errorBoundary";

function HomePage() {
    const [chars, setChars] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingItems, setLoadingItems] = useState(false);
    const [offset, setOffset] = useState(0);

    const mv = new MarvelService();
    
    const updateChars = () => {
        setLoadingItems(true)
        const characters = mv.getCharacters({offset: offset});
        characters.then(characters => {
            setChars([...chars, ...characters]);
            setOffset(offset + 9)
            setLoading(false);
            setLoadingItems(false);
        });    
    };

    useEffect(() => {
        updateChars();
    }, []);

    return <>
            <RandomCharacter/>
            <View chars={chars} loading={loading} updateChars={updateChars} loadingItems={loadingItems}/>
        </>
}

const View = ({chars, loading, updateChars, loadingItems}) => {
    const [charId, setCharId] = useState();

    return <div className="main__content">
        <Characters updateChars={updateChars} setCharId={setCharId} chars={chars} loading={loading} loadingItems={loadingItems}/>
        <ErrorBoundary>
            <CharacterInfo charId={charId}/>
        </ErrorBoundary>
    </div>
}

export default HomePage;