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
  var input = req.body.data;
  var report = generateReport(req.body.data);
  console.log(report);

  res.send(`<!DOCTYPE html>
  <html>
    <head>
      <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
      <title>Challenge 2: CSV Report Generator</title>
    </head>
    <body>
      <p><strong>CSV Report Generator</strong></p>
      <p>Description: Generates CSV reports from JSON data</p>
      <form action="/" method="POST" class="form">
        <label>Enter JSON:</label>
        <textarea id="data" name="data" rows="15" cols="30">${input}</textarea>
        <input type="submit" value="submit">
        <label> CSV Report:</label>
        <textarea id="report" name="report" rows="15" cols="60">${report}</textarea>
      </form>
      <script src="app.js"></script>
    </body>
  </html>`);
})

app.get('/', (req, res) => {
  res.send('Hello World!');
})

var generateReport = function (data) {
  var obj = JSON.parse(data);
  var keys = Object.keys(obj).slice(0, -1);
  var csv = '';
  keys.forEach(key => {
    csv += key + ',';
  });
  csv = csv.slice(0, -1) + '\n';
  var generateCSV = function (obj) {
    keys.forEach(key => {
      csv += obj[key] + ',';
    })
    csv = csv.slice(0, -1) + '\n';
    if (obj['children']) {
      obj['children'].forEach(child => generateCSV(child));
    }
  }
  generateCSV(obj);
  return csv;
}