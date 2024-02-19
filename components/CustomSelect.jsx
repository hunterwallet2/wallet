import React from "react";
import { Select, MenuItem, ListItemIcon, Typography } from "@mui/material";

export default function CustomSelect({ options, onChange, selectedCurrency }) {
  return (
    <Select
      value={selectedCurrency}
      size="small"
      fullWidth
      onChange={(e) => onChange(e)}
      sx={{
        "& .MuiSelect-select": {
          backgroundColor: "#e5e7eb",
          color: "#000",
        },
        "& .Mui-selected": {
          display: "flex",
          alignItems: "center",
        },
        "& .MuiListItemIcon-root": {
          marginRight: "8px",
        },
        "& .MuiSelect-icon": {
          display: "none", // Hide default arrow icon
        },
        "& .MuiSelect-selectMenu": {
          paddingLeft: "32px", // Add space for the icon
          position: "relative",
        },
        "& .MuiSelect-selectMenu::before": {
          content: "''",
          position: "absolute",
          left: "8px", // Adjust as needed
          top: "50%",
          transform: "translateY(-50%)",
        },
      }}
    >
      {options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          <ListItemIcon>
            <img src={option.image} alt={option.name} width="24" height="24" />
          </ListItemIcon>
          <Typography variant="inherit">{option.name}</Typography>
        </MenuItem>
      ))}
    </Select>
  );
}
