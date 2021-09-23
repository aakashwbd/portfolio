import {
  Box,
  Container,
  Grid,
  makeStyles,
  Typography,
} from "@material-ui/core";
import moment from "moment";
import { useSelector } from "react-redux";
const useStyle = makeStyles({
  title: {
    fontSize: 20,
    letterSpacing: "0.2rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    borderBottom: "1px solid rgba(0, 0, 0, 0.46)",
    color: "#47167D",
  },

  date: {
    fontFamily: "Gordita",
    // fontWeight: "bold",
    fontSize: 12,
  },
  degree: {
    fontFamily: "Gordita",
    fontWeight: "bold",
    fontSize: 14,
  },
});
const Education = () => {
  const classes = useStyle();

  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Box pt={5} mb={5}>
      <Container maxWidth="md">
        <Typography className={classes.title}>
          Education <br /> Background
        </Typography>

        <Box mt={2}>
          <Grid
            container
            alignItems="center"
            justifyContent="space-between"
            spacing={2}
          >
            {currentUser?.profile?.educations?.map((item, i) => (
              <Grid item sm={5} lg={4}>
                {item?.startDate && (
                  <Typography className={classes.date}>
                    {moment(item?.startDate).format("MMM YYYY")} -
                    {moment(item?.endDate).format("MMM YYYY")}
                  </Typography>
                )}
                <Typography className={classes.degree}>
                  {item.degree}
                </Typography>
                <Typography className={classes.degree}>
                  {item.educationLabel.title}
                </Typography>
                <Typography className={classes.degree}>
                  {item.institute}
                </Typography>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default Education;
