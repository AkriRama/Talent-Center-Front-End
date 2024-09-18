import { Box, Divider, Grid } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { filterList } from "./ListData";
import FooterBodyAtom from "./Atom/FooterBodyAtom";
import ButtonAtom from "./Atom/ButtonAtom";
import FilterAtom from "./Atom/FilterAtom";
import TitleAtom from "./Atom/TitleAtom";
import FilterBoxAtom from "./Atom/FilterBoxAtom";
import BodyBoxAtom from "./Atom/BodyBoxAtom";
import { filterTextSX, flexCenterJSX, radiusColorBodySX, rowEndSX } from "./WrapperJSX";
import LoadingAtom from "./Atom/LoadingAtom";
import EmptyDataAtom from "./Atom/EmptyDataAtom";

export default function TalentCard({ 
    employeeStatusData,
    talentData, 
    talentLevelData,
    talentStatusData,
    employeeStatus, 
    entries,
    handleChangeEmployeeStatus, 
    handleChangeSortBy, 
    handleChangeTalentLevel, 
    handleChangeTalentExperience, 
    handleChangeTalentStatus, 
    isEmpty,
    isLoading,
    page,
    setEntries,
    setMinTalentExperience,
    setMaxTalentExperience,
    setPage,
    setTalentName, 
    setTotalPage,
    sortBy, 
    talentLevel, 
    talentStatus,
    totalPage, 
}) { 
    const navigate = useNavigate();
    const [level, setLevel] = useState("");
    const [talentExperience, setTalentExperience] = useState("");
    const [tempTalentName, setTempTalentName] = useState("");

    const handleAddTalent = () => {
        navigate("/tambah-talent");
    };
    const handleApplySearch = () => {
        setTalentName(tempTalentName);
    };  
    const handleChangeEntries = (number) => {
        setEntries(number);
    };
    const handleChangeExperience = (event) => {
        const value = event.target.value;
        setTalentExperience(value);
        
        if(value === 1) {
            setMinTalentExperience(null);
            setMaxTalentExperience(1);
        } else if(value === 2) {
            setMinTalentExperience(2);
            setMaxTalentExperience(4);
        } else if (value === 3) {
            setMinTalentExperience(5);
            setMaxTalentExperience(null)
        }
    };
    const handleChangePage = (event,value) => {
        setPage(value);
    };
    const handleChangeLevel = (event) => {
        setLevel(event.target.value);
    };
    const handleChangeTalentName = (event) => {
        setTempTalentName(event.target.value);
    };    
    const handleNavigate = (nav) => {
        navigate(nav);
    };
    const handleSearch = (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            handleApplySearch();
        }
    };

    return (
        <Grid item padding={{ xs: 0, md: 2}} sx={{ width: "100%" }}>
            {/* TITLE GRID */}
            <Grid container 
                padding={{ xs: 2, md: 0 }}
                direction={{ xs: "column", md: "none"}}
                gap={2}
            >
                {/* TITLE */}
                <Grid item>
                    <TitleAtom title="Daftar Talent" />
                </Grid>
            
                {/* BUTTON ADD */}
                <Grid item xs={12} sx={rowEndSX}>
                    <ButtonAtom handleClick={handleAddTalent} iconid="icon-add" numberButton={1} testid="button-add" textButton="Tambah Talent" />
                </Grid>
            
                {/* FILTER */}
                <Grid item>
                    <FilterBoxAtom 
                        employeeStatus={employeeStatus}
                        employeeStatusData={employeeStatusData} 
                        handleApplySearch={handleApplySearch}
                        handleChangeEmployeeStatus={handleChangeEmployeeStatus}
                        handleChangeExperience={handleChangeExperience}
                        handleChangeSortBy={handleChangeSortBy}
                        handleChangeTalentLevel={handleChangeTalentLevel}
                        handleChangeTalentName={handleChangeTalentName}
                        handleChangeTalentStatus={handleChangeTalentStatus}
                        handleSearch={handleSearch}
                        sortBy={sortBy}
                        talentExperience={talentExperience}
                        talentLevel={talentLevel}
                        talentLevelData={talentLevelData}
                        talentStatus={talentStatus}
                        tempTalentName={tempTalentName}
                        talentStatusData={talentStatusData}
                    />
                </Grid>

                {/* BUTTON ADD MOBILE */}
                <Grid item sx={flexCenterJSX}>
                    <ButtonAtom handleClick={handleAddTalent} numberButton={2} testid="icon-add" textButton="Tambah Talent" />
                </Grid>
            </Grid>
            
            {/* BODY BOX */}
            <Grid item>
                <Box sx={radiusColorBodySX}>
                    {/* HEADER FILTER BODY BOX */}
                    <Grid container sx={filterTextSX}>
                        <FilterAtom data={filterList} />
                    </Grid>
                    {/* DIVIDER */}
                    {isLoading ? <LoadingAtom /> : isEmpty ? <EmptyDataAtom /> : null}
                    {/* DIVIDER */}

                    {/* BODY BODY BOX */}
                    {talentData.map((data, index) => (
                        <Grid item key={index}>
                            <Grid item>
                                <Divider border="2px solid"></Divider>
                            </Grid>

                            {/* BODY */}
                            <Grid container key={index}>
                                <BodyBoxAtom 
                                    employeeStatus={data.employeeStatus}
                                    experience={data.talentExperience} 
                                    handleNavigate={handleNavigate}
                                    image={data.imageUrl}
                                    labelDetail="detail"
                                    labelEdit="edit"
                                    labelStatus="talentStatus"
                                    level={data.talentLevel}
                                    name={data.talentName}
                                    statusEmployee="Active"
                                    statusTalent="Onsite"
                                    talentId={data.talendId}
                                    talentStatus={data.talentStatus}
                                />
                            </Grid>
                        </Grid>
                    ))}
                    
                    {/* DIVIDER */}
                    <Grid item>
                        <Divider></Divider>
                    </Grid>                            

                    {/* FOOTER */}
                    <FooterBodyAtom 
                        entries={entries} 
                        handleChange={handleChangeEntries} 
                        handleChangePage={handleChangePage} 
                        page={page}
                        totalPage={totalPage}
                    />
                </Box>
            </Grid>
        </Grid>
    )
}