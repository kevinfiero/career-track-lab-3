const fetch = require('node-fetch');

async function getCharacter(URL, id) {
    try{
        let data = await fetch(`${URL}${id}`);
        data = await data.json();
        const singleCharacterFormatted = formatCharacter(data)
        return singleCharacterFormatted;
    }
    catch(err){
        console.log(err);
        return err;
    }
}

async function getManyCharacters(URL, idArray) {

    let formattedCharactersArray = [];
    try{
        for (let i = 0; i<idArray.length; i++){
            let formattedCharacter = await getCharacter(URL, idArray[i])
            formattedCharactersArray.push(formattedCharacter)
        }
        return formattedCharactersArray;
    }
    catch(err){
        console.log(err);
    }

}

function formatCharacter(data) {
    const obj = {
        name: data.name,
        status: data.status,
        species: data.species
    }
    return obj;
}

module.exports = { getCharacter, getManyCharacters }