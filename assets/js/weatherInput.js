import { weatherApi } from "./weatherApi.js";
import { refresh } from "./refresh.js";

export function weatherInput() {
  let weatherContainer = document.querySelector(".weather-container");

  let buttonSubmit = document.querySelector(".weather-input-submit");

  let inputField = document.querySelector(".weather-input-text");

  buttonSubmit.addEventListener("click", async () => {
    refresh();
    await weatherApi();
  });

  inputField.addEventListener("keydown", async (event) => {
    if (event.key === "Enter") {
      refresh();
      await weatherApi();  
    }
  });
}
