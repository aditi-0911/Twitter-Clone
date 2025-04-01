import React from 'react';
import "./Post.css";
import { Avatar } from "@mui/material";
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PublishIcon from '@mui/icons-material/Publish';

function Post({ displayName, username, verified, text, image, avatar }) {
        return (
          <div className="post">
            <div className="post__avatar">
              <Avatar src="https://kajabi-storefronts-production.global.ssl.fastly.net/kajabi-storefronts-production/themes/284832/settings_images/rLlCifhXRJiT0RoN2FjK_Logo_roundbackground_black.png" />
            </div>
            <div className="post__body">
            <div className="post__header">
            <div className="post__headerText">
            <h3>
                {displayName}{" Aditi"}
                <span className="post__headerSpecial">
                  {verified && <VerifiedUserIcon className="post__badge" />} @
                  {username}
                </span>
              </h3>
            </div>
            <div className="post__headerDescription">
              <p>{text}</p>
            </div>
            </div>
            <img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExdmNlbXYyZWhodzFnMWFjbXEyMWtzOXZzdWZpZzk4YzMxY2cwcHY1MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/tXL4FHPSnVJ0A/giphy.gif" alt="" />
          <div className="post__footer">
            <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
          </div>
            </div>
            </div>
        );
    }



export default Post;
