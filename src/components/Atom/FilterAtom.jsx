import React from "react";
import { Grid, Typography } from "@mui/material";
import { filterTextSX } from "../WrapperJSX";

export default function FilterAtom({ data, testid="filter-element" }) {
    return (
        data.map((value, index) => (
            <Grid item 
                data-testid={testid}
                display={{ xs: index > 1 ? "none" : "flex", md: "flex"}}
                justifyContent= { value === "Action" ? "flex-end" :  "none"}
                key={index}
                xs= {index === 0 ? 10 : index === 1 ? 2 : 0} md= {index === 0 && data.length === 6 ? 3 : index === data.length-1 ? 1 : data.length%2 === 0 ? 12 / data.length : 10 / (data.length-1)}
            >
                <Typography>
                    {value}
                </Typography>
            </Grid>
        ))
    )
}