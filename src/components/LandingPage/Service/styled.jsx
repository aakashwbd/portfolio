import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  wrapper: {
    marginTop: 100,
    "@media(max-width: 400px)": {
      marginTop: 30,
    },
  },

  card: {
    height: 300,
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    textAlign: "center",
    background: "transparent",

    "&:hover": {
      backgroundColor: " rgba(0, 0, 0, 0.4)",
      borderBottom: "10px solid #FF8267",
    },
    "@media(max-width: 400px)": {
      height: "100%",
    },
  },
  title: {
    fontSize: 25,
    color: "white",
    letterSpacing: "0.2em",
    marginBottom: 15,

    "@media(max-width: 1366px)": {
      fontSize: 16,
    },
    "@media(max-width: 600px)": {
      textAlign: "center",
      fontSize: 12,
    },
    "@media(max-width: 400px)": {
      marginBottom: 0,
    },
  },
  subTitle: {
    fontSize: 38,
    background: `-webkit-linear-gradient(#BCFFA6, #FF3767)`,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",

    "@media(max-width: 1366px)": {
      fontSize: 36,
    },
    "@media(max-width: 600px)": {
      textAlign: "center",
      fontSize: 24,
    },
  },
  cardTitle: {
    fontSize: 18,
    color: "#B1BAAB",
    fontFamily: "Poppins",
    fontWeight: "bold",
    paddingBottom: 15,
    "@media(max-width: 1366px)": {
      textAlign: "center",
      fontSize: 16,
      fontWeight: "bold",
      marginTop: 10,
    },
    "@media(max-width: 600px)": {
      textAlign: "center",
      fontSize: 15,
      fontWeight: "bold",
      marginTop: 10,
    },
  },
  CardSubTitle: {
    fontSize: 14,
    color: "#B1BAAB",
    fontFamily: "Poppins",
    "@media(max-width: 1366px)": {
      textAlign: "center",
      fontSize: 12,
    },
    "@media(max-width: 600px)": {
      textAlign: "center",
      fontSize: 12,
      fontWeight: "bold",
      marginTop: 10,
    },
  },
});
