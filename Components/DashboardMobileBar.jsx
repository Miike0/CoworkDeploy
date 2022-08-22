import React from "react";
import BookIcon from "@mui/icons-material/Book";
import SortIcon from "@mui/icons-material/Sort";



function DashboardMobileBar() {
  return (
    <div className=" mobile-dashboard-bar">
        <BookIcon className="icon" sx={{ fontSize: 40 }} />

        <div className="d-flex flex-column text-center">
            <h5 style={{color:"#d49b54"}}>234</h5>
            <h5>Proyectos</h5>
        </div>

        <SortIcon className="icon" sx={{ fontSize: 40 }} />
    </div>
  )
}

export default DashboardMobileBar