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
import ConfirmationDialog from "app/components/ConfirmationDialog";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getConsultansList, deleteConsultansId, fileDelete } from "../firabase";

const StyledTable = styled(Table)(() => ({
  whiteSpace: "pre",
  "& thead": {
    "& tr": { "& th": { paddingLeft: 0, paddingRight: 0 } },
  },
  "& tbody": {
    "& tr": { "& td": { paddingLeft: 0, textTransform: "capitalize" } },
  },
}));

const ConsultantsList = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    getItem();
  }, []);

  async function getItem() {
    getConsultansList(setItems);
  }
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (_, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleDelete = (item) => {
    fileDelete(item.imgUrl);
    deleteConsultansId(item.id);
    getConsultansList(setItems);
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
                <TableCell align="center">Action</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {items
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((item, index) => (
                  <TableRow key={index}>
                    <TableCell align="left">
                      {item.firstName + " " + item.lastName}
                    </TableCell>
                    <TableCell align="center">{item.phoneNumber}</TableCell>
                    <TableCell align="center">{item.startDate}</TableCell>
                    <TableCell align="center">
                      {item.imgUrl ? "true" : "Null"}
                    </TableCell>
                    <TableCell align="right">
                      <Link
                        to={`/consultants/edit/}?id=${item.id} `}
                        className="btn btn-brand"
                      >
                        <IconButton>
                          <Icon>edit</Icon>
                        </IconButton>
                      </Link>
                      <ConfirmationDialog
                        deleteButton={() => handleDelete(item)}
                      />
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
            count={items.length}
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

export default ConsultantsList;
