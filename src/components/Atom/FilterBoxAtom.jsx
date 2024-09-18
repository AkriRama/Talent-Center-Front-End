import React from "react";
import { Grid } from "@mui/material";
import SearchAtom from "./SearctAtom";
import SelectAtom from "./SelectAtom";
import { FilterBoxSX } from "../WrapperJSX";
import { experienceList, sortByList } from "../ListData";

export default function FilterBoxAtom({
    employeeStatus, 
    employeeStatusData, 
    handleApplySearch,
    handleChangeEmployeeStatus,
    handleChangeExperience,
    handleChangeSortBy,
    handleChangeTalentLevel,
    handleChangeTalentName,
    handleChangeTalentStatus,
    handleSearch,
    sortBy,
    talentExperience,
    talentLevel,
    talentLevelData,
    talentStatus,
    tempTalentName,
    talentStatusData,
    testid="filter-box-element"
}) {
    return (
        <Grid item sx={ FilterBoxSX } data-testid={testid}>
            {/* Pencarian */}
            <Grid item>
                <SearchAtom handleApplySearch={handleApplySearch} handleChange={handleChangeTalentName} handleKey={handleSearch} testid="search-filter" value={tempTalentName} />
            </Grid>

            {/* Filter Level */}
            <Grid item>
                <SelectAtom data={talentLevelData} label="Level" handleChange={handleChangeTalentLevel} testid="level-select-filter" value={talentLevel}/>
            </Grid>

            {/* Filter Pengalaman */}
            <Grid item>
                <SelectAtom data={experienceList} handleChange={handleChangeExperience} label="Pengalaman" testid="experience-select-filter" value={talentExperience}/>
            </Grid>

            {/* Filter Status */}
            <Grid item>
                <SelectAtom data={talentStatusData} handleChange={handleChangeTalentStatus} label="Status" testid="status-select-filter" value={talentStatus}/>
            </Grid>

            {/* Filter Kepegawaian */}
            <Grid item>
                <SelectAtom data={employeeStatusData} handleChange={handleChangeEmployeeStatus} label="Kepegawaian" testid="employee-select-filter" value={employeeStatus}/>
            </Grid>

            {/* Urutkan */}
            <Grid item>
                <SelectAtom data={sortByList} handleChange={handleChangeSortBy} label="Urutkan" testid="sortBy-select-filter" value={sortBy}/>
            </Grid>
        </Grid>
    )
}