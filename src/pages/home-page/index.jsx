import { useEffect, useState } from "react";
import RandomCharacter from "./components/random-character/randomCharacter";
import Characters from "./components/characters/characters";
import CharacterInfo from "./components/character-info/characterInfo";
import "./_characters.scss";
import ErrorBoundary from "../../components/errorBoundary";

function HomePage() {
    return <>
            <RandomCharacter/>
            <View/>
        </>
}

const View = () => {
    const [charId, setCharId] = useState();

    return <div className="main__content">
        <ErrorBoundary>
            <Characters setCharId={setCharId}/>
        </ErrorBoundary>
        <ErrorBoundary>
            <CharacterInfo charId={charId}/>
        </ErrorBoundary>
    </div>
}

export default HomePage;