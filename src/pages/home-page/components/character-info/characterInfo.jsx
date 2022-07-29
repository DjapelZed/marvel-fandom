import { useEffect, useState } from "react";
import { Button } from "../../../../components/button";
import { Error } from "../../../../components/error";
import { Spinner } from "../../../../components/spinner";
import LoaderInfo from "../../../../components/loader";
import MarvelService from "../../../../services/MarvelService";
import "./_character-info.scss";

const CharacterInfo = ({charId}) => {
    const [char, setChar] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState();

    const mv = new MarvelService();

    const updateCharInfo = () => {
        if (charId > 1000){
            setLoading(true);
            setError(false);
            mv.getCharacter(charId, true).then(res => {
                setChar(res);
                setLoading(false);
            }).catch(() => {
                setError(true);
                setLoading(false)
            })
        }
    };

    useEffect(() => {
        updateCharInfo();
    }, [charId]);
    
    const loader = char ||  error || loading ? null : <LoaderInfo/>
    const errorMsg = error ? <Error/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = (loading || error || loader) ? null : <View char={char}/>;
    return (
        <div class="content__character-info character-info">
            {loader}
            {content}
            {errorMsg}
            {spinner}
        </div>
    );
};

const View = ({char}) => {
    const comicsItems = char.comicsList.map((comics, i) => {
        return (
            <li key={i} class="comics__item">
                <a href={comics.resourceURI}>{comics.name}</a>
            </li>
        )
    });
    return (
        <>
            <div class="character-info__top">
                <div class="character-info__img">
                    <img src={char.thumbnail} alt={char.name}/>
                </div>
                <div class="character-info__block">
                    <h3 class="character-info__title character__title">{char.name}</h3>
                    <div class="character-info__buttons">
                        <Button href={char.homepage} title="HOMEPAGE"/>
                        <Button href={char.wiki} title="WIKI" secondary={true}/>
                    </div>
                </div>
            </div>
            <p class="character-info__description">
                {char.description}  
            </p>
            <div class="character-info__comics comics">
                <h4 class="comics__title">Comics:</h4>
                <ul class="comics__list">
                    {comicsItems.length > 0 ? null : "There is no comics with this character"}
                    {comicsItems}
                </ul>
            </div>
        </>
    )
};

export default CharacterInfo;