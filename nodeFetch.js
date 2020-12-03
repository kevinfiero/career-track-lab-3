const fetch = require('node-fetch');

function fetchData(URL) {
    return fetch(URL)
    .then(data => {
        json = data.json();
        return json
    })
    .then(json => {
        return json
    })
    .catch(err => {
        console.log(err);
        return err;
    });

}

module.exports = { fetchData }