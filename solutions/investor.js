function _investor(prices, purchase_price, total) {
  if (prices.length === 0) return total;
  let next = prices.slice(1);
  
  // If you aren't mid-transaction...
  if (purchase_price === null) {
    let stay = _investor(next, null, total);
    let buy = _investor(next, prices[0], total);
    
    return (buy > stay) ? buy : stay;
  } else { // if you ARE mid-transaction...
    let stay = _investor(next, purchase_price, total);
    let sell = _investor(next, null, total + (prices[0] - purchase_price));
    
    return (sell > stay) ? sell : stay;
  }
}

function investor(prices) {
    return _investor(prices, null, 0);
}
