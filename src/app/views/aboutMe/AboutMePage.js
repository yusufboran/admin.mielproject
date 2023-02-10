import React from "react";
import { Box, styled } from "@mui/material";
import { Breadcrumb } from "app/components";
import About from "app/components/About/Context";
import PageHeader from "app/components/About/Header/PageHeader";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: { margin: "16px" },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: { marginBottom: "16px" },
  },
}));

const ProfilePage = () => {
  var poem =
    "<i>Sana dün bir tepeden baktım aziz İstanbul!<br/>  Görmedim gezmediğim, sevmediğim hiçbir yer.<br/>  Ömrüm oldukça, gönül tahtıma keyfince kurul!<br/>  Sade bir semtini sevmek bile bir ömre değer.<br/> <br/> Nice revnaklı şehirler görülür dünyada,<br/>  Lakin efsunlu güzellikleri sensin yaratan.<br/>  Yaşamıştır derim, en hoş ve uzun rü’yada<br/>  Sende çok yıl yaşayan, sende ölen, sende yatan.<br/>  <br/></i> Yahya Kemal Beyatlı  ";

  return (
    <Container>
      <Box className="breadcrumb">
        <Breadcrumb
          icon={"person"}
          routeSegments={[{ name: "About Me Page", path: "/about-me" }]}
        />

        <PageHeader
          image={"https://wallpaperaccess.com/full/3155150.jpg"}
          context={poem}
        />

        <About
          image={
            "https://images.unsplash.com/photo-1564407727371-3eece6c58961?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
          }
          context="Sit reprehenderit officia dolore duis nisi. Enim id voluptate enim nulla culpa sint. Velit velit aute quis adipisicing in ipsum ullamco. Sit occaecat cillum adipisicing cupidatat exercitation ullamco mollit occaecat est Lorem proident sint non. Aute anim nostrud aute amet fugiat eu aute officia non commodo cillum.Et adipisicing quis consectetur velit fugiat anim culpa ex aliqua irure duis occaecat cillum. Irure nostrud magna quis aliquip duis ad laborum sint non fugiat enim irure fugiat eiusmod. Cupidatat aliquip do proident minim ex minim ex. Sunt proident aliqua laboris nulla commodo exercitation do reprehenderit nulla dolor minim excepteur ad anim. Eu dolore ullamco occaecat amet dolor cillum proident. Ut eiusmod nostrud aliqua nostrud commodo sunt fugiat cillum amet incididunt magna officia. Elit quis est consequat sunt non ut ullamco.Cillum est sit in pariatur magna eiusmod nulla excepteur nulla incididunt mollit. Commodo eu adipisicing elit minim sint in ullamco. Est sit excepteur tempor occaecat minim occaecat occaecat. Lorem labore occaecat sunt enim laboris consectetur quis pariatur pariatur.Amet et id eiusmod ut. Id aliquip est officia ex ut excepteur proident mollit Lorem amet. Lorem amet reprehenderit Lorem est veniam. Pariatur dolor mollit proident qui est ea anim dolor dolor labore sint incididunt ex. Proident reprehenderit sint id occaecat."
        />
      </Box>
    </Container>
  );
};

export default ProfilePage;
