import React from "react";
import { Box, FormHelperText, Typography } from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function DateAtom({ error, setValue, testid="date-element", value}) {
    return (
        <>
            <Typography>
                Tanggal Lahir
            </Typography>
            <LocalizationProvider  dateAdapter={AdapterDayjs}>
                <DatePicker 
                    sx={{ 
                        "& .MuiInputBase-root" : {
                            height: "2.5em",
                        },
                        "& .MuiPaper-root" : {
                            width: "100px"
                        },
                        width: "100%"
                    }}
                    value={value}
                    onChange={(newDate) => setValue(newDate)}
                    slotProps={{
                        textField : {
                            'data-testid' : `${testid}`
                        }
                    }}

                />
            </LocalizationProvider>
            {/* <FormHelperText>{error}</FormHelperText> */}
        </>
    )
}