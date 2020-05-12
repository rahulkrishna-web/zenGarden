import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import MainAppBar from "../components/core/mainAppBar";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Seed from "../components/seed";

const useStyles = makeStyles((theme) => ({
  stage: {
    height: "100vh",
    background: "black",
    color: "#fff",
    maxWidth: "100%",
    margin: "0",
  },
  intro: {
    padding: theme.spacing(2),
  },
}));

const HomePage = () => {
  const classes = useStyles();
  return (
    <div>
      <MainAppBar />
      <Grid
        container
        alignContent="center"
        alignItems="center"
        justify="center"
        className={classes.stage}
        spacing={2}
      >
        <Grid item>
          <Paper className={classes.intro}>
            <Typography>Hello! Pet me and i'll grow.</Typography>
          </Paper>

          <Seed />
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
