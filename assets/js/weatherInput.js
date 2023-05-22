import { weatherApi } from "./weatherApi.js";

export function weatherInput(){
    let weatherContainer = document.getElementsByClassName("weather-container")[0];
    let content = `
    <div class="weather-input">
    <p class="weather-input-label">Tape a name of city</p>
    <input type="text" class="weather-input-text">
    <button type="submit" class="weather-input-submit">Let's Go</button>
    </div>
    `
    weatherContainer.innerHTML += content;

    let buttonSubmit = document.getElementsByClassName("weather-input-submit")[0];

    // add press enter and submit

    buttonSubmit.addEventListener("click", () =>{
        weatherApi();
    })

}
