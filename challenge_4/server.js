const express = require('express');
let app = express();

app.use(express.static('./client/dist'));

let port = 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
});

app.get('/', (req, res) => {
  res.send('hello world');
})

