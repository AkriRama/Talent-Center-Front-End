import { Box, Divider, Grid } from "@mui/material";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { putApproveRejectTalentApproval } from "../services/apis";
import FilterAtom from "./Atom/FilterAtom";
import { filterApprovalList } from "./ListData";
import FooterBodyAtom from "./Atom/FooterBodyAtom";
import { approvalBoxSX, filterTextSX, radiusColorBodySX } from "./WrapperJSX";
import BodyBoxApprovalAtom from "./Atom/BodyBoxApprovalAtom";
import LoadingAtom from "./Atom/LoadingAtom";
import TitleAtom from "./Atom/TitleAtom";
import FilterBoxApprovalAtom from "./Atom/FilterBoxApprovalAtom";
import EmptyDataAtom from "./Atom/EmptyDataAtom";

export default function PersetujuanTalentCard({ 
    approvalStatus,
    entries,
    isEmpty,
    isLoading,
    page,
    setAgencyName, 
    setApprovalStatus, 
    setEntries,
    setPage, 
    setSortBy, 
    setTalentName,
    sortBy, 
    setEndRequestDate,
    setStartRequestDate,
    talentApprovalData,
    totalPage,
}) {
    const [approve, setApprove] = useState(false);
    const [choose, setChoose] = useState("");
    const [date, setDate] = useState(dayjs());
    const [error, setError] = useState(false);
    const [reject, setReject] = useState(false);
    const [success, setSuccess] = useState(false);
    const [talentRequestId, setTalentRequestId] = useState("");
    const [tempAgencyName, setTempAgencyName] = useState("");
    const [tempTalentName, setTempTalentName] = useState("");
    
    const applySearch = () => {
        if (choose === 1 || choose === "") {
            setAgencyName(tempAgencyName);
        } else {
            setTalentName(tempTalentName);
        }
    };
    const handleChangeAgencyName = (event) =>  {
        setTempAgencyName(event.target.value);

    };
    const handleChangeChoose = (event) => {
        setTempAgencyName("");
        setTempTalentName("");
        setChoose(event.target.value);
    };    
    const handleChangeEntries = (number) => {
        setEntries(number);
    };
    const handleChangePage = (event, value) => {
        setPage(value)
    };
    const handleChangeSortBy = (event) => {
        setSortBy(event.target.value);
    };
    const handleChangeStatus = (event) => {
        setApprovalStatus(event.target.value);
    };
    const handleChangeTalentName = (event) => {
        setTempTalentName(event.target.value);
        setAgencyName("");
    };
    const handleClickApprove = (talentRequestId) => {
        setTalentRequestId(talentRequestId);
        setApprove(true);
    };
    const handleClickReject = (talentRequestId) => {
        setReject(true);
        setTalentRequestId(talentRequestId);
    };
    const handleCloseApprove = () => {
        setApprove(false);
    }; 
    const handleCloseReject = () => {
        setReject(false);
    };
    const handleSearch = (event) => {
        if(event.key === "Enter") {
            applySearch();
        }
    };
    const handleSuccesStatus = (action, rejectReason) => {
        console.log("action : ", action);
        console.log("rejectReason : ", rejectReason);
        console.log("talentRequestId : ", talentRequestId);
        if (action === "approve") {
            async function approveData() {
                try {
                    const response = await putApproveRejectTalentApproval(
                        talentRequestId,
                        action,
                        rejectReason,
                    );
                    console.log("response", response);
                    console.log("talentRequestId", talentRequestId);
                } catch(error) {
                    console.log("error", error);
                }
            }
            approveData();
        } else if(action === "reject") {
            async function rejectData() {
                try {
                    const response = await putApproveRejectTalentApproval(
                        talentRequestId,
                        action,
                        rejectReason,
                    );
                    console.log("response", response);
                    console.log("talentRequestId", talentRequestId);
                } catch(error) {
                    console.log("error", error);
                }
            }
            rejectData();
        }
        setSuccess(true);
        toast.dismiss();
        toast.success(`Berhasil ${action}.`, {
            duration: 3000,
            icon: null,
            style: {
                backgroundColor: "green",
                color: "#FFFFFF",
                width: "100%",
            }
        })
    };
    
    useEffect(() => {
        if(error) {
            toast.dismiss();
            toast.error("Terjadi kesalahan server. Silahkan coba kembali", {
                duration: Infinity,
                icon: null,
                style: {
                    backgroundColor: "red",
                    color: "#FFFFFF",
                },
            })
        }
    },[talentApprovalData]);

    return (
        <Grid item padding={{ xs: 0, md: 2 }} sx={approvalBoxSX}>
            <Grid container
                padding={{ xs: 2, md: 0 }}
                direction={{ xs: "column", md: "none"}}
                gap={2}
            >
                {/* TITLE */}
                <Grid item>
                    <TitleAtom 
                        title="Daftar Persetujuan Talent"
                        testid="title-approval-body" 
                    />
                </Grid>

                {/* FILTER */}
                <Grid item>
                    <FilterBoxApprovalAtom
                        approvalStatus={approvalStatus}
                        choose={choose}
                        date={date}
                        handleChange={choose === "" ? handleChangeAgencyName : choose === 1 ? handleChangeAgencyName : handleChangeTalentName}
                        handleChangeChoose={handleChangeChoose}
                        handleChangeSortBy={handleChangeSortBy}
                        handleChangeStatus={handleChangeStatus}
                        handleKey={handleSearch}
                        setDate={setDate}
                        setEndRequestDate={setEndRequestDate}
                        setStartRequestDate={setStartRequestDate}
                        sortBy={sortBy}
                        testid="filter-box-approval-body"
                        value={choose === "" ? tempAgencyName : choose === 1  ? tempAgencyName : tempTalentName}
                    />
                </Grid>
            </Grid>
                
            {/* BODY BOX */}
            <Grid item>
                <Box sx={radiusColorBodySX}>
                    {/* HEADER BODY BOX */}
                    <Grid container sx={filterTextSX}>
                        <FilterAtom 
                            data={filterApprovalList} 
                            testid="filter-approval-body" 
                        />
                    </Grid>

                    {isLoading ? <LoadingAtom /> : isEmpty ? <EmptyDataAtom /> : null}

                    {/* BODY BODY BOX */}
                    {talentApprovalData.map((data, index)  => (
                        <Grid item key={index}>
                            <Grid item>
                                <Divider border="2px solid"></Divider>
                            </Grid>
                            <Grid container key={index}>
                                <BodyBoxApprovalAtom 
                                    approve={approve}
                                    data={data} 
                                    handleClickApprove={handleClickApprove}
                                    handleClickReject={handleClickReject}
                                    handleCloseApprove={handleCloseApprove}
                                    handleCloseReject={handleCloseReject}
                                    handleSuccesStatus={handleSuccesStatus}
                                    index={index}
                                    reject={reject}
                                    testid="body-box-approval-body" 
                                />
                            </Grid>
                        </Grid>
                    ))}

                    {/* DIVIDER */}
                    <Grid item>
                        <Divider />
                    </Grid>

                    {/* FOOTER */}
                    <FooterBodyAtom 
                        entries={entries}
                        handleChange={handleChangeEntries}
                        handleChangePage={handleChangePage}
                        totalPage={totalPage}
                        page={page}
                        testid="footer-approval-body"
                    />
                </Box>
            </Grid>
        </Grid>
    )
}