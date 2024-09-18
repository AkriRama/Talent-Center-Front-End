import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Chip, FormControl, FormHelperText, InputLabel, MenuItem, OutlinedInput, Select, Typography } from "@mui/material";
import React from "react";
import { Colors } from "./Colors";

export default function SelectAtom({ data, error, handleChange, isForm = false, label="", labelInput= `Filter ${label}`, list, testid="select-element", value }) {
    const PaperProps= {
        sx: {
          border: "1px black solid",
        },
    };

    return (
        <>
            { isForm ? <Typography>
                {label}
            </Typography> : null }
            <FormControl error={!!error} fullWidth size="small" data-testid={testid}
                sx={{ 
                    backgroundColor: Colors.white,
                    borderRadius: 2,
                    width: isForm ? "100%" : list === "approval" ? {xs: "100%", md: "13vw"} : {xs: "100%", md: label === "Urutkan" ? "11vw" : "9.75vw", lg: label === "Urutkan" ? "13vw" : "9.75vw"}
                }}
            >
            { isForm ? null : <InputLabel sx={{ fontSize: "0.8em" }}>{label === "Urutkan" ? label : "Filter "+label} </InputLabel>}
            <Select
                displayEmpty={isForm ? true : false}
                IconComponent={ KeyboardArrowDown }
                input={isForm ? <OutlinedInput /> : <OutlinedInput label={label === "Urutkan" ? label : labelInput} />}
                MenuProps={{ PaperProps }}
                onChange={handleChange}
                sx={{
                    height: "40px",
                }}
                value={value || ""}
            >
                { isForm ? <MenuItem value="" disabled><Typography style={{ fontSize: "12px", fontWeight: 0, opacity: 0.5 }}>Pilih {label}</Typography></MenuItem> : null}
                {data.map((value, index) => (
                        label === "Level" ? (
                            <MenuItem key={value.talentLevelId || index} value={value.talentLevelId}>{value.talentLevelName}</MenuItem>
                        ) : label === "Status" ? (
                            <MenuItem key={value.talentStatusId || index} value={value.talentStatusId}>{value.talentStatusName}</MenuItem>
                        ) : label === "Kepegawaian" || label === "Status Kepegawaian" ? (
                            <MenuItem key={value.employeeStatusId || index} value={value.employeeStatusId}>{value.employeeStatusName}</MenuItem>
                        ) : label === "Pengalaman" ? (
                            <MenuItem key={value.id || index} value={value.id}>{value.name}</MenuItem>
                        ) : label === "Urutkan" ? (
                            <MenuItem key={value.id || index} value={value.id}>{value.name}</MenuItem>
                        ) : (
                            <MenuItem key={value.id || index} value={value.id}>{value.name}</MenuItem>
                        )
                ))}
                
            </Select>
            
            {isForm ? <FormHelperText>{error}</FormHelperText> : null}


        </FormControl>

        </>
    )
}
