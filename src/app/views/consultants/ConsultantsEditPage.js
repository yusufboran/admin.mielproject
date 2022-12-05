import { Box, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import ConsultanEditForm from "./ConsultanEditForm";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ConsultantsAddPage = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          icon={"domain"}
          routeSegments={[
            { name: "Consultants", path: "/Consultants" },
            { name: "Edit", path: "/Consultants" },
          ]}
        />
        <ConsultanEditForm />
      </Box>
    </Container>
  );
};

export default ConsultantsAddPage;
