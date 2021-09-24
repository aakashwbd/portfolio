import { makeStyles } from "@material-ui/core";
import { tempOneBg } from "../../../../constant/_icon";

export const useStyle = makeStyles({
  wrapper: {
    height: "60vh",
    // width: '100%',
    background: `url(${tempOneBg}) no-repeat left top `,
    backgroundSize: "60% 100%",
    // overflow: 'hidden'
  },
  heroPrf: {
    height: 250,
    width: 250,
  },
  prfTitle: {
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: "0.6rem",
    color: " #FFFFFF",
  },
  prfSubTitle: {
    color: " #FFFFFF",
    fontSize: 18,
    borderBottom: "2px solid white",
  },
  specialzationTitle: {
    fontSize: 20,
    letterSpacing: "0.2rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderBottom: "1px solid rgba(0, 0, 0, 0.46)",
    color: "#47167D",
  },
  specializeItem: {
    fontSize: 18,
    textTransform: "capitalize",
    color: "#765996",
  },
  sclName: {
    fontWeight: "bold",
    color: "#765996",
  },
  // phone: {
  //   marginRight: 10,
  // },
});
