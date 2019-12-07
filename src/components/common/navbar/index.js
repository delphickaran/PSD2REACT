import React from "react";
import Grid from "@material-ui/core/Grid";

const Navbar = props => {
  return (
    <Grid
      container
      style={{ backgroundColor: "#1f2740", height: 80 }}
      justify="center"
      alignItems="center"
    >
      <Grid item md={11} lg={9}>
        <img
          width={150}
          alt="blueStacks"
          src="https://firebasestorage.googleapis.com/v0/b/rentaldebug.appspot.com/o/games%2Fnew-logo-white.png?alt=media&token=795feaa0-caf5-4219-986c-127a89933180"
        />
      </Grid>
    </Grid>
  );
};

export default Navbar;
