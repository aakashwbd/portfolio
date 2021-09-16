import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  icon: {
    color: "#9289F3",
  },
  titleList: {
    padding: 0,
  },
  bg: {
    background: "#FFFFFF",
    padding: "10px 25px",
    borderRadius: 8,
  },
  btn: {
    background: "#9289F3",
    color: "white",
    "&:hover": {
      color: "black",
    },
  },
  btnText: {
    fontFamily: "Montserrat",
    color: "rgba(0, 0, 0, 0.3)",
  },
  cardTitle: {
    padding: '5px 16px',
    "& .MuiTypography-root": {
      fontFamily: "Montserrat",
      fontSize: 18,
      // fontWeight: "bold",
    },
  },
  card: {
   
    // height: 50,
    borderRadius: 10,
    boxShadow: " 5px 5px 10px rgba(0, 0, 0, 0.03)",
  },
  cardIcon: {
    position: 'relative',
    top: 4,
    right: 0
  },
  textField: {
    background: "#FFFFFF",
    border: "1px solid #E5E5E5",
    padding: "5px 10px",
    borderRadius: 8,
  }, 
  dob: {
    // height: 40,
    // width: "100%",
    background: "#FFFFFF",
    border: "1px solid #E5E5E5",
    padding: "5px 10px",
    borderRadius: 8,
  },
  input: {
    display: "none",
  },
  btnColor: {
    color: "white",
    background:
      "linear-gradient(180deg, #9289F3 0%, rgba(139, 137, 243, 0.81) 100%)",
  },

  name: {
    fontFamily: 'Poppins',
    fontWeight: 'bold',
    fontSize: 20,
    letterSpacing: '0.1rem',
  },
  

});
