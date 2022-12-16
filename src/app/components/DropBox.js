import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function DropBox({ selectItem, setSelectItem, List }) {
  const handleChange = (event) => {
    setSelectItem(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120, marginY: 2 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Select Item...</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={selectItem}
          label="Select Item..."
          onChange={handleChange}
        >
          {List.map((item) => {
            return <MenuItem value={item.title}>{item.title}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
