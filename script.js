const CoinAPI = require('coinapi-sdk');

// Replace YOUR_API_KEY with your actual API key
const apiKey = '9F73810D-2672-4688-9E2B-7396F95EA136';

const coinapi = new CoinAPI(apiKey);

// Fetch the data for Bitcoin (BTC)
async function fetchBitcoinData() {
  try {
    const response = await coinapi.ohlcv.latest({
      symbol_id: 'BITCOIN_USD',
      limit: 1,
    });

    const bitcoinData = response.data[0];
    const bitcoinPrice = bitcoinData.price_close;
    const bitcoinChange = ((bitcoinData.price_high - bitcoinData.price_low) / bitcoinData.price_low) * 100;

    // Update the HTML element with the Bitcoin price and change
    document.getElementById('bitcoin-price').textContent = `$${bitcoinPrice.toFixed(2)}`;
    document.getElementById('bitcoin-change').textContent = `${bitcoinChange.toFixed(2)}%`;
  } catch (error) {
    console.error(error);
  }
}

fetchBitcoinData();