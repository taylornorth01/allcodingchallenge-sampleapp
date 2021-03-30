import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { MenuListComposition } from './menu'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} aria-label="menu" >
            <MenuListComposition/> 
          </IconButton>
         
          <Typography variant="h6" className={classes.title}>
            Mental Health App
          </Typography>
          <img src="https://pbs.twimg.com/profile_images/1268114713235390465/sVGCB7y2_400x400.jpg" width="75" height="75"></img>
        </Toolbar>
      </AppBar>
    </div>
  );
}