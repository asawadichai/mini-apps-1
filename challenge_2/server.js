const express = require('express');
const bodyParser = require('body-parser');
var fs = require('fs');
var path = require('path');

var app = express();
app.use(express.static('client'));
app.use(bodyParser.urlencoded({extended:true}));

const port = 3000;

app.listen(port, () => {
  console.log(`listening on port ${port}`)
})

app.get('/csvreport', (req, res) => {
  res.sendFile(path.join(__dirname, 'csvreport.csv'), (err) => {
    if(err) {
      throw err;
    } else {
      console.log('sent file');
    }
  })
})

app.post('/', (req, res) => {
  //receive json from webpage
  var data = '';
  req.on('data', chunk => {
    data += chunk;
  })
  req.on('end', () => {
    res.writeHead(201);
    var csv = generateReport(data);
    console.log('csv', csv);
    fs.writeFile('csvreport.csv', csv, function(err) {
      if(err) throw err;
      console.log('saved');
    })

    res.end();
  })

  // res.send(`<!DOCTYPE html>
  // <html>
  //   <head>
  //     <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
  //     <title>Challenge 2: CSV Report Generator</title>
  //   </head>
  //   <body>
  //     <p><strong>CSV Report Generator</strong></p>
  //     <p>Description: Generates CSV reports from JSON data</p>
  //     <form action="/" method="POST" enctype="multipart/form-data" class="form">
  //       <label> CSV Report:</label>
  //       <textarea id="report" name="report" rows="15" cols="60">${data}</textarea>
  //       <p><label>Upload JSON:</label><input type="file" id="file" name="jsonfile" accept=".json">
  //       <input type="button" value="upload" id="upload"></p>
  //     </form>
  //     <script src="app.js"></script>
  //   </body>
  // </html>`);


  // if(input){
  //   var report = generateReport(input);
  //   res.send(`<!DOCTYPE html>
  //   <html>
  //     <head>
  //       <script src="https://code.jquery.com/jquery-3.5.0.js"></script>
  //       <title>Challenge 2: CSV Report Generator</title>
  //     </head>
  //     <body>
  //       <p><strong>CSV Report Generator</strong></p>
  //       <p>Description: Generates CSV reports from JSON data</p>
  //       <form action="/" method="POST" class="form">
  //         <label>Enter JSON:</label>
  //         <textarea id="data" name="data" rows="15" cols="30">${input}</textarea>
  //         <input type="submit" value="submit">
  //         <label> CSV Report:</label>
  //         <textarea id="report" name="report" rows="15" cols="60">${report}</textarea>
  //       </form>
  //       <form action="/" method="POST" enctype="multipart/form-data" class="form">
  //         <label>Upload JSON:</label>
  //         <input type="file" id="file" name="jsonfile" accept=".json">
  //         <input type="submit" value="upload">
  //         <label> CSV Report:</label>
  //         <textarea id="report" name="report" rows="15" cols="60"></textarea>
  //       </form>
  //       <script src="app.js"></script>
  //     </body>
  //   </html>`);
  // }

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