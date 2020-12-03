const { fetchData } = require('./promiseAll');

describe('fetchData', () => {
    it('return Futurama data', async() => {
        const result = await fetchData('https://rickandmortyapi.com/api/character/');
    })
})