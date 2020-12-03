const fetch = require('node-fetch');

function fetchData() {
    return fetch('http://futuramaapi.herokuapp.com/api/quotes/1')
    .then(data => {
        json = data.json();
        return json
    })
    .catch(err => {
        console.log(err);
        return err;
    });

}

module.exports = { fetchData }