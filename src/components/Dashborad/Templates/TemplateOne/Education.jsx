import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useSelector } from "react-redux";
import { useStyle } from "./style";
const Education = () => {
  const classes = useStyle();

  const { currentUser } = useSelector((state) => state.auth);

  return (
    <Box pt={5}>
      <Container maxWidth="md">
        <Typography className={classes.specialzationTitle}>
          Education <br /> Background
        </Typography>

        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item sm={3}>
            <Typography className={classes.sclName}>
              {currentUser?.profile?.educations?.item?.institute}
            </Typography>
            <List>
              <ListItem>
                <ListItemText primary="Wrote dissertation on Advertising for Millennials" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Wrote dissertation on Advertising for Millennials" />
              </ListItem>
              <ListItem>
                <ListItemText primary="Wrote dissertation on Advertising for Millennials" />
              </ListItem>
            </List>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Education;
