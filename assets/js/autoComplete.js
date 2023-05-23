import { weatherApi } from "./weatherApi.js";

export async function autoComplete() {
  let inputField = document.querySelector(".weather-input-text");

  inputField.addEventListener("input", () => {
    let inputFieldValue = inputField.value;
    console.log(inputFieldValue);

    // essayer cet api https://geocoding-api.open-meteo.com/v1/search?name=Bruss&count=5
    // voir aussi geo names

    let options = {
      method: "GET",
      headers: { "X-Api-Key": "h23V9pmmyHz5tHCCKQZenjQa2gAIO06oGNlNhXgX" },
      contentType: "application/json",
    };
    let url =
      "https://api.api-ninjas.com/v1/city?name=" + inputFieldValue + "&limit=5";
    let cityList = document.querySelector(".weather-list-city");
    fetch(url, options)
      .then((response) => response.json())
      .then((json) => {
        cityList.innerHTML = "";
        for (let i = 0; i < 5; i++) {
          let cityElementList = document.createElement("li");
          cityElementList.textContent = json[i].name;
          cityList.appendChild(cityElementList);
        }
      });
  });
}
