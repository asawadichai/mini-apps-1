const express = require('express');
let app = express();

app.use(express.static('public'));

let port = 3100;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

