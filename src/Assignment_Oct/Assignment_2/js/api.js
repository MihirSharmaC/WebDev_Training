class Sports {
  async getData() {
    const sportResponse = await fetch(
      "https://www.thesportsdb.com/api/v1/json/1/all_sports.php"
    );
    console.log(sportResponse);
    const sportData = await sportResponse.json();
    const arr = await sportData.sports;
    const htmElement = document.querySelector(".list-unstyled");
    let output = ``;
    arr.forEach((sport) => {
      output += `<li class="my-3">
  <div class="row">
    <div class="col-md-4">
      <img src="${sport.strSportThumb}" alt="" />
    </div>
    <div class="col-md-8">
      <div class="d-flex flex-column">
        <h3>Name : ${sport.strSport}</h3>
        <h3>Format : ${sport.strFormat}</h3>
      </div>
    </div>
  </div>
</li>
`;
    });
    htmElement.innerHTML = output;
  }
}
