import { Card, Grid, styled, useTheme, Box } from "@mui/material";
import { Fragment } from "react";
import ConsultantsList from "../../components/ConsultantsList";
import { Breadcrumb, SimpleCard } from "app/components";
import ProjectView from "app/components/ProjectView";
import CustomList from "app/components/CustomList/index";
import FeaturesList from "app/components/FeatureList";
import MapComponent from "app/components/MapComponent/index";
const ContentBox = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
}));

const Title = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: "500",
  marginRight: ".5rem",
  textTransform: "capitalize",
}));

const SubTitle = styled("span")(({ theme }) => ({
  fontSize: "0.875rem",
  color: theme.palette.text.secondary,
}));

const Analytics = () => {
  const { palette } = useTheme();

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
            <MapComponent />
            <ProjectView />
            <ConsultantsList />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12} spacing={3}>
            <CustomList />
            <FeaturesList />
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
