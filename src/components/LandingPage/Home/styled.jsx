import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  hero: {
    height: "87vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    textAlign: "center",
    justifyContent: "center",
    "@media(max-width: 1366px)": {
      height: "85vh",
    },
    "@media(max-width: 600px)": {
      height: '70vh',
    },  
     "@media(max-width: 400px)": {
      height: '60vh',
    },
  },
  title: {
    background: `-webkit-linear-gradient(#BCFFA6, #FF3767C2)`,
    "-webkit-background-clip": "text",
    "-webkit-text-fill-color": "transparent",
    fontSize: 40,
    fontFamily: "Roboto Slab",
    fontWeight: "bold",
    "@media(max-width: 1366px)": {
      textAlign: "center",
      fontSize: 36,
    },
    "@media(max-width: 600px)": {
      textAlign: "center",
      fontSize: 22,
    },
    "@media(max-width: 400px)": {
      fontSize: 18,
    },
  },
  subtitle: {
    color: "#75836A",
    fontSize: 20,
    fontFamily: "Poppins",
    "@media(max-width: 1366px)": {
      fontSize: 18,
    },
    "@media(max-width: 600px)": {
      fontSize: 12,
    }, 
    "@media(max-width: 400px)": {
      fontSize: 10,
    },
  },
  heroImg: {
    position: "absolute",
  },
  heroTitle: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    marginTop: 174,

    "@media(max-width: 1366px)": {
      marginTop: 138,
    },
    "@media(max-width: 600px)": {
      marginTop: 68,
    }, 
    "@media(max-width: 400px)": {
      marginTop: 5,
    },
  },
  client: {
    // marginTop: 20,
    padding: "0px 20px",
    // margin:"auto",
    background:
      "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.0855) 100%)",
    filter: "drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.07))",
  },
  icons: {
    display: "flex",
    flexDirection: "column",
    color: "rgba(255, 255, 255, 0.3)",
  },
  homePrfImg: {
    height: 500,
    width: 300,
    borderRadius: 0,
    margin: "auto",
    // backgroundSize: '100% 100%',

    "& .MuiAvatar-img": {
      objectFit: "contain ",
    },

    "@media(max-width: 1366px)": {
      height: 380,
      width: 300,
    },
    "@media(max-width: 600px)": {
      height: 340,
      width: 300,
    },
    "@media(max-width: 400px)": {
      height: 300,
      width: 300,
    },
  },
  clientImg: {
    height: 100,
    width: 100,
    borderRadius: 0,
    margin: "auto",
    // backgroundSize: '100% 100%',

    "& .MuiAvatar-img": {
      objectFit: "contain ",
    },

    "@media(max-width: 600px)": {
      height: 80,
      width: 50,

    },
    "@media(max-width: 400px)": {
      height: 50,
      width: 50,

    },
  },
});
