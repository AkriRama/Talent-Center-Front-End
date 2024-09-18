import React from "react";
import { BorderColor } from "@mui/icons-material";
import { Button } from "@mui/material";

export default function ButtonEditAtom({ handleClick, isVisible = true, testid="button-edit-element" }) {
    return (
        <Button
            data-testid={testid}
            onClick={handleClick}
            size="small"
            startIcon={ <BorderColor />}
            sx={{
                display: isVisible ? { xs: "none", md: "flex"} : { xs: "flex", md: "none"},
                fontSize: "1em",
                height: "40px",
                textTransform: "capitalize"
            }}
            variant="outlined"
        >
                Edit Profile
        </Button>
    )
}