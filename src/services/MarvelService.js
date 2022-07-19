class MarvelService{
    _url = "https://gateway.marvel.com:443/v1/public/";
    _key = process.env.REACT_APP_MARVEL_API_KEY;

    get = async url => {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Fetch Error: ${url}, STATUS ${response.status}`);
        return await response.json();
    };

    getCharacters = () => {
        const url = `${this._url}characters?apikey=${this._key}`
        const response = this.get(url);
        const characters = response.then(r => r.data.results);
        return characters;
    };

    getCharacter = id => {
        const url = `${this._url}characters/${id}?apikey=${this._key}`;
        const response = this.get(url);
        const character = response.then(r => r.data.results[0]);
        return character;
    };
}

export default MarvelService;