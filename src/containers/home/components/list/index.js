import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import CalendarImage from "../../../../assets/inspect/Front-End/Page 1/Dashboard/Row/Group/calendar.png";
import ReportImage from "../../../../assets/inspect/Front-End/Page 1/Dashboard/Row/Group2/statistics-report.png";
import FileImage from "../../../../assets/inspect/Front-End/Page 1/Dashboard/Row/Group3/file.png";
import PriceImage from "../../../../assets/inspect/Front-End/Page 1/Dashboard/Row/Group4/Price.png";
import { TextWithImage } from "../common/textWithImage";
import { DatePickerComponent } from "../common/datePickerComponent";
import { PriceModal } from "../common/priceModal";
import moment from "moment";
import { makeStyles } from "@material-ui/core/styles";

import { styles } from "./styles";

const useStyles = makeStyles(styles);

export const List = props => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openCalender, setOpenCalender] = useState(false);
  const [, setCalenderValue] = useState("");
  const [data, setDate] = useState({});
  const [selectedIndex, updateSelectedIndex] = useState(0);
  const handleModalClose = () => {
    setOpen(false);
  };
  const handleViewPriceClick = val => {
    setOpen(true);
    setDate(val);
  };

  const handleOpenCalender = index => {
    updateSelectedIndex(index);
    setOpenCalender(true);
  };

  const onCalenderChange = val => {
    props.updateData(val.valueOf(), selectedIndex, props.type);
    setCalenderValue(val.valueOf());
  };

  const handleCalenderAccept = val => {
    setOpenCalender(false);
  };

  const handleCalenderClose = () => {
    setOpenCalender(false);
  };
  return (
    <Grid>
      {props.data.map((val, key) => {
        return (
          <Paper elevation={3} key={key} className={classes.root}>
            <Typography className={classes.banner}>
              {moment(val.createdOn).fromNow()}
            </Typography>
            <Grid container>
              <Grid container alignItems={"flex-end"} style={{}}>
                <Grid item>
                  <img
                    src={val.image_url}
                    className={classes.headerImage}
                    alt="campaign"
                  />
                </Grid>
                <Grid item style={{ marginLeft: 10 }}>
                  <Typography className={classes.headerName}>
                    {val.name}
                  </Typography>
                  <Typography className={classes.headerDescription}>
                    {val.region}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              container
              className={classes.middleSection}
              justify={"space-between"}
            >
              <Grid item xs={4}>
                <Typography className={classes.date}>
                  {moment(val.createdOn).format("MMM YYYY, D")}
                </Typography>
              </Grid>
              <Grid item xs={5}>
                <Grid
                  container
                  justify="flex-end"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    handleViewPriceClick(val);
                  }}
                >
                  <Grid item style={{ alignItems: "center", display: "flex" }}>
                    <img src={PriceImage} width={18} alt="campaign" />
                  </Grid>
                  <Grid item>
                    <Typography
                      className={classes.viewPricing}
                      variant={"body1"}
                    >
                      View Pricing
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>

            <Grid
              container
              justify="space-between"
              className={classes.actionButtonsContainer}
            >
              <Grid item>
                <TextWithImage
                  imageStyle={{ width: 17 }}
                  textStyle={classes.actionButtonStyles}
                  text={"CSV"}
                  src={FileImage}
                />
              </Grid>
              <Grid item md={4}>
                <TextWithImage
                  imageStyle={{ width: 20 }}
                  textStyle={classes.actionButtonStyles}
                  text={"Report"}
                  src={ReportImage}
                />
              </Grid>
              <Grid
                item
                md={5}
                onClick={() => {
                  handleOpenCalender(key);
                }}
              >
                <TextWithImage
                  imageStyle={{ width: 20 }}
                  textStyle={classes.actionButtonStyles}
                  text={"Schedule Again"}
                  src={CalendarImage}
                />
              </Grid>
            </Grid>
          </Paper>
        );
      })}
      <PriceModal open={open} handleModalClose={handleModalClose} data={data} />
      <DatePickerComponent
        open={openCalender}
        onChange={onCalenderChange}
        handleCalenderAccept={handleCalenderAccept}
        handleCalenderClose={handleCalenderClose}
      />
    </Grid>
  );
};
