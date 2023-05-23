export async function addImage(cityName){

    let fetchImage = async (cityName) => await fetch("https://api.unsplash.com/search/photos?client_id=QEvoym4ayF4WEzX203pycsVjzYphQPzjst_fURPe3hw&query=" + cityName );

    fetchImage(cityName)
    .then((response) => response.json())
    .then((data) => {
        let bckImg = document.querySelector(".weather-container");
        let imageUrl = data.results[0].urls.regular;
        bckImg.style.backgroundImage=`url(${imageUrl})`;
        // console.log(imageUrl); 
    })

}