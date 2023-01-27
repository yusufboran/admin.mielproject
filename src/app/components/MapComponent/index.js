import * as React from "react";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import MapChart from "./MapView";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import PublicIcon from "@mui/icons-material/Public";
import { Icon, IconButton, Paper } from "@mui/material";
import MapList from "./List";
import FormLocaion from "./FormLocaion";
import { addItem, getItemsList, updateItemId } from "app/db/locaion";

export default function LabTabs() {
  const [value, setValue] = React.useState("1");
  const [items, setItems] = React.useState([]);
  const [editItem, setEditITem] = React.useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleUpdate = (state) => {
    updateItemId(state);
    setEditITem(null);
      setValue("1");
  };

  const handleEdit = (item) => {
    setEditITem(item);
    setValue("edit");
  };

  React.useEffect(() => {
    setEditITem(null);
    getItemsList(setItems);
  }, []);

  const newLocation = (item) => {
    addItem(item);
    setValue("1");
  };

  return (
    <Paper sx={{ marginBottom: 2, borderRadius: 1 }}>
      <TabContext value={value} centered>
        <TabList onChange={handleChange} aria-label="Map View" centered>
          <Tab icon={<PublicIcon />} aria-label="phone" value="1" />
          <Tab
            icon={<FormatListBulletedIcon />}
            aria-label="Map List"
            value="2"
          />
          <Tab
            icon={
              <IconButton edge="end" aria-label="add">
                <Icon color="primary">add_location_alt</Icon>
              </IconButton>
            }
            aria-label="favorite"
            value="add"
          />
          {editItem && (
            <Tab icon={<Icon>edit</Icon>} aria-label="favorite" value="edit" />
          )}
        </TabList>
        <TabPanel value="1">
          <MapChart items={items} />
        </TabPanel>
        <TabPanel value="2">
          <MapList items={items} handleEdit={handleEdit} />
        </TabPanel>
        <TabPanel value="add">
          <FormLocaion func={newLocation} />
        </TabPanel>
        <TabPanel value="edit">
          <FormLocaion func={handleUpdate} editItem={editItem} />
        </TabPanel>
      </TabContext>
    </Paper>
  );
}
