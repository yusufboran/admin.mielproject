import { Box, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import ConsultantsList from "../../components/ConsultantsList";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));
const ConsultantsPage = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          icon={"groups_icon"}
          routeSegments={[{ name: "Consultants", path: "/consultants" }]}
        />
        <ConsultantsList />
      </Box>
    </Container>
  );
};

export default ConsultantsPage;
