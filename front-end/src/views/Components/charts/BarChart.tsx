import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  title: {
    text: "Sale & Purchase",
  },
  series: [
    {
      data: [3, 2, 3],
    },
    {
      data: [15, 3, 1],
    },
  ],
  credits: { enabled: false },
};

const BarChart = () => {
  return <HighchartsReact highcharts={Highcharts} options={options} />;
};

export default BarChart;
