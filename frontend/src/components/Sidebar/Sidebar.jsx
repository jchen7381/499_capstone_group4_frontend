import React, { useState } from 'react';
import './Sidebar.css';
import { IoHeartOutline, IoBookmarkOutline, IoExitOutline, IoDocumentOutline, IoLogoOctocat } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);
  const [buttonVisible, setButtonVisible] = useState(false);
  const [favorite, setFavorite] = useState(false)
  const toggleSidebar = () => {
    setSidebarVisible(!sidebarVisible);
    setButtonVisible(!buttonVisible);

  };
  

  return (
    <div className="sidebar-container">
      <div className="logo">
        <IoLogoOctocat size={25} color="black" />
      </div>
      <div className='sidebar-content'>
          <ul>
            <Link to="/dashboard"><li><button className="dashboard"><IoDocumentOutline/></button></li></Link>
            <Link to="/favorite"><li><button className="favorite"><IoHeartOutline/></button></li></Link>
            <Link to="/library"><li><button className="library"><IoBookmarkOutline/></button></li></Link>
            <Link to="/login"><button className="logout"><IoExitOutline/></button></Link>
          </ul>
        </div>
      </div>
  );
}

export default Sidebar;