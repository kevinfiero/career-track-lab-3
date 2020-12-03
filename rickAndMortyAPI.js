const fetch = require('node-fetch');


// .then syntax below:

// function getCharacter(URL, id) {
//     return fetch(URL)
//     .then(data => {
//         return data.json();
//     })
//     .then(data => {
//         return findCharacter(data.results, id);
//     })
//     .then(data => {
//         return formatCharacter(data);
//     })
//     .catch(err => {
//         console.log(err);
//         return err;
//     });
// }


// async await syntax below:

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

function getManyCharacters(URL, idArray) {

    const promises = [];

    for (let i = 0; i<idArray.length; i++){
        promises.push(getCharacter(URL, idArray[i]),)
    }
    return Promise.all(promises)
    .catch(err => {
        console.log(err);
        return err;
    });
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