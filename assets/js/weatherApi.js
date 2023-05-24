import { addImage } from "./addImage.js";
import { createChart } from "./createChart.js";

//async / await

export async function weatherApi() {
  let cityValue = document.querySelector(".weather-input-text").value;

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
                document.getElementsByClassName("weather-card-container")[0];
              let newDiv = document.createElement("div");
              newDiv.classList.add("weather-card");

              let paragraphTemp = document.createElement("p");
              let temperature = Math.round(json.list[i * 8].main.temp);
              paragraphTemp.textContent = temperature.toString()+" °C";
              newDiv.appendChild(paragraphTemp);

              let paragraphMainIcon = document.createElement("div");
              let iconName = json.list[i * 8].weather[0].icon;
              let iconNameUrl = "https://openweathermap.org/img/w/" + iconName + ".png";
              let imgElement = document.createElement("img");
              imgElement.src = iconNameUrl;
              imgElement.alt = "Weather icon";
              paragraphMainIcon.appendChild(imgElement);
              newDiv.appendChild(paragraphMainIcon);

              // let paragraphMain = document.createElement("p");
              // paragraphMain.textContent = json.list[i * 8].weather[0].main;
              // newDiv.appendChild(paragraphMain);

              let paragraphDate = document.createElement("p");
              let date = json.list[i * 8].dt_txt.split(" ")[0];
              let [year, month, day] = date.split("-");
              let formattedDate = `${day}-${month}-${year}`;
              paragraphDate.textContent = formattedDate;
              newDiv.appendChild(paragraphDate);

              weatherContainer.appendChild(newDiv);
            }
            createChart(json);
          });

        addImage(cityValue);
      });
  } 

