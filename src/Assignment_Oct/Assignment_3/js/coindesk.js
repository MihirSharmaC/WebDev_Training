class Coin {
  async getCountries() {
    const res = await fetch("./js/countries.json");
    return await res.json();
  }

  async getData(cCode) {
    const res = await fetch(
      `https://api.coindesk.com/v1/bpi/currentprice/${cCode}.json`
    );
    const usd = await fetch(
      `https://api.coindesk.com/v1/bpi/currentprice/USD.json`
    );
    const gbp = await fetch(
      `https://api.coindesk.com/v1/bpi/currentprice/GBP.json`
    );
    const eur = await fetch(
      `https://api.coindesk.com/v1/bpi/currentprice/EUR.json`
    );
    const resData = await res.json();
    const usdData = await usd.json();
    const gbpData = await gbp.json();
    const eurData = await eur.json();
    return {
      resData,
      usdData,
      gbpData,
      eurData,
    };
  }
}
