import React from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";

const ranges = [
  {
    value: "CCTV Available",
    label: "CCTV Available"
  },

  {
    value: "CCTV Not Available",
    label: "CCTV Not Available"
  }
];

function SlotForm(props) {
  return (
    <React.Fragment style={{ fontFamily: "Roboto" }}>
      <form noValidate autoComplete="off">
       

        {/* // CCTV */}
        <TextField
          id="cctvavailability"
          select
          label="Select"
          fullWidth={true}
          value={props.cctvavailability}
          onChange={props.handleInputChange}
          SelectProps={
            {
              // MenuProps: {
              //   className: classes.menu
              // }
            }
          }
          helperText="Select CCTV Availability"
          margin="normal"
          name="cctvavailability"
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div
          style={{ fontFamily: "Roboto", color: "#DB5461", fontSize: "12px" }}
        >
          {props.cctvavailabilityError}
        </div>

        {/* // PRICE */}
        <TextField
          id="Slots"
          label="Slots"
          value={props.slots !== 0 && props.slots}
          onChange={props.handleInputChange}
          type="number"
          fullWidth={true}
          InputLabelProps={{
            shrink: true
          }}
          name="slots"
          margin="normal"
          variant="outlined"
          placeholder="How many Slots Available"
         
        />
        <div
          style={{ fontFamily: "Roboto", color: "#DB5461", fontSize: "12px" }}
        >
          {props.slotError}
        </div>
         {/* Link For CCTV */}
         <TextField
          id="CCTV Link"
          label="CCTV Link"
          fullWidth={true}
          placeholder="LInk To CCTV"
          margin="normal"
          variant="outlined"
          value={props.CCTV}
          onChange={props.handleInputChange}
          name="Slots"
        />
        <div
          style={{ fontFamily: "Roboto", color: "#DB5461", fontSize: "12px" }}
        >
          {props.Sloterror}
        </div>

      </form>
    </React.Fragment>
  );
}

export default SlotForm;
