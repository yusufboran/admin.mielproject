import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import { fileUpload } from "../../../firebase";
import ConsultantsForm from "app/components/ConsultantsForm";

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
            { name: "Add", path: "/consultants/add" },
          ]}
        />

        {/* <ConsultanForm fileUpload={fileUpload} /> */}
        <SimpleCard title="New Components Form">
          <ConsultantsForm fileUpload={fileUpload} />
        </SimpleCard>
      </Box>
    </Container>
  );
};

export default ConsultantsAddPage;
