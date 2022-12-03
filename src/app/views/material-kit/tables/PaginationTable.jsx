import {
  Box,
  Icon,
  IconButton,
  styled,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Card,
  CardHeader,
  CardContent,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const subscribarList = [
  {
    name: "john doe",
    date: "18 january, 2019",
    imgUrl:
      "https://businex.jamstacktemplates.dev/static/media/h-2-01.b1549d14.png",
    status: "close",
    phoneNumber: "05551234567",
  },
  {
    name: "kessy bryan",
    date: "10 january, 2019",
    imgUrl:
      "https://businex.jamstacktemplates.dev/static/media/h-2-01.b1549d14.png",
    status: "open",
    phoneNumber: "05551234567",
  },
  {
    name: "kessy bryan",
    date: "10 january, 2019",
    imgUrl:
      "https://businex.jamstacktemplates.dev/static/media/h-2-01.b1549d14.png",
    status: "open",
    phoneNumber: "05551234567",
  },
  {
    name: "james cassegne",
    date: "8 january, 2019",
    imgUrl:
      "https://businex.jamstacktemplates.dev/static/media/h-2-01.b1549d14.png",
    status: "close",
    phoneNumber: "05551234567",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    imgUrl:
      "https://businex.jamstacktemplates.dev/static/media/h-2-01.b1549d14.png",
    status: "open",
    phoneNumber: "05551234567",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    imgUrl:
      "https://businex.jamstacktemplates.dev/static/media/h-2-01.b1549d14.png",
    status: "open",
    phoneNumber: "05551234567",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    imgUrl:
      "https://businex.jamstacktemplates.dev/static/media/h-2-01.b1549d14.png",
    status: "open",
    phoneNumber: "05551234567",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    imgUrl:
      "https://businex.jamstacktemplates.dev/static/media/h-2-01.b1549d14.png",
    status: "open",
    phoneNumber: "05551234567",
  },
  {
    name: "lucy brown",
    date: "1 january, 2019",
    imgUrl:
      "https://businex.jamstacktemplates.dev/static/media/h-2-01.b1549d14.png",
    status: "open",
    phoneNumber: "05551234567",
  },
];

const PaginationTable = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Card elevation={3} sx={{ pt: "20px", mb: 3, pl: 3, pr: 3 }}>
      <CardHeader
        action={
          <Link to={`/consultants/add`} s style={{ textDecoration: "none" }}>
            <IconButton aria-label="settings">
              <Icon fontSize="small">add</Icon>
            </IconButton>
          </Link>
        }
        title="Consultants"
      />

      <CardContent>
        <Box width="100%" overflow="auto">
          <StyledTable>
            <TableHead>
              <TableRow>
                <TableCell align="left">Name</TableCell>
                <TableCell align="center">Phone Number</TableCell>
                <TableCell align="center">Start Date</TableCell>
                <TableCell align="center">imgUrl</TableCell>
                <TableCell align="right">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {subscribarList
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((subscriber, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">{subscriber.name}</TableCell>
                    <TableCell align="center">
                      {subscriber.phoneNumber}
                    </TableCell>
                    <TableCell align="center">{subscriber.date}</TableCell>
                    <TableCell align="center">{subscriber.imgUrl}</TableCell>
                    <TableCell align="right">
                      <IconButton>
                        <Icon>edit</Icon>
                      </IconButton>
                      <IconButton>
                        <Icon color="error">delete</Icon>
                      </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </StyledTable>

          <TablePagination
            sx={{ px: 2 }}
            page={page}
            component="div"
            rowsPerPage={rowsPerPage}
            count={subscribarList.length}
            onPageChange={handleChangePage}
            rowsPerPageOptions={[5, 10, 25]}
            onRowsPerPageChange={handleChangeRowsPerPage}
            nextIconButtonProps={{ "aria-label": "Next Page" }}
            backIconButtonProps={{ "aria-label": "Previous Page" }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default PaginationTable;
