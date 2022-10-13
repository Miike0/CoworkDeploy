import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import SortIcon from "@mui/icons-material/Sort";
import SearchIcon from "@mui/icons-material/Search";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
const styles = (theme) => ({
  notchedOutline: {
    borderWidth: "1px",
    borderColor: "yellow !important",
  },
});
function SeachFilters() {
  return (
    <div className="searchSettings-container mx-auto">
      <div>
        <div className="d-flex flex-row">
          <SearchIcon className="icon" sx={{ fontSize: 40 }}/>
          <input
            type="text"
            className="form-control form-input search-form"
            placeholder="Search..."
          />

        </div>
      </div>

      <SortIcon className="icon" sx={{ fontSize: 40 }} />
    </div>
  );
}

export default SeachFilters;
