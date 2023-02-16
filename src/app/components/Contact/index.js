import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import DeleteDialog from "../DeleteDialog";
import { Card, Grid } from "@mui/material";
import { getItemsList, deleteItemId } from "app/db/incomingMessages";

const columns = [
  { field: "id", headerName: "ID", width: 60 },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    editable: true,
  },
  {
    field: "email",
    headerName: "Email",
    width: 150,
    editable: true,
  },
  {
    field: "phone",
    headerName: "Phone Number",
    type: "number",
    width: 110,
    editable: true,
  },
  {
    field: "date",
    headerName: "Date",
    type: "date",
    width: 150,
    editable: true,
  },
  {
    field: "message",
    headerName: "Message",
    width: 500,
    editable: false,
  },
];

export default function DataGridDemo() {
  const [items, setItems] = React.useState([]);
  const [selectedRows, setSelectedRows] = React.useState();

  React.useEffect(() => {
    getItemsList(setItems);
  }, []);

  const handleDelete = () => {
    deleteItemId(selectedRows);
  };

  return (
    <Card elevation={3} sx={{ pt: "20px", pb: 5, pl: 3, pr: 3 }}>
      <Box sx={{ height: 400, width: "100%" }}>
        <Grid item xs={12} sm={12} container justifyContent="flex-end">
          {selectedRows && (
            <DeleteDialog
              mt={3}
              position="absolute"
              top="0px"
              deleteButton={() => handleDelete()}
            />
          )}
        </Grid>

        <DataGrid
          rows={items}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          checkboxSelection
          disableSelectionOnClick
          onSelectionModelChange={(ids) => {
            const selectedIDs = new Set(ids);
            const selectedRows = items.filter((row) => selectedIDs.has(row.id));

            setSelectedRows(selectedRows);
          }}
          experimentalFeatures={{ newEditingApi: true }}
        />
      </Box>
    </Card>
  );
}
