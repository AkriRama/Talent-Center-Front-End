import React from "react";
import { FormControlLabel, Radio } from "@mui/material";

export default function RadioButtonAtom({ isChecked, handleClick, testid="radio-button-element", value }) {
    return (
        <FormControlLabel
            data-testid={testid}
            control={<Radio checked = {isChecked}  /> }
            label= {value}
            onClick={handleClick}
            value= {value}
        />
    )
}