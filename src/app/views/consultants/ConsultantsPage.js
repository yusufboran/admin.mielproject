import { Box, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import PaginationTable from "../material-kit/tables/PaginationTable";

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
        <PaginationTable />
      </Box>
    </Container>
  );
};

export default ConsultantsPage;
