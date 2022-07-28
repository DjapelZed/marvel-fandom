const Character = ({char, setCharId}) => {
    return <div onClick={() => setCharId(char.id)} className="characters__character character">
                <div className="character__img">
                    <img src={char.thumbnail} alt={char.name}/>
                </div>
                <h3 className="character__title title">{char.name}</h3>
            </div>
}

export default Character;