import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@material-ui/core";
import { useStyle } from "./style";
const Education = () => {
  const classes = useStyle();
  return (
    <Box pt={5}>
      <Container maxWidth="md">
        <Typography className={classes.specialzationTitle}>
          Education <br /> Background
        </Typography>
        <Grid container alignItems="center" justifyContent="space-between">
          <Grid item sm={3}>
            <Typography className={classes.sclName}>
              University of Pinkston
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
          <Grid item sm={3}>
            <Typography>University of Pinkston</Typography>
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
