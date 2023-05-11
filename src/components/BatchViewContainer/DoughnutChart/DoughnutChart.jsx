import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import { DoughnutController } from "chart.js";

Chart.register(DoughnutController);

const DoughnutChart = ({ data, colors, labels }) => {
  const chartRef = useRef(null);

  useEffect(() => {
    const chartOptions = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          position: "bottom",
        },
        tooltip: {
          callbacks: {
            label: (context) => {
              const value = data[context.dataIndex];
              return ` ${value}`;
            },
          },
        },
      },
    };

    const chartData = {
      labels: labels,
      datasets: [
        {
          data: data,
          backgroundColor: colors,
        },
      ],
    };

    const myChart = new Chart(chartRef.current, {
      type: "doughnut",
      data: chartData,
      options: chartOptions,
    });

    return () => {
      myChart.destroy();
    };
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <canvas ref={chartRef} />
    </div>
  );
};

export default DoughnutChart;
