import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
          Ondřej Rajnet - Diplomová práce&nbsp;
        {new Date().getFullYear()}
      </Typography>
    );
  }

  const useStyles = makeStyles((theme) =>({
    content: {
        flexGrow: 1,
        height: '100vh',
        overflow: 'auto',
      },
      container: {
          position:"fixed",
          bottom: 0,
          textAlign:"center",
          width:"100%",
      },
  }));

export default function FooterCompoment() {
    const classes = useStyles();
    return (
        <div className={classes.container}> 
            <Box pt={4}>
            <Copyright />
          </Box>
        </div>
    )
}
