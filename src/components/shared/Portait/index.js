import { Avatar,makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  avatar: {
    margin: 'auto',
    
    '& .MuiAvatar-img': {
      objectFit: 'contain '
    }
  }
})


const Portait = ({ w, h, src}) => {
  
  const sizer = () => {
    return {
      width: w,
      height: h,
      borderRadius: 0,
      
     
    };
  };

  const classes= useStyle()
  return <Avatar className={classes.avatar} style={sizer()} src={src}   />;
};

export default Portait;
