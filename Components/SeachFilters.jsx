import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import SortIcon from "@mui/icons-material/Sort";

function SeachFilters() {
  return (
    <div className="searchSettings-container">
      <div className="d-flex flex-row">
        <h4 className='icon ms-4 me-2'>1000 </h4>
        <h4 className="me-4">Projectos</h4>
      </div>

      <div className="d-flex flex-row me-4">
        <Dropdown className="me-4  ">
          <Dropdown.Toggle className="blue-button" id="dropdown-basic">
            Centro
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">CUCEI</Dropdown.Item>
            <Dropdown.Item href="#/action-2">CUCEA</Dropdown.Item>
            <Dropdown.Item href="#/action-3">CUCSH</Dropdown.Item>
            <Dropdown.Item href="#/action-3">CUCS</Dropdown.Item>
            <Dropdown.Item href="#/action-3">CUTONALA</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="me-4">
          <Dropdown.Toggle className="blue-button"  id="dropdown-basic">
            Preferencias
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="me-4">
          <Dropdown.Toggle className="blue-button" id="dropdown-basic">
            Disponibilidad
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <SortIcon className="icon" sx={{ fontSize: 40 }} />
      </div>
    </div>
  );
}

export default SeachFilters;
