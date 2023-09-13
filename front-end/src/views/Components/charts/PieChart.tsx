import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import React from "react";

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "Top 5 Products",
    align: "center",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: "pointer",
      dataLabels: {
        enabled: true,
        format: "<b>{point.name}</b>: {point.percentage:.1f} %",
      },
    },
  },
  series: [
    {
      name: "Sale",
      colorByPoint: true,
      data: [
        {
          name: "Bread",
          y: 70.67,
          sliced: true,
          selected: true,
        },
        {
          name: "Peanut",
          y: 14.77,
        },
        {
          name: "Butter",
          y: 4.86,
        },
        {
          name: "Super",
          y: 2.63,
        },
        {
          name: "Yogurt",
          y: 1.53,
        },
      ],
    },
  ],
  credits: { enabled: false },
};

const PieChart = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default PieChart;
