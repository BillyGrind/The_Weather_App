export function refresh(){
    let cityValue = document.querySelector(".weather-input-text").value;
    let weatherContainer =
    document.getElementsByClassName("weather-card-container")[0];
    let weatherChartContainer = document.querySelector(".weather-chart-container");

    cityValue="";
    weatherContainer.innerHTML="";
    weatherChartContainer.innerHTML="";

}