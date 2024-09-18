import React from "react"
import { Box, Typography } from "@mui/material"
import { Colors } from "./Colors"

export default function BoxActionAtom({ data, label, status, status2, status3, testid="box-action-element" }) {
    return (
        <Box 
            backgroundColor= { label === "talentStatus" ? data === status ? Colors.grey : Colors.lightgrey : label === "approvalStatus" ? data === status || data === status3 ? Colors.green :  data === status2 ? Colors.red : Colors.grey : data === status ? Colors.green: Colors.red } 
            borderRadius={20} 
            data-testid={testid}
            padding={0.5} 
            width={ data === status || data === status2 || data === status3 ? {xs: "60px", lg: "80px"} : {xs: "85px", lg: "100px"}} 
        >
            <Typography 
                color={ label === "talentStatus" ? data === status ? Colors.white : Colors.darkgrey : Colors.white } 
                sx={{ fontSize: "12px", fontWeight: 400 }}
                textAlign="center"
                >
                {data}
            </Typography>
        </Box>
    )
}