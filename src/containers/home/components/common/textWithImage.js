import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

export const TextWithImage = props => {
  return (
    <Grid container alignItems="center" onClick={props.onClick}>
      <Grid item>
        <img src={props.src} style={{ ...props.imageStyle }} alt="campaign" />
      </Grid>
      <Grid item>
        <Typography className={props.textStyle} variant={"body1"}>
          {props.text}
        </Typography>
      </Grid>
    </Grid>
  );
};
