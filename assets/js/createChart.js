export async function createChart(obj) {

  let weatherChartContainer = document.querySelector(".weather-chart-container");
  weatherChartContainer.style.display="block";
  let content = `
  <canvas id="barCanvas" aria-label="chart" role="img"></canvas>
  `;
  weatherChartContainer.innerHTML += content;

  let temperatureArray=[];
  let dateArray =[];

  for (let i = 0; i < 5; i++) {
    let temperature = Math.round(obj.list[i * 8].main.temp);
    temperatureArray.push(temperature);
    let date = obj.list[i * 8].dt_txt.split(" ")[0];
    let [year, month, day] = date.split("-");
    let formattedDate = `${day}-${month}-${year}`;
    dateArray.push(formattedDate);
  }

  // console.log(obj);
  // console.log(temperatureArray);

  const barCanvas = document.getElementById("barCanvas");

  await new Chart(barCanvas, {
    type: "line",
    data: {
      labels: dateArray,
      datasets: [
        {
          label: "Température",
          data: temperatureArray,
          borderWidth: 2,
          backgroundColor: "#daff7d",
        },
      ],
    },
    options: {
      title: {
        display: true,
        text: "Température des 5 prochains jours",
        fontColor: "black",
        fontSize: 18,
      },
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
