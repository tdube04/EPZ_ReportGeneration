const { readFileSync } = require('fs');

let loadItem = () => JSON.parse(readFileSync('items.json'));
    




module.exports = { loadItem };