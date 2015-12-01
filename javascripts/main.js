console.log('This would be the main JS file.');

$('.typeahead-symbols').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
}, {
  name: 'symbols',
  source: function(query, callback) {
    callback(_map(ticker.symbol(query), 'symbol'));
  }
});

$('.typeahead-names').typeahead({
  hint: true,
  highlight: true,
  minLength: 1
}, {
  name: 'companies',
  source: function(query, callback) {
    callback(_map(ticker.suggest(query), 'name'));
  }
});