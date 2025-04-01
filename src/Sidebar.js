import React from 'react';
import "./Sidebar.css";
import TwitterIcon from '@mui/icons-material/Twitter';  // Correct import
import SidebarOption from './SidebarOption'; // Ensure the correct path
import HomeIcon from '@mui/icons-material/Home';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SearchIcon from '@mui/icons-material/Search';
import MailOutlineIcon from '@mui/icons-material/MailOutline';  // Correct import
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';  // Correct import
import PermIdentityIcon from '@mui/icons-material/PermIdentity';  // Correct import
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';  // Correct import
import {Button} from "@mui/material";
function Sidebar() {
    return (
      <div className="sidebar">
        <TwitterIcon className="sidebar__twitterIcon" />
  
        <SidebarOption active Icon={HomeIcon} text="Home" />
        <SidebarOption Icon={SearchIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />
  
        {/* Button -> Tweet */}
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Tweet
        </Button>
      </div>
    );
  }
  
  export default Sidebar;
