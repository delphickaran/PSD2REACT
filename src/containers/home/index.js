import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tabs from "./components/tabs";
import Navbar from "../../components/common/navbar";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary
  },
  title: {
    fontWeight: 600,
    color: "rgba(0,0,0,0.7)",
    margin: "40px 0px 30px 0px"
  },
  [theme.breakpoints.down("sm")]: {
    title: {
      fontSize: 20,
      margin: "40px 0px 30px 0px"
    }
  }
}));

const Home = props => {
  const styles = useStyles();
  return (
    <div>
      <Navbar />
      <Grid container justify="center">
        <Grid item md={11} lg={9}>
          <Typography className={styles.title} variant={"h3"}>
            Manage Campaigns
          </Typography>
          <Tabs />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
