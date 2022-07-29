class MarvelService{
    _url = "https://gateway.marvel.com:443/v1/public/";
    _key = process.env.REACT_APP_MARVEL_API_KEY;

    get = async url => {
        const response = await fetch(url);
        if (!response.ok) throw new Error(`Fetch Error: ${url}, STATUS ${response.status}`);
        return await response.json();
    };

    getCharacters = async ({limit=9, offset=30}) => {
        const url = `${this._url}characters?apikey=${this._key}&limit=${limit}&offset=${offset}`
        const response = await this.get(url);
        const characters = response.data.results.map(c => this._transformCharacter(c));
        return characters;
    };

    getCharacter = async (id, comics=false) => {
        const url = `${this._url}characters/${id}?apikey=${this._key}`;
        const response = await this.get(url);
        const character = this._transformCharacter(response.data.results[0], comics);
        return character;
    };

    _transformCharacter = (res, comics=false) => {
        const descr = res.description ? res.description : "There is no description for this character";
        return {
            id: res.id,
            name: res.name,
            thumbnail: res.thumbnail.path + "." + res.thumbnail.extension,
            description: descr,
            homepage: res.urls[0].url,
            wiki: res.urls[1].url,
            comicsList: comics ? res.comics.items : null
        };
    }
}

export default MarvelService;