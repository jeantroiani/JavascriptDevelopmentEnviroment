import express from 'express';
import path from 'path';
import open from 'open';
const port = 3000;

const app = express();

app.get('/', (req, res) => {
  res.sendFile('./src/index.html', { root: __dirname });
});

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  } else {
    open('http://localhost:' + port);
  }
});
