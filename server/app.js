const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(/^\/[0-9]+/, express.static('public'));


//endpoint for loader.io validation
app.get('/:file.txt', (req, res, next) => {
  res.sendfile(`${req.params.file}.txt`, { root: __dirname }, (err) => {
    if (err) {
      next(err);
    } else {
      console.log('file sent');
    }
  })
});

module.exports = app;
