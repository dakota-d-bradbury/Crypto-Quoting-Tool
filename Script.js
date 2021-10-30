//Constants

const BASE_URL = 'https://coinlib.io/api/v1/'
const API_KEY = '69ba20b220e34b1f'

//State Variables
let coinData;

// https://coinlib.io/api/v1/coin?key=69ba20b220e34b1f&pref=USD&symbol=BTC
//cached element references
const $currencyInput =$('input[type="text"]');
const $form = $('form');
const $coinInput = $('input[type="text"]');
const $main = $('main');
//Event Listeners
$form.on('submit', handleSubmit);

//Functions

$(".DDM").hover(function() {
    $(this).find('ul, select').stop(true, true).slideDown('medium');
  }, function() {
    $(this).find('ul, select').stop(true, true).slideUp('medium');
});

function handleSubmit(evt){
    evt.preventDefault();
    const coin = $coinInput.val();
    const currency = $(".DDM").val();
  $.ajax(`${BASE_URL}coin?key=${API_KEY}&pref=${currency}&symbol=${coin}`)
    .then(function(data) {
        coinData = data;
        render();
    }, function(error) {

    });
}

function render() {
    $main.html(
   `<h3>Coin Name: ${coinData.name}</p></h3>
   <p>Symbol: ${coinData.symbol}</p>
   <p>Market Cap: ${coinData.market_cap} ${coinData.markets[0].symbol}</p>
    <p>First Exchange: ${coinData.markets[0].exchanges[0].name}</p>
    <p>Current Price: ${coinData.markets[0].exchanges[0].price} ${coinData.markets[0].symbol}</p>
    <p>Second Exchange: ${coinData.markets[0].exchanges[1].name}</p>
    <p>Current Price: ${coinData.markets[0].exchanges[1].price} ${coinData.markets[0].symbol}</p>
    <p>Third Exchange: ${coinData.markets[0].exchanges[2].name}</p>
    <p>Current Price: ${coinData.markets[0].exchanges[2].price} ${coinData.markets[0].symbol}</p>
 
   
`);
}; 