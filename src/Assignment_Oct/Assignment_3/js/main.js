const coin = new Coin();
const ui = new UI();

ui.setupDropdown();

const x = coin.getCountries();
x.then((data) => {
  ui.getCountryList(data);
});
var drop = document.getElementById("cCode");

setTimeout(() => {
  drop = document.getElementById("cCode");
}, 1000);

document.body.addEventListener("load", updateFrame("AED"));

var storeSelected = "AED";
document
  .querySelector("button")
  .addEventListener("click",() =>updateFrame(storeSelected));
function updateFrame(data) {
  storeSelected = data; 
  coin.getData(data).then((res) => {
    ui.placePriceData(res);
  });
}
