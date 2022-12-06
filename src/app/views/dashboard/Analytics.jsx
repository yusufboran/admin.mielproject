import { Card, Grid, styled, useTheme, Box } from "@mui/material";
import { Fragment } from "react";
import PaginationTable from "../material-kit/tables/PaginationTable";
import DoughnutChart from "./shared/Doughnut";
import RowCards from "./shared/RowCards";
import { Breadcrumb } from "app/components";
import ProjectView from "app/components/ProjectView";

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
            <ProjectView />
            <PaginationTable />
          </Grid>

          <Grid item lg={4} md={4} sm={12} xs={12}>
            <Card sx={{ px: 3, py: 2, mb: 3 }}>
              <Title>Sales figures</Title>
              <SubTitle>Last 30 days</SubTitle>

              <DoughnutChart
                height="200px"
                color={[
                  palette.primary.dark,
                  palette.primary.main,
                  palette.primary.light,
                ]}
              />
            </Card>
          </Grid>
        </Grid>
      </ContentBox>
    </Fragment>
  );
};

export default Analytics;
