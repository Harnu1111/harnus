import React from 'react';
import CloseIcon from "@mui/icons-material/Close";

const Sidebar = () => {
  return (
    <div className="Sidebar_container">
      <div className="Sidebar_wrapper">
        <span className='Sidebar-title'>
         
          <h3>MENU</h3>

          <i> <CloseIcon/> </i>
        </span>
      </div>
    </div>
  );
}

export default Sidebar