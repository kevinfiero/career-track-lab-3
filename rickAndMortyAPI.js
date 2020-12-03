const fetch = require('node-fetch');

function getCharacter(URL, id) {
    return fetch(URL)
    .then(data => {
        return data.json();
    })
    .then(data => {
        return findCharacter(data.results, id);
    })
    .then(data => {
        return formatCharacter(data);
    })
    .catch(err => {
        console.log(err);
        return err;
    });
}




// async function getCharacter(URL, id) {
//     try{
//         let data = await fetch(URL);
//         data = await data.json();
//         const singleCharacter = findCharacter(data.results, id)
//         const singleCharacterFormatted = formatCharacter(singleCharacter)
//         return singleCharacterFormatted;
//     }
//     catch(err){
//         console.log(err);
//         return err;
//     }
// }

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