import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CustomModal from "../../../../components/modal";
import SpaceBetweenTextContainer from "../../../../components/spaceBetweenTextContainer";

const useStyles = makeStyles(theme => ({
  modalRoot: { padding: "10px 20px", width: 360, outline: "none", margin: 10 },
  modalImage: {
    boxShadow: "0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)",
    borderRadius: 10,
    width: 135
  },
  modalHeadtName: {
    textTransform: "uppercase",
    color: "rgba(0,0,0,0.8)",
    fontWeight: 500,
    marginBottom: 10
  },
  modalHeadDescription: {
    textTransform: "uppercase",
    color: "rgba(0,0,0,0.4)",
    fontSize: 14
  },
  modalPricingText: { margin: "30px 0px 7px 0px", fontWeight: 500 },
  modalCloseButton: {
    padding: "7px 20px",
    border: "2px solid",
    borderRadius: 0,
    textTransform: "capitalize",
    fontWeight: 900,
    fontSize: 16
  },
  modalCloseButtonContainer: { padding: "40px 0px 10px 0px" }
}));

export const PriceModal = props => {
  const classes = useStyles();

  return (
    <CustomModal open={props.open} handleModalClose={props.handleModalClose}>
      <Paper className={classes.modalRoot}>
        <Grid container>
          <Grid container alignItems={"flex-end"}>
            <Grid item>
              <img
                src={props.data.image_url}
                className={classes.modalImage}
                alt="campaign"
              />
            </Grid>
            <Grid item style={{ marginLeft: 10 }}>
              <Typography className={classes.modalHeadtName}>
                {props.data.name}
              </Typography>
              <Typography className={classes.modalHeadDescription}>
                {props.data.region}
              </Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid container>
          <Typography variant={"h5"} className={classes.modalPricingText}>
            Pricing
          </Typography>
          <SpaceBetweenTextContainer
            duration={"1 Week - 1 Month"}
            price={"$ 100.00"}
          />
          <SpaceBetweenTextContainer duration={"6 Month"} price={"$ 500.00"} />
          <SpaceBetweenTextContainer duration={"1 Year"} price={"$ 900.00"} />
        </Grid>
        <Grid
          container
          justify="center"
          className={classes.modalCloseButtonContainer}
        >
          <Grid item>
            <Button
              onClick={props.handleModalClose}
              className={classes.modalCloseButton}
              variant={"outlined"}
            >
              Close
            </Button>
          </Grid>
        </Grid>
      </Paper>
    </CustomModal>
  );
};
