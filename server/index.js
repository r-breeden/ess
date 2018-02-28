const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req, res, next) => {
  res.send('greetings from serverland');
});

app.listen(PORT, function () {
  console.log(`server online, listening on port ${PORT}.`)
});