const ulr = "https://meowfacts.herokuapp.com/?count=50";

fetch(ulr)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    let api = "";
    for (let i = 0; i < data.data.length; i++) {
      api = `
          <div class="card" style="width: 100%;margin-top:30px;padding:3px; background: transparent;border:2px solid white;">
          <img class="card-img-top" src="cat.jpg" height = "580px" alt="Card image cap" style= " background: transparent;">
          <div class="card-body">
            <h5 class="card-title" style="color:white;">${data.data}</h5>
          </div>
        </div>`;
      document.querySelector(".container").innerHTML = api;
    }
  });
