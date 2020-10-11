class UI {
  setupDropdown() {
    const tBody = document.querySelector("tbody");
    tBody.innerHTML = `
      <tr>
          <td><i class="fas fa-dollar-sign ml-3"></i></td>
          <td id="descUsd">United States Dollar</td>
          <td id="priceUsd"></td>
        </tr>
      <tr>
          <td><i class="fas fa-pound-sign ml-3"></i></td>
          <td id="descGbp">British Pound Sterling</td>
          <td id="priceGbp"></td>
        </tr>
      <tr>
          <td><i class="fas fa-euro-sign ml-3"></i></td>
          <td id="descEur">Euro</td>
          <td id="priceEur"></td>
        </tr>
      <tr>
          <td>
              <select name="currency" id="cCode" onchange="updateFrame(this.value)">
                <option value="AED"></option>
              </select>        
          </td>
          <td id="desc"></td>
          <td id="price"></td>
        </tr>
      `;
  }
  getCountryList(countryList) {
    let output = ``;
    const select = document.getElementById("cCode");
    select.innerHTML = ``;
    countryList.forEach((data) => {
      output = `<option value="${data.currency}">${data.currency}</option>`;
      select.innerHTML += output;
    });
  }

  placePriceData(data) {
    document.getElementById("priceUsd").innerHTML = Object.entries(
      data.usdData.bpi
    )[0][1].rate;
    document.getElementById("priceGbp").innerHTML = Object.entries(
      data.gbpData.bpi
    )[1][1].rate;
    document.getElementById("priceEur").innerHTML = Object.entries(
      data.eurData.bpi
    )[1][1].rate;
    document.getElementById("desc").innerHTML = Object.entries(
      data.resData.bpi
    )[1][1].description;
    document.getElementById("price").innerHTML = Object.entries(
      data.resData.bpi
    )[1][1].rate;
  }
}
