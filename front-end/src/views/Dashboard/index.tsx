import { Card, Grid } from "@mui/material";
import BarChartComponent from "../Components/charts/BarChart";
import FinancialSummary from "./FinancialSummary";
import PieChart from "../Components/charts/PieChart";

const Dashboard = () => {
  return (
    <>
      <FinancialSummary />

      <Grid container spacing={2}>
        <Grid item xs={12} md={6} lg={8}>
          <Card
            style={{
              padding: "20px",
            }}
          >
            <BarChartComponent />
          </Card>
        </Grid>
        <Grid item xs={12} md={6} lg={4}>
          <Card
            style={{
              padding: "20px",
            }}
          >
            <PieChart />
          </Card>
        </Grid>
      </Grid>
    </>
  );
};

export default Dashboard;
