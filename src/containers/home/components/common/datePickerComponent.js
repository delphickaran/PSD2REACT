import React from "react";
import MomentUtils from "@date-io/moment";
import { DatePicker } from "@material-ui/pickers";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";

export const DatePickerComponent = props => {
  return (
    <MuiPickersUtilsProvider utils={MomentUtils}>
      <DatePicker
        open={props.open}
        onChange={props.onChange}
        style={{ display: "none" }}
        onAccept={props.handleCalenderAccept}
        onClose={props.handleCalenderClose}
      />
    </MuiPickersUtilsProvider>
  );
};
