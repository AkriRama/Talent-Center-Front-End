import React from "react";
import { Dialog, DialogActions, DialogContent, DialogTitle, Divider, IconButton, TextareaAutosize, Typography } from "@mui/material";
import { Close } from "@mui/icons-material";
import ButtonDialogAtom from "./ButtonDialogAtom";

export default function DialogApprovalAtom({handleClose, handleSuccesStatus, label= "approve", open, reason="", talentRequestId, testid="dialog-approval-element" }) {
    return (
        <Dialog
            data-testid={testid}
            fullWidth
            maxWidth="sm"
            open={open}
        >
            <DialogTitle 
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            >
                <Typography fontSize="1em" fontWeight={700} textTransform="capitalize">{label}</Typography>
                <IconButton onClick={handleClose}><Close data-testid="icon-button-dialog-approval" /></IconButton>
            </DialogTitle>
            <Divider></Divider>
            <DialogContent>
                <Typography>Apakah Anda Yakin ingin {label} ini?</Typography>
                { label === "reject" &&
                <TextareaAutosize 
                    data-testid = "textArea-approval"
                    inputComponent="textarea"
                    placeholder="Masukkan alasan penolakan"
                    style={{
                        boxSizing: "border-box",
                        border: "1px solid",
                        borderRadius: 5,
                        height: 100,
                        marginTop: 20,
                        padding: 10,
                        resize: "none",
                        width: "100%",
                    }}
                />}
            </DialogContent>
            <Divider></Divider>
            <DialogActions>
                <ButtonDialogAtom 
                    handleClose={handleClose}
                    label="Batal"
                    testid="button-dialog-cancel-approval"
                />
                <ButtonDialogAtom 
                    handleClose={handleClose}
                    handleSuccesStatus={handleSuccesStatus}
                    label={label}
                    reason={reason}
                    talentRequestId={talentRequestId}
                    testid="button-dialog-AR-approval"
                />
            </DialogActions>
        </Dialog>
    )
}