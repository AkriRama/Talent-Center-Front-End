import React from "react";
import { Grid } from "@mui/material";
import { FilterBoxSX } from "../WrapperJSX";
import SearchAtom from "./SearctAtom";
import SelectAtom from "./SelectAtom";
import { searchBoxList, sortByApprovalList, statusFilterList } from "../ListData";
import DateFilterAtom from "./DateFilterAtom";

export default function FilterBoxApprovalAtom({ 
    approvalStatus, 
    choose, 
    date, 
    handleApplySearch, 
    handleChange, 
    handleChangeChoose, 
    handleChangeSortBy, 
    handleChangeStatus, 
    handleKey, 
    setDate, 
    setEndRequestDate, 
    setStartRequestDate, 
    sortBy, 
    testid="filter-box-approval", 
    value 
}) {
    return (
        <Grid item sx={ FilterBoxSX } data-testid= {testid}>
            {/* Pencarian */}
            <Grid item>
                <SearchAtom handleApplySearch={handleApplySearch} handleChange={handleChange} handleKey={handleKey} label="approval" testid="search-filter-approval" value={value} />
            </Grid>

            {/* Pilih Untuk Mencari */}
            <Grid item>
                <SelectAtom data={searchBoxList} handleChange={handleChangeChoose} label="Pilih Untuk Mencari" list="approval" testid="search-box-filter-approval" value={choose} />
            </Grid>

            {/* Filter Tanggal Request */}
            <Grid item>
                <DateFilterAtom 
                    date={date}
                    setDate={setDate}
                    setEndRequestDate={setEndRequestDate}
                    setStartRequestDate={setStartRequestDate}
                />
            </Grid>

            {/* Filter Status */}
            <Grid item>
                <SelectAtom data={statusFilterList} handleChange={handleChangeStatus} label="Status " list="approval" testid="status-filter-approval" value={approvalStatus} />
            </Grid>

            {/* Urutkan */}
            <Grid item>
                <SelectAtom data={sortByApprovalList} handleChange={handleChangeSortBy} label="Urutkan" testid="sortBy-filter-approval" value={sortBy} />
            </Grid>
        </Grid>
    )
}