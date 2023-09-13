import { Avatar, Card, Grid, Typography } from "@mui/material";
import {
  LocalMall,
  LocalAtm,
  VerticalAlignBottom,
  VerticalAlignTop,
} from "@mui/icons-material";

const summaryData = [
  {
    value: "307,144",
    description: "Total Purchase Due",
    icon: <LocalMall sx={{ color: "#ff9f43" }} />,
    iconBGColor: "#feeded",
  },
  {
    value: "4,385",
    description: "Total Sales Due",
    icon: <LocalAtm sx={{ color: "#28c76f" }} />,
    iconBGColor: "#e5f8ed",
  },
  {
    value: "385,657",
    description: "Today's Sales",
    icon: <VerticalAlignBottom sx={{ color: "#00cfe8" }} />,
    iconBGColor: "#e0f9fc",
  },
  {
    value: "40,000",
    description: "Today's Purchase",
    icon: <VerticalAlignTop sx={{ color: "#ea5455" }} />,
    iconBGColor: "#fceaea",
  },
];

const FinancialSummary = () => {

  return (
    <Grid container spacing={2} marginY={1}>
      {summaryData.map((item) => (
        <Grid item xs={12} md={6} lg={3}>
          <Card
            style={{
              padding: "20px",
            }}
          >
            <Grid container>
              <Grid item xs={2}>
                <Avatar sx={{ backgroundColor: item.iconBGColor }}>
                  {item.icon}
                </Avatar>
              </Grid>
              <Grid item xs={8} marginLeft={2}>
                <Typography fontWeight={500} variant="h6" component="h2">
                  ${item.value}
                </Typography>
                <Typography variant="body2" component="body">
                  {item.description}
                </Typography>
              </Grid>
            </Grid>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default FinancialSummary;
