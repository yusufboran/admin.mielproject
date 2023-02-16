import * as React from "react";
import {
  Avatar,
  Box,
  Card,
  Dialog,
  DialogContent,
  Fab,
  Grid,
  Hidden,
  Button,
  Icon,
  IconButton,
  styled,
  useTheme,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import { Span } from "app/components/Typography";
import { format } from "date-fns";
import { Fragment } from "react";
import { red } from "@mui/material/colors";
import { Link } from "react-router-dom";

const ProjectName = styled(Span)(({ theme }) => ({
  marginLeft: 24,
  fontWeight: "500",
  [theme.breakpoints.down("sm")]: { marginLeft: 4 },
}));

const StarOutline = styled(Fab)(() => ({
  marginLeft: 0,
  boxShadow: "none",
  background: "#08ad6c !important",
  backgroundColor: "rgba(9, 182, 109, 1) !important",
}));

const StyledAvatar = styled(Avatar)(() => ({
  width: "32px !important",
  height: "32px !important",
}));

const RowCards = () => {
  const { palette } = useTheme();
  const textMuted = palette.text.secondary;
  const [open, setOpen] = React.useState(false);
  const [selectedItem, setSelectedItem] = React.useState(false);

  const handleClickOpen = (item) => {
    setSelectedItem(item);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const projectDelete = () => {
    setOpen(false);
    removeObjectWithId(projectsData, selectedItem.id);
    setSelectedItem(null);
  };

  function removeObjectWithId(arr, id) {
    const objWithIdIndex = arr.findIndex((obj) => obj.id === id);
    arr.splice(objWithIdIndex, 1);

    return arr;
  }

  const projectsData = [
    {
      id: 1,
      title: "Nidapark",
      updateDate: 1669277071387,
      partners: [
        "https://img.favpng.com/6/12/4/emlak-konut-esenler-residences-real-estate-project-ist-ekgyo-png-favpng-ncEJZ9VkBzibLWia28xqjH5s1_t.jpg",
        "https://abcgazetesi.com/d/news/66636.jpg",
      ],
      information:
        "Veniam laboris pariatur pariatur veniam proident sit. Aliquip deserunt reprehenderit proident deserunt velit non. Eu enim minim elit adipisicing magna ullamco dolore aliquip in mollit adipisicing occaecat sit. Quis dolor ipsum aute culpa minim aliqua.Esse magna nisi culpa laborum sunt cillum aute deserunt. Eiusmod fugiat dolor dolore duis ad et officia do in veniam aliqua aliqua. Sint dolore culpa voluptate in cupidatat sit culpa velit. Laboris consectetur nisi dolore deserunt esse occaecat eiusmod eiusmod aute dolore labore veniam exercitation.",
      imgUrl:
        "https://images.unsplash.com/photo-1659535824233-966cc8de61a5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1172&q=80",
    },
    {
      id: 2,
      title: "YeşilPınar",
      updateDate: 1669276992918,
      partners: [
        "https://www.tahincioglu.com/assets/images/mini_logo_red.svg",
        "https://img.favpng.com/6/12/4/emlak-konut-esenler-residences-real-estate-project-ist-ekgyo-png-favpng-ncEJZ9VkBzibLWia28xqjH5s1_t.jpg",
        "https://abcgazetesi.com/d/news/66636.jpg",
      ],
      information:
        "Amet duis non tempor est irure anim laborum anim voluptate veniam Lorem duis.Occaecat qui dolor qui consectetur laborum dolore enim eu sint commodo voluptate aliqua nostrud eu. Laborum culpa ea nisi exercitation dolor reprehenderit anim non irure et",
      imgUrl:
        "https://images.unsplash.com/photo-1666756240261-d2a79080c069?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1261&q=80",
    }
  ];

  return projectsData.map((item) => (
    <Fragment key={item.id}>
      <Card sx={{ py: 1, px: 2 }} className="project-card">
        <Grid container alignItems="center">
          <Grid item md={5} xs={7}>
            <Box display="flex" alignItems="center">
              <Hidden smDown>
                <StarOutline size="small">
                  <Icon>next_week</Icon>
                </StarOutline>
              </Hidden>
              <ProjectName>{item.title}</ProjectName>
            </Box>
          </Grid>

          <Grid item md={3} xs={4}>
            <Box color={textMuted}>
              {format(item.updateDate, "MM/dd/yyyy HH:MM")}
            </Box>
          </Grid>

          <Hidden smDown>
            <Grid item xs={3}>
              <Box
                display="flex"
                position="relative"
                marginLeft="-0.875rem !important"
              >
                {item.partners ? (
                  <>
                    <StyledAvatar src={item.partners[0]} />
                    <StyledAvatar src={item.partners[1]} />
                  </>
                ) : null}

                {item.partners && item.partners.length > 2 ? (
                  <StyledAvatar sx={{ fontSize: "14px" }}>
                    +{item.partners.length - 2}{" "}
                  </StyledAvatar>
                ) : null}
              </Box>
            </Grid>
          </Hidden>

          <Grid item xs={1}>
            <Box display="flex" justifyContent="flex-end">
              <Link
                to={`/projects/edit/${item.title
                  .split(" ")
                  .join("-")
                  .toLowerCase()}?id=${item.id} `}
                className="btn btn-brand"
              >
                <IconButton>
                  <Icon>edit</Icon>
                </IconButton>
              </Link>
              <IconButton
                sx={{ color: red[700] }}
                onClick={() => handleClickOpen(item)}
              >
                <Icon>delete</Icon>
              </IconButton>
              <Dialog
                open={open}
                keepMounted
                onClose={handleClose}
                aria-describedby="alert-dialog-slide-description"
              >
                <DialogContent>
                  <DialogContentText id="alert-dialog-slide-description">
                    Are you sure you want to delete?
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button sx={{ color: red[700] }} onClick={projectDelete}>
                    Delete
                  </Button>
                  <Button onClick={handleClose}>Cancel</Button>
                </DialogActions>
              </Dialog>
            </Box>
          </Grid>
        </Grid>
      </Card>
      <Box py={1} />
    </Fragment>
  ));
};

export default RowCards;
