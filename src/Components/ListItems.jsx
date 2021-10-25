import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import HomeIcon from '@material-ui/icons/Home';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import SettingsIcon from "@material-ui/icons/Settings";
import { Link } from 'react-router-dom';
import LogoutIcon from "@material-ui/icons/ExitToApp";
import { useAuth } from '../Context/AuthContext';

export default function MainListItems() {
  const { logOutUser } = useAuth();

  return (
    <div>
      <Link to="home">
        <ListItem button>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Domů" />
        </ListItem>

      </Link>
      <Link to="setting">
        <ListItem button>
          <ListItemIcon>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText primary="Nastavení" />
        </ListItem>
      </Link>
      <Link to="match" className="">
        <ListItem button>
          <ListItemIcon>
            <LayersIcon />
          </ListItemIcon>
          <ListItemText primary="Zápasy" />
        </ListItem>
      </Link>
        <Link to="statistic">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Statistika" />
      </ListItem>
        </Link>
  <Link to="player">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Hráči" />
      </ListItem>
  </Link>
      <Link to="/">
        <ListItem button>
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Odhlásit se" onClick={logOutUser} />
        </ListItem>
      </Link>

    </div>
  );
}
