const fs = require('fs');

  fs.readFile('words.txt', (err, data) => {
    if (err) throw err;
    console.log(data);
  });