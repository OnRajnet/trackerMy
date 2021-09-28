import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { indigo } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    home: {
      flex: 2,
      padding: 20,
    },
    appBar: {
      backgroundColor: indigo["A200"],
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

export default function Home() {
    const classes = useStyles();
    
    return (
        <div className={classes.home}>
            Home
        </div>
    )
}
