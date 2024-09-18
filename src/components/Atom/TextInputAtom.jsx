import React from "react";
import { InputAdornment, TextField, Typography } from "@mui/material";
import { Colors } from "./Colors";

export default function TextInputAtom({ label, error, handleChange, testid="textinput-form", value }) {
    const InputProps = label === "Pengalaman" ? {
        endAdornment: (
            <InputAdornment position="end">
                <Typography color="black" opacity={1}> Tahun</Typography>
            </InputAdornment>
        ) 
    } : null;
    
    return (
        <>
            <Typography>
                { label }
            </Typography>
            <TextField 
                data-testid={testid}
                error={!!error}
                helperText={error}
                InputProps={InputProps}
                onChange={handleChange}
                placeholder={"Masukan "+label}
                size="small"
                style={{
                    color : error ? Colors.red : Colors.darkgrey,
                }}
                value={value}
                fullWidth
            />
        </>
    )
}