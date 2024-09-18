import React from "react";
import { Button } from "@mui/material";
import { buttonCancelSX, buttonSaveSX } from "../WrapperJSX";
import DialogAtom from "./DialogAtom";

export default function ButtonFormAtom({ label, handleClickOpen, handleClose, handleNavigate, open, testid="button-form" }) {
    return (
        <>
            <Button 
                data-testid={testid} 
                onClick={handleClickOpen} 
                sx={ label === "Batal" ? buttonCancelSX : buttonSaveSX} 
                variant="contained"
            >
                {label}
            </Button>
            {label === "Batal" ?
                <DialogAtom 
                    handleClose={handleClose}
                    handleNavigate={handleNavigate}
                    open={open}
                    testid="dialog-cancel-button-form"
                /> 
                : null
            }
        </>
    )
}