import stocks from './generated/stocks';
import _ from 'lodash';

let stockData = stocks;

export function setStockData(data) {
  stockData = data;
};

function lookup(partial, prop) {
  return _.filter(stockData, function(company) {
    return company && prop in company && company[prop].toUpperCase().indexOf(partial.toUpperCase()) !== -1;
  });
};

export function symbol(companyPartial) {
  return lookup(companyPartial, 'name');
};
  
export function suggest(symbolPartial) {
  return lookup(symbolPartial, 'symbol');
};


