import { makeStyles } from "@material-ui/core";

export const useStyled = makeStyles({
  appBar: {
    backgroundColor: "transparent",
  },

  appBarColorClass: {
    background: "rgba(0, 0, 0, 0.5)",
  },
  navList: {
    display: "flex",

    "@media(max-width: 600px)": {
      flexDirection: "column",
    },
  },
  listText: {
    fontSize: 14,
    fontFamily: "Poppins",
    fontWeight: "bold",
    "@media(max-width: 1366px)": {
      fontSize: 12,
    },
    "@media(max-width: 600px)": {
      flexDirection: "column",

      "&.MuiListItem-root": {
        alignItems: "start",
      },
    },

    "& a": {
      color: "white",
      opacity: "0.5",
      textDecoration: "none !important",

      "@media(max-width: 600px)": {
        color: "black",
      },
    },
  },
  button: {
    borderRadius: 32,
    color: "white",
    opacity: "0.5",
    background: "#5B6B4E",
    border: "1px solid #75A650",
    fontWeight: "bold",
    padding: "10px 20px",
    textTransform: "uppercase",
    textDecoration: "none",
    fontSize: 12,
    "&:hover": {
      background: "rgba(0,0,0,0.3)",
    },

    "@media(max-width: 1366px)": {
      fontSize: 12,
    },
    "@media(max-width: 600px)": {
      "&:hover": {
        color: "black",
      },
    },
  },
  drawer: {
    "& .MuiDrawer-paper": {
      width: 300,
      paddingTop: 20,
    },
  },
  closebtn: {
    "&:hover": {
      background: "none",
    },
  },
  resumeBox: {
    textAlign: "right",
    "@media(max-width: 600px)": {
      textAlign: "left",
    },
  },
});
