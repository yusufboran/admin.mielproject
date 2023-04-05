import React, { useEffect, useState } from "react";
import { Box, Grid, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import About from "app/components/About/Context";
import PageHeader from "app/components/About/Header/PageHeader";
import { getItemsList } from "app/db/about";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const AboutPage = () => {
  var [header, setHeader] = useState("");
  var [content, setContent] = useState("");

  useEffect(() => {
    getItemsList(setHeader, setContent);
  }, []);

  return (
    <Container>
      {header && content && (
        <>
          <Box className="breadcrumb">
            <Breadcrumb
              icon={"person"}
              routeSegments={[{ name: "About Me Page", path: "/about-me" }]}
            />
          </Box>
          <Grid>
            <PageHeader
              image={header.image_path}
              context_tr={header.context_tr}
              context_en={header.context_en}
            />

          
            <About image={content.image_path} context_tr={content.context_tr} context_en={content.context_en} />
          </Grid>
        </>
      )}
    </Container>
  );
};

export default AboutPage;
