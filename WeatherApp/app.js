let weatherApi = {
  apiKey: "f4574b00d6dabe3670ee2899380e9e3e",
  weatherFetch: function (city) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${this.apiKey}`
    )
      .then((response) => {
        if (!response.ok) {
          alert("No weather found.");
          throw new Error("No weather found.");
        }
        return response.json();
      })
      .then((data) => this.weatherDisplay(data));
  },
  weatherDisplay: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, temp_min, temp_max } = data.main;

    let d = new Date();
    document.querySelector(".city").innerText = " Today's Weather in " + name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = Math.floor(temp) + "°C";
    document.querySelector(".date").innerText = dateFunction(d);
    document.querySelector(".high-low").innerText = `${Math.floor(
      temp_min
    )}°c / ${Math.floor(temp_max)}°c`;
    console.log(dateFunction(d));
    console.log(data);
  },
  inputSearch: function () {
    this.weatherFetch(document.querySelector(".search-input").value);
  },
};

let searchbtn = document.querySelector(".search-container button");
let searchinput = document.querySelector(".search-input");

searchbtn.addEventListener("click", function () {
  weatherApi.inputSearch();
});
searchinput.addEventListener("keyup", function (event) {
  if (event.key == "Enter") {
    weatherApi.inputSearch();
  }
});

function dateFunction(d) {
  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let date = d.getDate();
  let day = days[d.getDay()];
  let month = months[d.getMonth()];
  let year = d.getFullYear();

  return `${date} ${month} ${year} , ${day}`;
}

weatherApi.weatherFetch("Bangalore");
