import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import CalendarImage from "../../../../assets/inspect/Front-End/Page 1/Dashboard/Row/Group/calendar.png";
import ReportImage from "../../../../assets/inspect/Front-End/Page 1/Dashboard/Row/Group2/statistics-report.png";
import FileImage from "../../../../assets/inspect/Front-End/Page 1/Dashboard/Row/Group3/file.png";
import PriceImage from "../../../../assets/inspect/Front-End/Page 1/Dashboard/Row/Group4/Price.png";
import { TextWithImage } from "../common/textWithImage";
import { DatePickerComponent } from "../common/datePickerComponent";
import { styles } from "./styles";
import { PriceModal } from "../common/priceModal";

const useStyles = makeStyles(styles);

export default function Table(props) {
  const classes = useStyles();

  return (
    <Paper elevation={1} className={classes.root}>
      <TableHead data={props.columns} />
      <TableBody
        columns={props.columns}
        data={props.data}
        updateData={props.updateData}
      />
    </Paper>
  );
}

const TableHead = props => {
  const classes = useStyles();
  return (
    <Grid container className={classes.tableHeadContainer}>
      {props.data.map((val, i) => {
        return (
          <Grid item key={i} md={val.size}>
            <Typography className={classes.tableHeadLabel} variant={"body1"}>
              {val.label}
            </Typography>
          </Grid>
        );
      })}
    </Grid>
  );
};

const TableBody = props => {
  const [open, setOpen] = useState(false);
  const [openCalender, setOpenCalender] = useState(false);
  const [, setCalenderValue] = useState("");
  const [data, setDate] = useState({});
  const [selectedIndex, updateSelectedIndex] = useState(0);

  const classes = useStyles();

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
    props.updateData(val.valueOf(), selectedIndex);
    setCalenderValue(val.valueOf());
  };

  const handleCalenderAccept = val => {
    setOpenCalender(false);
  };

  const handleCalenderClose = () => {
    setOpenCalender(false);
  };

  return (
    <Grid className={classes.tableBodyContainer}>
      {props.data.map((val, i) => {
        return (
          <Grid
            container
            key={i}
            alignItems={"center"}
            justify={"center"}
            className={classes.tableBodyRow}
          >
            <Grid item md={props.columns[0].size}>
              <Typography
                className={classes.tableBodyColumn1Date}
                variant={"body1"}
              >
                {moment(val.createdOn).format("MMM YYYY, D")}
              </Typography>
              <Typography
                className={classes.tableBodyColumn1Caption}
                variant={"body2"}
              >
                {moment(val.createdOn)
                  .startOf("day")
                  .fromNow()}
              </Typography>
            </Grid>
            <Grid item md={props.columns[1].size}>
              <Grid container alignItems="center">
                <Grid item style={{ marginTop: 4 }}>
                  <img src={val.image_url} width={40} alt="campaign" />
                </Grid>
                <Grid item style={{ marginLeft: 10 }}>
                  <Typography
                    className={classes.tableBodyColumn2Title}
                    variant={"body1"}
                  >
                    {val.name}
                  </Typography>
                  <Typography
                    className={classes.tableBodyColumn2Caption}
                    variant={"body2"}
                  >
                    {val.region}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={props.columns[2].size}>
              <Grid
                container
                alignItems="center"
                style={{ cursor: "pointer" }}
                onClick={() => {
                  handleViewPriceClick(val);
                }}
              >
                <Grid item style={{ alignItems: "center", display: "flex" }}>
                  <img src={PriceImage} width={25} alt="price" />
                </Grid>
                <Grid item>
                  <Typography
                    className={classes.tableBodyColumn3Text}
                    variant={"body1"}
                  >
                    View Pricing
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={props.columns[3].size}>
              <Grid container>
                <Grid item md={3}>
                  <TextWithImage
                    imageStyle={{ width: 20 }}
                    textStyle={classes.tableBodyColumn4TextStyle}
                    text={"CSV"}
                    src={FileImage}
                  />
                </Grid>
                <Grid item md={4}>
                  <TextWithImage
                    imageStyle={{ width: 23 }}
                    textStyle={classes.tableBodyColumn4TextStyle}
                    text={"Report"}
                    src={ReportImage}
                  />
                </Grid>
                <Grid
                  item
                  md={5}
                  onClick={() => {
                    handleOpenCalender(i);
                  }}
                >
                  <TextWithImage
                    imageStyle={{ width: 23 }}
                    textStyle={classes.tableBodyColumn4TextStyle}
                    text={"Schedule Again"}
                    src={CalendarImage}
                  />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
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
