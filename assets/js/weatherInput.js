import { weatherApi } from "./weatherApi.js";

export function weatherInput() {
  let weatherContainer = document.querySelector(".weather-container");

  let buttonSubmit = document.querySelector(".weather-input-submit");

  let inputField = document.querySelector(".weather-input-text");

  // add press enter and submit

  buttonSubmit.addEventListener("click", async () => {
    await weatherApi();
  });

  inputField.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      await weatherApi();
    }
  });
}
