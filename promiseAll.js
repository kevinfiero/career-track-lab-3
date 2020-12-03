const fetch = require('node-fetch');

function fetchData(URL) {
    return Promise.all([
        fetch(URL),
        fetch(URL)
    ])
    .then(([allData, originData]) => {
        allData = allData.json();
        return [allData, originData]
    })
    .then(([allData, originData]) => {
        allData = originData.json();
        return [allData, originData]
    })
    .catch(err => {
        console.log(err);
        return err;
    });

}

module.exports = { fetchData }