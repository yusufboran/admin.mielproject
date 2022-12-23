import { Grid, styled, Box } from "@mui/material";
import { Fragment } from "react";
import ConsultantsList from "../../components/ConsultantsList";
import { Breadcrumb } from "app/components";
import ProjectView from "app/components/ProjectView";
import CustomList from "app/components/CustomList/index";
import FeaturesList from "app/components/FeatureList";
import MapChart from "app/components/MapComponent/index";
import Contact from "app/components/Contact/index";
import AddSpeedDialButton from "app/components/AddSpeedDialButton";

const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const Analytics = () => {
  return (
    <Fragment>
      <ContentBox className="analytics">
        <Box className="breadcrumb">
          <Breadcrumb
            icon={"home"}
            routeSegments={[{ name: "Home", path: "/home" }]}
          />
        </Box>

        <Grid container spacing={3}>
          <Grid item lg={8} md={8} sm={12} xs={12}>
            <ProjectView />
            <ConsultantsList />
            <Contact />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12} spacing={3}>
            <MapChart />
            <CustomList />
            <FeaturesList />
          </Grid>
        </Grid>
      </ContentBox>

      <AddSpeedDialButton />
    </Fragment>
  );
};

export default Analytics;
