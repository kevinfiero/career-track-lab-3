const fs = require('fs').promises;

const copy = async(src, dst) => {
    const contents = await reader(src);
    await writer(dst, contents);
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

const writer = (dir, contents) => {
    return fs.writeFile(dir, contents)
    .then(data => {
        console.log('Done!');
    })
    .catch(err => {
        console.log(err);
    });
}

module.exports = { reader, writer, copy };

