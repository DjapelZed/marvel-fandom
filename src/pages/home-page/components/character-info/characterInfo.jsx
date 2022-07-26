import { Button } from "../../../../components/button";
import "./_character-info.scss";

const CharacterInfo = ({char}) => {
    return <div class="content__character-info character-info">
                    <div class="character-info__top">
                        <div class="character-info__img">
                            <img src={char.thumbnail} alt={char.name}/>
                        </div>
                        <div class="character-info__block">
                            <h3 class="character-info__title character__title">{char.name}</h3>
                            <div class="character-info__buttons">
                                <Button title="HOMEPAGE"/>
                                <Button title="WIKI" secondary={true}/>
                            </div>
                        </div>
                    </div>
                    <p class="character-info__description">
                        {char.description}  
                    </p>
                    <div class="character-info__comics comics">
                        <h4 class="comics__title">Comics:</h4>
                        <ul class="comics__list">
                            <li class="comics__item">All-Winners Squad: Band of Heroes (2011) #3</li>
                            <li class="comics__item">AMAZING SPIDER-MAN VOL. 7: BOOK OF EZEKIEL TPB (Trade Paperback)</li>
                        </ul>
                    </div>
                </div>
}

export default CharacterInfo;