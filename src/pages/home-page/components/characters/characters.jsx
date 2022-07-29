import { Button } from "../../../../components/button";
import { Spinner } from "../../../../components/spinner";
import Character from "../character/character";

const Characters = ({chars, loading, setCharId, updateChars, loadingItems}) => {
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

export default Characters;