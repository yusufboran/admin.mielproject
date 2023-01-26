import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import ConsultantsForm from "app/components/ConsultantsForm";
import React from "react";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ConsultantsEditPage = () => {
  var url = window.location.href.split("/");
  var consultantsId = url[url.length - 1];

  const updateConsultant = (file, state, deleteCheck) => {
    if (deleteCheck) {
      //  fileDelete(state.path);
      //   fileUpdate(file, state, consultantsId);
    } else {
      //  updateConsultansId(consultantsId, state);
    }
  };

  console.log();

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
        <SimpleCard>
          <ConsultantsForm
            func={(file, state, deleteCheck) =>
              updateConsultant(file, state, deleteCheck)
            }
            id={consultantsId}
          />
        </SimpleCard>
      </Box>
    </Container>
  );
};

export default ConsultantsEditPage;
