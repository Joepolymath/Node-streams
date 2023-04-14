const fs = require('fs');
const path = require('path');

const file = path.join(__dirname, 'data.txt');
const readableStream = fs.createReadStream(file);

readableStream.on('data', (chunk) => {
  console.log(`Received ${chunk.length} bytes of data -> ${chunk}`);
});

readableStream.on('end', () => {
  console.log('End of stream.');
});
