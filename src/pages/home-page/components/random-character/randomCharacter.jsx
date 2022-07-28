import "./_random.scss";
import decor from "../../../../resources/img/decoration.png";
import { Button } from "../../../../components/button";
import { useEffect, useState } from "react";
import { Spinner } from "../../../../components/spinner";
import { Error } from "../../../../components/error";
import MarvelService from "../../../../services/MarvelService";

const RandomCharacter = () => {
    const [name, setName] = useState();
    const [thumbnail, setThumbnail] = useState();
    const [description, setDescription] = useState();
    const [homepage, setHomepage] = useState();
    const [wiki, setWiki] = useState();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState();

    const mv = new MarvelService();

    const onError = () => {
        setLoading(false);
        setError(true);
    }

    const onCharacterLoaded = () => {
        setLoading(false);
    }

    const updateCharacter = () => {
        setLoading(true);
        const id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000);
        mv.getCharacter(id)
            .then(({name, description, thumbnail, homepage, wiki}) => {
                setName(name);
                setThumbnail(thumbnail);
                setDescription(description);
                setHomepage(homepage);
                setWiki(wiki);
            })
            .then(onCharacterLoaded)
            .catch(onError);
    }

    useEffect(() => {
        updateCharacter();
    }, []);
    
    const errorMessage = error ? <Error/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error) ? <View name={name} 
                                                description={description} 
                                                thumbnail={thumbnail} 
                                                homepage={homepage} 
                                                wiki={wiki}/> : null;
    return <section className="main__random random">
                {errorMessage}
                {spinner}
                {content}
                <div className="random__section description">
                    <div className="random__content">
                        <div className="random__text">
                            Random character for today!
                        </div>
                        <div className="random__text">
                            Do you want to get to know him better?
                        </div>
                        <div className="random__choose-another">
                            <div class="random__text">Or choose another one</div>
                            <Button onClick={updateCharacter} title="Try It"/>
                        </div>
                    </div>
                    <div className="random__decoration">
                        <img src={decor} alt="decor"/>
                    </div>
                </div>
            </section>
}

const View = ({name, description, thumbnail, homepage, wiki}) => {
    return <div className="random__section character">
    <div className="character__img">
        <img src={thumbnail} alt={name} title={name}/>
    </div>
    <div className="character__info">
        <h3 className="character__title">{name}</h3>
        <p className="character__text">
            {description}
        </p>
        <div className="buttons">
            <Button title="HOMEPAGE" href={homepage}/>
            <Button title="WIKI" href={wiki} secondary={true}/>
        </div>
    </div>
</div>
}

export default RandomCharacter;