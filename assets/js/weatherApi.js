// function for diplay the weather for the next 5 days 

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

        let fetchWeather = (lat, lon) => fetch("https://api.openweathermap.org/data/2.5/forecast?lat="+lat+"&lon="+lon+"&appid=8460ebd469f984403e3bee030ff9aa9a");
        
        fetchWeather(latCity,lonCity)
        .then((response) => response.json())
        .then((json) => {
            console.log(json);
        })


        });


    }catch{

    }
}

