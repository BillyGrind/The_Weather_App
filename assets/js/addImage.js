export function addImage(cityName){

    let fetchImage = (cityName) => fetch("https://api.unsplash.com/search/photos?&query=" + cityName );

    fetchImage(cityName)
    .then((response) => response.json())
    .then((json) => {
        
        console.log(json);
    })




}