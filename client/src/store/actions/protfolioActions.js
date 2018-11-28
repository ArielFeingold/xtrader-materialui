import * as actionTypes from './actionTypes';
import axios from 'axios';

export const getProtfolioStart = () => {
    return {
        type: actionTypes.GET_PROTFOLIO_START
    };
};

export const getProtfolioSuccess = ( userStocks ) => {
    return {
        type: actionTypes.GET_PROTFOLIO_SUCCESS,
        userStocks: userStocks
    };
};

export const getProtfolioFail = (errors) => {
    return {
        type: actionTypes.GET_PROTFOLIO_FAIL,
        errors: errors
    };
};

export const getProtfolio = () => {
  return dispatch => {
    dispatch(getProtfolioStart());
    getUserData()
    .then(response => {
      const data = response.data;
      let stocksString = '';
      let batchQuery = ``;
      localStorage.setItem('balance', data.balance.balance.toFixed(2));
      localStorage.setItem('balanceId', data.balance.id);
      dispatch(setUser(data.username, data.balance.balance, data.balance.id));
      if(data.stocks.length > 0){
        data.stocks.forEach( stock => {
          stocksString = stocksString + `${stock.symbol},`
        });
      } else {
        dispatch(getProtfolioFail("No Stocks in Protfolio"))
      }
      batchQuery = `https://api.iextrading.com/1.0/stock/market/batch?symbols=${stocksString}&types=price,ohlc`;
      return (batchQuery)
    })
    .catch(err => console.log(err) )
    .then(data => {
      return(axios.all([getUserData(), getMarketData(data)]))
      .then(axios.spread(function (user, market) {
        const userStocks = user.data.stocks
        const marketStocks = market.data
        let output = [], item, relevantStock;
         for(let symbol in marketStocks) {
           item = { id: '', symbol: '', currentPrice: '', openingPrice: '', userShares: '' };
           item.symbol = symbol;
           item.currentPrice = marketStocks[symbol]["price"];
           item.openingPrice = marketStocks[symbol]["ohlc"]["open"]["price"];
           relevantStock = userStocks.find(stock => stock.symbol.toLowerCase() === item.symbol.toLowerCase());
           item.userShares = relevantStock.user_shares;
           item.id = relevantStock.id;
           output.push(item);
           }
        dispatch(getProtfolioSuccess(output))
      }))
    }
  )}
}

export const setUser = ( username, balance, balanceId) => {
    return {
        type: actionTypes.SET_USER,
        username: username,
        balance: balance.toFixed(2),
        balanceId: balanceId
    };
};

function getUserData() {
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId')
  const headers = {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
  const url = `http://localhost:3001/users/${userId}`
  return axios.get(url, {headers: headers});
}

function getMarketData(url) {
  return axios.get(url);
}

export const addStockStart = () => {
    return {
        type: actionTypes.ADD_STOCK_START
    };
};

export const addStockSuccess = () => {
  localStorage.removeItem('qty');
  localStorage.removeItem('stock_price');
  localStorage.removeItem('ticker');
  return {
      type: actionTypes.ADD_STOCK_SUCCESS,
      loading: false
  };
};

export const addStockFail = (error) => {
  localStorage.removeItem('qty');
  localStorage.removeItem('stock_price');
  localStorage.removeItem('ticker');
    return {
        type: actionTypes.ADD_STOCK_FAIL,
        error: error
    };
};

export const addStock = ( ticker, qty) => {
  return dispatch => {
    dispatch(addStockStart())
    const lowTicker = ticker.toLowerCase()
    localStorage.setItem('qty', qty);
    localStorage.setItem('ticker', lowTicker);
    const url = `https://api.iextrading.com/1.0/stock/${ticker}/price`
    axios.get(url)
    .then( response => {
      const price = response.data
      localStorage.setItem('stock_price', price);
      const qty = localStorage.getItem('qty')
      const userId = localStorage.getItem('userId')
      const ticker = localStorage.getItem('ticker')
      const balance = localStorage.getItem('balance')
      const total = response.data * qty
      if( total > balance ) {
        console.log("no funds")
        dispatch(addStockFail("Insufficient Funds"))
      } else {
        const token = localStorage.getItem('token')
        const headers = {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}`}
        const url = `http://localhost:3001/stocks`
        const stockData = {
                    user_id: userId,
                    user_shares: qty,
                    symbol: ticker,
                    stock_price: localStorage.getItem('stock_price')
                  }
        return(axios.post(url, stockData, {headers: headers}))
      }
    })
    .then( response => { dispatch(getProtfolio())})
    .catch(error => {
    if (error.response) {
      dispatch(addStockFail(error.response.data));
    } else if (error.request) {
      dispatch(addStockFail("Could Not Connect To Server"));
    } else {
      console.log('Error', error.message);
    }
    console.log(error.config);
  });
  }
};
