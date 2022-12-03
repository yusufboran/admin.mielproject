import React from "react";
import { Box, styled } from "@mui/material";
import { Breadcrumb } from "app/components";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ProfilePage = () => {
  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          icon={"person"}
          routeSegments={[{ name: "Profile", path: "/projects" }]}
        />
      </Box>
    </Container>
  );
};

export default ProfilePage;
