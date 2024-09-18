import React from "react"
import { KeyboardArrowDown } from "@mui/icons-material"
import { Box, Chip, FormControl, FormHelperText, InputLabel, MenuItem, OutlinedInput, Select, Typography } from "@mui/material"

export default function MultipleSelectAtom({ data, error, handleChange, label, testid="multiple-form", value }) {
    return (
        <>
            <Typography>
                {label}
            </Typography>
            <FormControl fullWidth error={!!error} data-testid={testid}>
                <Select size="small"
                    data-testid="select-multiple-form"
                    displayEmpty    
                    IconComponent={ KeyboardArrowDown }
                    multiple
                    onChange={handleChange}
                    renderValue={(selected) => {
                        if (selected.length === 0) {
                            return <Typography style={{ fontSize: "12px", fontWeight: 0, opacity: 0.5 }}>Masukkan {label}</Typography>;
                        }
                        return(
                        <Box display="flex" gap={1}>
                            {selected.map((value) => (
                                data.map((data, index) => {
                                    if(data.skillId === value) {
                                        return(
                                            <Chip key={value || index} label={data.skillName} sx={{ borderRadius: 1 }} />
                                        )
                                    } else if(data.positionId === value) {
                                        return(
                                            <Chip key={value || index} label={data.positionName} sx={{ borderRadius: 1 }} />
                                        )
                                    }
                                })
                            ))}
                        </Box>
                    )}}
                    sx={{
                        height: "40px",
                    }}
                    value={value || ""}
                >
                    <MenuItem value="" disabled>Masukkan {label}</MenuItem>
                    {data.map((value, index) =>
                        label === "Posisi" ? (
                            <MenuItem
                                key={value.positionId || index}
                                value={value.positionId} 
                            >
                                {value.positionName}
                            </MenuItem>
                        ) : label === "Skill Set" ? (
                            <MenuItem
                                key={value.skillId || index}
                                value={value.skillId} 
                            >
                                {value.skillName}
                            </MenuItem>

                        ) : (
                            <MenuItem
                                key={value || index}
                                value={value.skillId} 
                            >
                                {value.skillName}
                            </MenuItem>
                        )
                    )}
                </Select>
                {error && <FormHelperText>{error}</FormHelperText>}
            </FormControl>
        </>
    )
}