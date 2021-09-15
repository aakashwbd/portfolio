import { Box, makeStyles, Typography } from '@material-ui/core'
import React from 'react'
const useStyles = makeStyles({
    title: {
        color:"rgba(0, 0, 0, 0.3)",
        fontSize: 30,
        fontWeight: 'bold',
        letterSpacing: '0.3rem',
        margin: "40px 0px"
    },
    details: {
      fontSize: 18,
        fontFamily: 'Poppins',
        color: '#7C8587'
    }
})
const PersonalLife = () => {
    const classes = useStyles()
    return (
        <Box>
            <Box>
               <Typography className={classes.title}>PERSONAL <br /> PROFILE</Typography> 
            </Box>
            <Box>
                <Typography className={classes.details}>details</Typography>
            </Box>
        </Box>
    )
}

export default PersonalLife