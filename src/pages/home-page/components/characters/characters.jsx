import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import { Button } from "../../../../components/button";
import { Spinner } from "../../../../components/spinner";
import MarvelService from "../../../../services/MarvelService";
import Character from "../character/character";

const Characters = ({setCharId}) => {
    const [loading, setLoading] = useState(true);
    const [chars, setChars] = useState([]);
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
    
    const spinner = loading ? <Spinner/> : null;
    const disabled = (loadingItems || loading) ? true : false;
    const characters = !spinner ? chars.map(char => <Character setCharId={setCharId} key={char.id} char={char}/>) : null 
    return <div className="content__characters characters">
        <div className="characters__container">
            {spinner}
            {characters}
        </div>
        <div className="characters__load-more load-more">
            <Button onClick={updateChars} title="LOAD MORE" long={true} disabled={disabled}/>
        </div>
    </div>
}

Characters.propTypes = {
    updateChars: PropTypes.func
}

export default Characters;