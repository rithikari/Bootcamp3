const fs = require('fs').promises;

fs.readFile('input.txt', 'utf8')
  .then(data => fs.writeFile('output.txt', data.toUpperCase()))
  .then(() => console.log('Done'))
  .catch(err => console.error(err));
