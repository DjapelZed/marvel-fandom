import { Button } from "../../../../components/button";
import Character from "../character/character";

const Characters = ({chars}) => {
    return <div className="content__characters characters">
        <div className="characters__container">
            {chars.map(char => <Character key={char.name} char={char}/>)}
        </div>
        <div className="characters__load-more load-more">
            <Button title="LOAD MORE" long={true}/>
        </div>
    </div>
}

export default Characters;