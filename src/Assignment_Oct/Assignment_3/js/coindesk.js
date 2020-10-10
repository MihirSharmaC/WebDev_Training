class Coin {
  async getData() {
    const coinResponse = await fetch(
      "https://api.coindesk.com/v1/bpi/supported-currencies.json",
      {
        method: "POST",
        mode: "cors", // no-cors, cors, *same-origin *=default
        credentials: "include", // *same-origin
      }
    )
      .then(async (coinResponse) => {
        const coinResponseData = await coinResponse.json();
        console.log(coinResponseData);
      })
      .catch((coinResponse) => console.log(coinResponse));
  }

  //   async getList() {

  //   }
}
