import React,{useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import { indigo } from '@material-ui/core/colors';
import Sidebar from "./Sidebar";
import { useAuth } from '../Context/AuthContext';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: indigo["A200"],
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

export default function Navbar() {
  const classes = useStyles();

  const { currentAuth, setLogin } = useAuth();

  useEffect(() => {
    if (!currentAuth)  {
      setLogin();
    }
  }, [])

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Sidebar />
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Fotball Tracker
          </Typography>

          { currentAuth && <span>Uživatel: {currentAuth}</span> }
        </Toolbar>
      </AppBar>
    </div>
  );
}
