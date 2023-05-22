// function for diplay the weather for the next 5 days 

import { addImage } from "./addImage.js";

export async function weatherApi(){
    let inputValue = document.getElementsByClassName("weather-input-text")[0];
    let cityValue = inputValue.value;
   
    try{


        let fetchCity = (city) => fetch("https://api.openweathermap.org/data/2.5/weather?q="+ city+"&appid=8460ebd469f984403e3bee030ff9aa9a");

        fetchCity(cityValue)
        .then((response) => response.json())
        .then((json) => {
            let coord = json.coord;
            let lonCity = coord.lon;
            let latCity = coord.lat;

        let fetchWeather = (lat, lon) => fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=8460ebd469f984403e3bee030ff9aa9a&units=metric");
        
        fetchWeather(latCity,lonCity)
        .then((response) => response.json())
        .then((json) => {

            for (let i = 0 ; i < 5 ; i++ ){
                
            let weatherContainer = document.getElementsByClassName("weather-container")[0];
            let newDiv = document.createElement("div");
            let weatherJson = json;
            let paragraph = document.createElement("p");
            paragraph.textContent = weatherJson.list[i * 8].weather.main;
            paragraph.textContent = weatherJson.list[i * 8].main.temp;
            paragraph.textContent = weatherJson.list[i *8].dt_text;
            newDiv.appendChild(paragraph);
            weatherContainer.appendChild(newDiv);

            console.log(json);
            }

        })

        addImage(cityValue);

        });


    }catch{
        console.log("error");
    }
}

