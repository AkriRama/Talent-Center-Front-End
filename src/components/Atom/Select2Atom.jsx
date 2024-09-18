import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Chip, FormControl, FormHelperText, InputLabel, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import React from "react";

export default function Select2Atom({ data, error, handleChange, isForm = false, isMultiple = false, label="", labelInput="filter"+label}, testid="select-form2", value) {
    const PaperProps= {
        sx: {
          border: "1px black solid",
        },
    };

    return (
        <Box data-testid={testid}>
            <Typography>
                {label}
            </Typography>
            <FormControl error={error} fullWidth size="small" 
                
            >
            <Select
                onChange={handleChange}
                IconComponent={ KeyboardArrowDown }
                size="small" 
                value={value} 
            >
                <MenuItem disabled><Typography style={{ fontSize: "12px", fontWeight: 0, opacity: 0.5 }}>Pilih {label}</Typography></MenuItem>
                {data.map((value) => (
                    <MenuItem value={data.talentLevelId}>{data.talentLevelName}</MenuItem>

                ))}
                
            </Select>
            
            {isForm ? <FormHelperText>{error}</FormHelperText> : null}


        </FormControl>

        </Box>
    )
}
