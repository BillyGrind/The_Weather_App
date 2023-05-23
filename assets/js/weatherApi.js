import { addImage } from "./addImage.js";
import { createChart } from "./createChart.js";

//async / await

export async function weatherApi() {
  let cityValue = document.querySelector(".weather-input-text").value;

  try {
    let fetchCity = (city) =>
      fetch(
        "https://api.openweathermap.org/data/2.5/weather?q=" +
          city +
          "&appid=8460ebd469f984403e3bee030ff9aa9a"
      );

    fetchCity(cityValue)
      .then((response) => response.json())
      .then((json) => {
        let coord = json.coord;
        let lonCity = coord.lon;
        let latCity = coord.lat;

        let fetchWeather = (lat, lon) =>
          fetch(
            "https://api.openweathermap.org/data/2.5/forecast?lat=" +
              lat +
              "&lon=" +
              lon +
              "&appid=8460ebd469f984403e3bee030ff9aa9a&units=metric"
          );

        fetchWeather(latCity, lonCity)
          .then((response) => response.json())
          .then((json) => {
            for (let i = 0; i < 5; i++) {
              let weatherContainer =
                document.getElementsByClassName("weather-container")[0];
              let newDiv = document.createElement("div");

              let paragraphTemp = document.createElement("p");
              paragraphTemp.textContent = json.list[i * 8].main.temp;
              newDiv.appendChild(paragraphTemp);

              let paragraphMain = document.createElement("p");
              paragraphMain.textContent = json.list[i * 8].weather[0].main;
              newDiv.appendChild(paragraphMain);

              let paragraphDate = document.createElement("p");
              paragraphDate.textContent = json.list[i * 8].dt_txt;
              // console.log(paragraphDate.textContent);
              newDiv.appendChild(paragraphDate);

              weatherContainer.appendChild(newDiv);

              // console.log(json);
              // console.log( json.list[i * 8].weather.main);
            }
            // console.log(json);
            createChart(json);
          });

        addImage(cityValue);
      });
  } catch {
    console.log("error");
  }
}
