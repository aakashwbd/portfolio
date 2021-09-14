import { Avatar, Box, List, ListItem, ListItemAvatar, ListItemText, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
import RoomIcon from '@material-ui/icons/Room';
import EmailIcon from '@material-ui/icons/Email';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import PhoneIcon from '@material-ui/icons/Phone';
const useStyles = makeStyles({
    title: {
        width: 100,
        color:"#7C8587",
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: '0.3rem',
        borderBottom: '2px solid #7C8587'
    },
    listText: {
      fontSize: 18,
        fontFamily: 'Poppins',
        color: '#7C8587'
    }
})
const Contact = () => {
    const classes = useStyles()
    return (
        <Box my={5}>
            <Box>
               <Typography className={classes.title}>Contact</Typography> 
            </Box>
            <Box>
                <List>
                    <ListItem className={classes.listText}>
                        <ListItemAvatar>
                            <RoomIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='open street, 315/a, New York'/>
                    </ListItem> 
                    <ListItem className={classes.listText}>
                        <ListItemAvatar>
                            <EmailIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='exam@emap.com'/>
                    </ListItem>  
                    <ListItem className={classes.listText}>
                        <ListItemAvatar>
                            <PhoneIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='0195001231'/>
                    </ListItem>  
                    <ListItem className={classes.listText}>
                        <ListItemAvatar>
                            <LinkedInIcon/>
                        </ListItemAvatar>
                        <ListItemText primary='Akash'/>
                    </ListItem>
                </List>
            </Box>
        </Box>
    )
}

export default Contact

