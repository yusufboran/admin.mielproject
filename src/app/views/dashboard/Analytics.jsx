import { Grid, styled, Box } from "@mui/material";
import { Breadcrumb } from "app/components";
import ProjectView from "app/components/ProjectView";
import CustomList from "app/components/CustomList/index";
import FeaturesList from "app/components/FeatureList";
import MapChart from "app/components/MapComponent/index";
import Contact from "app/components/Contact/index";
import AddSpeedDialButton from "app/components/AddSpeedDialButton";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));
const Analytics = () => {
  return (
    <Container>
      <Grid spacing={2}>
        <Box className="breadcrumb">
          <Breadcrumb
            icon={"home"}
            routeSegments={[{ name: "Home", path: "/home" }]}
          />
        </Box>
        <Grid container spacing={2}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <ProjectView />
            <Contact />
          </Grid>
          <Grid spacing={2} item lg={4} md={4} sm={12} xs={12}>
            <MapChart />
            <CustomList />
            <FeaturesList />
          </Grid>
        </Grid>

        <AddSpeedDialButton path={"/projects/add"} />
      </Grid>
    </Container>
  );
};

export default Analytics;
