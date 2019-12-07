import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles(theme => ({
  text1: {
    textTransform: "capitalize",
    color: "rgba(0,0,0,0.4)",
    fontSize: 16
  },
  text2: {
    textTransform: "capitalize",
    color: "rgba(0,0,0,0.7)",
    fontWeight: 600,
    fontSize: 15
  }
}));

const SpaceBetweenTextContainer = props => {
  const classes = useStyles();
  return (
    <Grid container justify="space-between" style={{ margin: "13px 0px" }}>
      <Grid item className={classes.text1}>
        {props.duration}
      </Grid>
      <Grid item className={classes.text2}>
        {props.price}
      </Grid>
    </Grid>
  );
};

export default SpaceBetweenTextContainer;
