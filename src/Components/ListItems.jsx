import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from 'react-router-dom';
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { useAuth } from '../Context/AuthContext';
import {makeStyles} from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    button:{
       color:"black",
        textDecoration:"none",
        fontWeight: "bold",
    }
}));


export default function MainListItems() {
  const { logOutUser } = useAuth();
  const classes = useStyles();

  return (
    <div>
      <Link to="home" className={classes.button}>
        <ListItem button >
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Domů" />
        </ListItem>

      </Link>
      <Link to="setting" className={classes.button}>
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Nastavení"/>
        </ListItem>
      </Link>
      <Link to="match" className={classes.button}>
        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Zápasy" />
        </ListItem>
      </Link>
        <Link to="statistic" className={classes.button}>
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Statistika" />
      </ListItem>
        </Link>
      <Link to="/" className={classes.button}>
        <ListItem button >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Odhlásit se" onClick={logOutUser} />
        </ListItem>
      </Link>

    </div>
  );
}
