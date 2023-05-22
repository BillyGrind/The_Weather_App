import { weatherApi } from "./weatherApi.js";

export function weatherInput(){
    let weatherContainer = document.querySelector(".weather-container");
    // let content = `
    // <div class="weather-input">
    // <p class="weather-input-label">Tape a name of city</p>
    // <input type="text" class="weather-input-text">
    // <button type="button" class="weather-input-submit">Let's Go</button>
    // </div>
    // `;
    // weatherContainer.innerHTML += content;

    let buttonSubmit = document.querySelector(".weather-input-submit");

    // add press enter and submit

    buttonSubmit.addEventListener("click", async() =>{
        await weatherApi();
    })

}
