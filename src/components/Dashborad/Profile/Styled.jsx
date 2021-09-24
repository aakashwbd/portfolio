import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  wrapper: {
    maxWidth: "60%",
  },
  listIcon: {
    minWidth: 40,
  },
  uploadImage: {
    height: 120,
    width: 120,
  },
  dialogTitle: {
    fontSize: 20,
    fontWeight: "bold",
    textTransform: "capitalize",
    fontFamily: "Gordita",
  },
  prfileCard: {
    marginTop: 100,
    borderRadius: "8px 8px 0px 0px",
  },
  trainingCard: {
    borderRadius: " 0px 0px 8px 8px ",
    marginBottom: 200,
  },
  availalbityCard: {
    borderRadius: 0,
  },

  profileName: {
    fontSize: 18,
    fontFamily: "Gordita",
    fontWeight: "bold",
  },
  profileCountry: {
    fontSize: 12,
    fontFamily: "Gordita",
  },
  profileImge: {
    height: 50,
    width: 50,
  },
  listImg: {
    minWidth: 80,
  },
  aboutMe: {
    fontFamily: "Gordita",
    textAlign: "justify",
    fontSize: 14,
  },
  availability: {
    fontFamily: "Gordita",
    fontSize: 14,
    fontWeight: "bold",
  },
  portionTitle: {
    fontFamily: "Gordita",
    fontSize: 20,
    fontWeight: "bold",
  },
  showChipBox: {
    display: "flex",
  },
  showChip: {
    background: "grey",
    color: "white",
  },
  tblLastRow: {
    borderBottom: "none !important",
  },
  tblLastRowData: {
    border: "1px solid #B7EB8F",
    padding: "3px 15px",
    borderRadius: 8,
    background: "#F6FFED",
  },
  saveBtn: {
    background: "black",
    color: "white",
    "&:hover": {
      color: "white",
      background: "black",
    },
  },
  training: {
    fontFamily: "Gordita",
    fontWeight: "bold",
    fontSize: 14,
    textTransform: "capitalize",
  },
  tooltip: {
    background: "white",
  },
});

export default useStyles;
