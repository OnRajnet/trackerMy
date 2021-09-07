import React, { useEffect, useState } from 'react'
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { mainListItems } from './ListItems';
import SortIcon from '@material-ui/icons/Sort';
import { IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  icon: {
    color: '#fff',
    fontSize: "2rem",
},
});

export default function Sidebar() {

  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>{mainListItems}</List>
      <Divider />
    </div>
  );

  const [anchorEl, setAnchorEl] = useState(false);

  const handleDrawerOpen = () => {
    setAnchorEl(true);
  };

  const handleDrawerClose = () => {
    setAnchorEl(false);
  };

  return (
    <div>
      <IconButton onClick={handleDrawerOpen} onClose={handleDrawerClose}>
        <MenuIcon className={classes.icon} />
      </IconButton>
      <Drawer anchor='left' open={anchorEl} onClose={handleDrawerClose}>
        {list('left')}
      </Drawer>
    </div>
  );
}
