import React from "react";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import { Link } from 'react-router-dom'

const useStyles = makeStyles({
  root: {
    flexGrow: 1
  },
  appBar: {
    backgroundColor: '#1976D2',
    color: 'white',
    flexWrap: 'wrap',
    paddingRight: '5px',
    justifyContent: 'space-around'
  }
});

const Header: React.FC = () => {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar className={classes.appBar}>
        <Link to='/worktime'>
          <Typography variant="h6" color="inherit">
            Залiк робочого часу
          </Typography>
        </Link>
        <Link to='/shareholders'>
          <Typography variant="h6" color="inherit">
            Список пайовикiв
          </Typography>
        </Link>
          <Typography variant="h6" color="inherit">
            Iмя
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Header;
