import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Tabs from "./components/tabs";
import Navbar from "../../components/common/navbar";
import { mockData } from "../../mockData";
import moment from "moment";
import { TYPES } from "../../constants/types";

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
      fontSize: 24,
      margin: "40px 0px 30px 0px"
    }
  }
}));

const Home = props => {
  const styles = useStyles();
  const [data, setData] = useState({});
  let pastCampaign = [];
  let futureCampaign = [];
  let liveCampaign = [];

  useEffect(() => {
    mockData.data.map(val => {
      let differenceInDays = moment(val.createdOn).diff(
        moment(new Date()),
        "days"
      );
      if (differenceInDays === 0) {
        liveCampaign.push(val);
      } else if (differenceInDays > 0) {
        futureCampaign.push(val);
      } else {
        pastCampaign.push(val);
      }
    });
    futureCampaign.sort((a, b) => a.createdOn - b.createdOn);
    pastCampaign.sort((a, b) => b.createdOn - a.createdOn);
    liveCampaign.sort((a, b) => b.createdOn - a.createdOn);
    setData({ pastCampaign, futureCampaign, liveCampaign });
  }, []);

  const updateDataCallback = (date, index, type) => {
    let differenceInDays = moment(date).diff(moment(new Date()), "days");
    let updatedVal = data[type][index];
    updatedVal.createdOn = date;
    data[type].splice(index, 1);
    if (differenceInDays === 0) {
      data[TYPES.liveCampaign].push(updatedVal);
    } else if (differenceInDays > 0) {
      data[TYPES.futureCampaign].push(updatedVal);
    } else {
      data[TYPES.pastCampaign].push(updatedVal);
    }
    data[TYPES.futureCampaign].sort((a, b) => a.createdOn - b.createdOn);
    data[TYPES.pastCampaign].sort((a, b) => b.createdOn - a.createdOn);
    data[TYPES.liveCampaign].sort((a, b) => b.createdOn - a.createdOn);
    setData(data);
  };

  return (
    <div>
      <Navbar />
      <Grid container justify="center">
        <Grid item md={11} lg={9}>
          <Typography className={styles.title} variant={"h3"}>
            Manage Campaigns
          </Typography>
          <Tabs data={data} updateDataCallback={updateDataCallback} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Home;
