import { SearchOutlined } from "@mui/icons-material";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import React from "react";
import { Colors } from "./Colors";

export default function SearchAtom({ handleApplySearch, handleChange, handleKey, iconTestid="search-icon-element", iconButtonTestid="search-icon-button-element", testid="search-element", value}) {
    return (
        <OutlinedInput 
            data-testid={testid}
            id="search"
            placeholder="Cari.."
            size="small" 
            sx={{
                backgroundColor: "#FFFFFF",
                width: {xs: "100%", md:"25vw"}
            }}
            startAdornment={ (
                <InputAdornment position="start">
                    <IconButton onClick={handleApplySearch} data-testid={iconButtonTestid}>
                        <SearchOutlined style={{ color: Colors.blue}} data-testid={iconTestid}/>
                    </IconButton>
                </InputAdornment>
            )}    
            value={value}
            onChange={handleChange}
            onKeyDown={handleKey}
        />
    )
}