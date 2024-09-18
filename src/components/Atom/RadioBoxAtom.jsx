import { FormControl, FormHelperText, RadioGroup, Typography } from "@mui/material";
import RadioButtonAtom from "./RadioButtonAtom";
import { Colors } from "./Colors";
import React from "react";

export default function RadioBoxAtom({ error, handleChangeGender, label="Jenis Kelamin", testid="radio-box-form", value}) {
    return (
        <>
            <Typography>{label}</Typography>
            <FormControl error={!!error} data-testid={testid}>
                <RadioGroup>
{                        Boolean(value) ? (
                            <>
                                <RadioButtonAtom handleClick={handleChangeGender} isChecked={ value == "L" ? true : false } value="Laki-laki" testid="radio-button-male-form" />
                                <RadioButtonAtom handleClick={handleChangeGender} isChecked={ value == "P" ? true : false } value="Perempuan" testid="radio-button-female-form"/>
                            </>
                        ) : (
                            <>
                                <RadioButtonAtom handleClick={handleChangeGender}  value="Laki-laki" testid="radio-button-male-form" />
                                <RadioButtonAtom handleClick={handleChangeGender}  value="Perempuan" testid="radio-button-female-form"/>
                            </>
                        )
}
                </RadioGroup>
                <FormHelperText sx={{ color: Boolean(error) ? Colors.red : Colors.darkgrey}} >{error}</FormHelperText>
            </FormControl>
        </>
    )
}