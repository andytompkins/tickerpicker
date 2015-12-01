console.log('This would be the main JS file.');

$('.typeahead-symbols').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
}, {
  name: 'symbols',
  source: function(query, callback) {
    callback(_.map(ticker.symbol(query), function(n) {
      return n.symbol + '   ' + n.name;
    }));
  }
});

$('.typeahead-names').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
}, {
  name: 'companies',
  source: function(query, callback) {
    callback(_.map(ticker.suggest(query), function(n) {
      return n.name + ' (' + n.symbol + ')';
    }));
  }
});