import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Menu from "./Menu";
import Tabs from "./Tabs";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  toolbar: {
    minHeight: 50,
    alignItems: 'flex-start',
    
    backgroundColor:"white",
    color:"black"
  },
  title: {
    flexGrow: 1,
    alignSelf: 'flex-end',
    opacity:0,
  },
}));

export default function ProminentAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar className={classes.toolbar}>
          
          <h2 style={{
              fontSize:"1.1rem"
          }}>Guichet</h2>


          <Typography className={classes.title} variant="h5" noWrap>
            Material-UI
          </Typography>

          <IconButton aria-label="search" color="inherit">
            <SearchIcon />
          </IconButton>

         
            <Menu />
         
          
        </Toolbar>
        <Tabs />
      </AppBar>
    </div>
  );
}
