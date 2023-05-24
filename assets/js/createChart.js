export async function createChart(obj) {
  let weatherChartContainer = document.querySelector(".weather-chart-container");
  let content = `
  <canvas id="barCanvas" aria-label="chart" role="img"></canvas>
  `;
  weatherChartContainer.innerHTML += content;
  console.log(obj);

  const barCanvas = document.getElementById("barCanvas");

  await new Chart(barCanvas, {
    type: "line",
    data: {
      labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
      datasets: [
        {
          label: "Température",
          data: [12, 19, 3, 5, 2, 3],
          borderWidth: 1,
        },
      ],
    },
    options: {
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}
