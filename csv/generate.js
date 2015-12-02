// generate a js module with embedded data (stock symbols and company names)
var csv = require('csv');
var fs = require('fs');

console.log("Generating stock symbol data");

var genOut = 'src/generated/stocks.js';
var sources = [ 'csv/amex.csv', 'csv/nasdaq.csv', 'csv/nyse.csv' ];
var txtSources = [ 'csv/otclist.txt' ];

var readStockTxt = function(source, skipHeader, skipFooter) {
  var fileStr = fs.readFileSync(source, 'utf8');
  var lines = fileStr.split("\n");
  if (skipHeader) {
    lines.shift();
  }
  if (skipFooter) {
    lines.pop();
  }
  return lines;
};

var readStockCsv = function(source, skip) {
  var fileStr = fs.readFileSync(source, 'utf8');
  var lines = fileStr.split("\n");
  if (skip) {
    lines.shift();
  }
  return lines;
};

console.log("  reading csv files");
var allLines = '';
var skip = false;
for (var i = 0; i < sources.length; i++) {
  if (i > 0) { skip = true; }
  console.log("    " + sources[i]);
  var lines = readStockCsv(sources[i], skip);
  allLines += lines;
}

console.log("  reading txt files");
var allTxtLines = '';
var skipHeader = false;
var skipFooter = true;
for (i = 0; i < txtSources.length; i++) {
  if (i > 0) { skipHeader = true; }
  console.log("    " + txtSources[i]);
  var lines = readStockTxt(txtSources[i], skipHeader, skipFooter);
  allTxtLines += lines;
}

console.log("  parsing csv files");
csv.parse(allLines, function(err, data) {
  if (err) {
    console.dir(err);
    // quit.
  }
  
  var stocks = [];
  for (var i = 1; i < data.length; i++) {
    var recArr = data[i];
    var n = recArr[2];
    var s = recArr[1];
    if (!n || !s) { continue; }
    if (n) { n = n.trim(); }
    if (s) { s = s.trim(); }
    var item = {
      'name': n,
      'symbol': s
    };
    stocks.push(item);
  }
  
  console.log("  parsing txt files");
  csv.parse(allTxtLines, { 'delimiter': '|' }, function(err, data) {
    if (!err) {
      
      for (var i = 1; i < data.length; i++) {
        var recArr = data[i];
        var n = recArr[1];
        var s = recArr[0].substring(1); // bug in csv parser? it adds a comma before the first field
        if (!n || !s) { continue; }
        if (n) { n = n.trim(); }
        if (s) { s = s.trim(); }
        var item = {
          'name': n,
          'symbol': s
        };
        stocks.push(item);
      }
      
      console.log("  exporting " + stocks.length + " entries to " + genOut);
  
      var genSrc = "export default ";
      genSrc += JSON.stringify(stocks);
      genSrc += ';';
      fs.writeFileSync(genOut, genSrc, 'utf8');
      
    } else {
      console.dir(err);
    }
  });
  
  
  
});

  