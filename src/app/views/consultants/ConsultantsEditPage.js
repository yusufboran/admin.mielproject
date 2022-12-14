import { Box, styled } from "@mui/material";
import { Breadcrumb, SimpleCard } from "app/components";
import ConsultantsForm from "app/components/ConsultantsForm";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { getConsultansId, updateConsultansId } from "../../firabase";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ConsultantsEditPage = () => {
  const location = useLocation();
  const consultantsId = new URLSearchParams(location.search).get("id");

  const updateConsultant = (file, url, state) => {
    if (state.path === null) {
      console.log(file[0]);
      console.log(url);
      console.log(state);
      console.log(
        "updateConsultant file change, resim yükleme hatalı şuan burda resim yükleme düzelince bu bilgiler ile danışman bilgileri güncellenecek"
      );
    } else {
      updateConsultansId(consultantsId, state);
    }
  };

  const navigate = useNavigate();

  const [file, setFile] = React.useState([]);
  const [state, setState] = useState();

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
            func={(file, url, state) => updateConsultant(file, url, state)}
            id={consultantsId}
          />
        </SimpleCard>
      </Box>
    </Container>
  );
};

export default ConsultantsEditPage;
