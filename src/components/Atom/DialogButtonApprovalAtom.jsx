import React from "react";
import { Dialog, DialogActions, DialogTitle, Divider, Grid, IconButton } from "@mui/material";
import IconButtonARAtom from "./IconButtonARAtom";
import DialogApprovalAtom from "./DialogApprovalAtom";
import BoxActionAtom from "./BoxActionAtom";
import { Close } from "@mui/icons-material";

export default function DialogButtonApprovalAtom({ 
    approvalStatus,
    approve, 
    data, 
    handleClickApprove, 
    handleClickReject, 
    handleClose, 
    handleCloseApprove, 
    handleCloseReject, 
    handleSuccesStatus, 
    open, 
    reject, 
    testid="dialog-button-approval-element",
}) {
    return (
        <Dialog
            fullWidth
            onClose={handleClose}
            maxWidth="xs"
            open={open}
            data-testid={testid}
        >
            <DialogTitle fontWeight={700}>
                <Grid container justifyContent="space-between">
                    <Grid item xs={5} display="flex" justifyContent="space-between" alignItems="center">
                        Action 
                        <BoxActionAtom data={approvalStatus} label="approvalStatus" status="Approved" status2="Rejected" status3="approved" />
                    </Grid>
                    <IconButton data-testid="icon-button-close-dialog-button-approval" onClick={handleClose}>
                        <Close />
                    </IconButton>
                </Grid>
            </DialogTitle>
            <Divider></Divider>
            <DialogActions>
                <IconButtonARAtom data={data} handleClick={handleClickApprove} label="Approve" testid="icon-button-AR-cancel-approval"/>
                <DialogApprovalAtom 
                    handleClose={handleCloseApprove}
                    handleSuccesStatus={handleSuccesStatus}
                    open={approve}
                    testid="dialog-approval-approve-button"
                />
                {/* Reject */}
                <IconButtonARAtom data={data} handleClick={handleClickReject} label="Reject" testid="icon-button-AR-approval"/>
                <DialogApprovalAtom 
                    handleClose={handleCloseReject}
                    handleSuccesStatus={handleSuccesStatus}
                    label="reject"
                    open={reject}
                    reason="Tidak Ada Alasan"
                    testid="dialog-approval-reject-button"
                />
            </DialogActions>
        </Dialog>
    )
}