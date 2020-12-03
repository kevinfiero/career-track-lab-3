const fetch = require('node-fetch');

async function getCharacter(URL, id) {
    try{
        let data = await fetch(URL);
        data = await data.json();
        const singleCharacter = findCharacter(data.results, id)
        const singleCharacterFormatted = formatCharacter(singleCharacter)
        return singleCharacterFormatted;
    }
    catch(err){
        console.log(err);
        return err;
    }
}

function findCharacter(data, id) {
    for(let j =0; j<data.length; j++){
        if(data[j].id === id){
            return data[j];
        }
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

module.exports = { getCharacter }