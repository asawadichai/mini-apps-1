const express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended:true}));
const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.post('/', (req, res) => {
  console.log(req.body);
  console.log('data', JSON.parse(req.body.data));

  req.on('end', () => {
    res.end();
  })
})

app.get('/', (req, res) => {
  res.send('Hello World!');
})