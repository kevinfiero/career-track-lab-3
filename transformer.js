const fs = require('fs').promises;

const transformer = async(dir) => {
    return fs.readFile(dir, 'utf-8')
    .then(data => {
        console.log(data);
        return data;
    })
    .then(data => {
        data = lowerCase(data);
        return data;
    })
    .then(data => {
        data = upperCase(data);
        return data;
    })
    .then(data => {
        data = reverseString(data);
        return data;
    })
    .then(data => {
        data = writer(dir, data);
        return data;
    })
    .catch(err => {
        console.log(err);
        return err;
    });
}

const lowerCase = (data) => {
    return data.toLowerCase();
}

const upperCase = (data) => {
    return data.toUpperCase();
}

const reverseString = (data) => {
    const dataArray = data.split("");
    dataArray.reverse();
    return dataArray.join("");
}

const writer = (dir, contents) => {
    return fs.writeFile(dir, contents)
    .then(data => {
        console.log('Done!');
    })
    .catch(err => {
        console.log(err);
    });
}

const reader = (dir) => {
    return fs.readFile(dir, 'utf-8')
    .then(data => {
        console.log(data);
        return data;
    })
    .catch(err => {
        console.log(err);
        return err;
    });
}

module.exports = { transformer, writer, reader }