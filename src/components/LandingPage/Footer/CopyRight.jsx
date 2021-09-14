import { Box, Typography, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles({
  footer: {
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: 30,
    textAlign: "center",
    color: "#ffff",
  },
});

const CopyRight = () => {
  const classes = useStyle();
  return (
    <Box className={classes.footer}>
      <Typography>
        Ⓒ Copyright <span style={{ color: "#CB2821" }}>Project-X</span> All
        Right Reserved
      </Typography>
    </Box>
  );
};

export default CopyRight;
