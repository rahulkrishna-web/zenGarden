import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import FilterVintageIcon from "@material-ui/icons/FilterVintage";

const useStyles = makeStyles((theme) => ({
  appBar: {
    width: "100%",
  },
  grow: {
    flexGrow: 1,
  },
}));

export default function MainAppBar() {
  const classes = useStyles();

  return (
    <Fragment>
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Zen Garden
          </Typography>
          <div className={classes.grow} />
          <Button color="inherit">
            <FilterVintageIcon /> 100
          </Button>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
