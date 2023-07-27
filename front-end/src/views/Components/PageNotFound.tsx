import { useNavigate } from "react-router-dom";
import { Button, Box, Typography } from "@mui/material";

const PageNotFound = () => {
  const navigate = useNavigate();
  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <Typography variant="h4" component="h1" align="center">
          Page Not Found
        </Typography>
        <Button
          variant="contained"
          sx={{ marginTop: "20px" }}
          onClick={(): void => navigate(-1)}
        >
          Go Back
        </Button>
      </Box>
    </>
  );
};

export default PageNotFound;
