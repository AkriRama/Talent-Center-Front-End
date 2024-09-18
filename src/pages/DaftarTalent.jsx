import { Grid } from "@mui/material";
import TalentCard from "../components/TalentCard";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getEmployeeStatus, getLevel, getTalentList, getTalentStatus } from "../services/apis";
import { Colors } from "../components/Atom/Colors";

const DaftarTalent = () => {
    const [isError, setIsError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [totalPage, setTotalPage] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [talentData, setTalentData] = useState([]);
    const [openBar, setOpenBar] = useState(false);
    const [page, setPage] = useState(1);
    const [entries, setEntries] = useState(8);
    const [sortBy, setSortBy] = useState("talentName,asc");
    const [talentName, setTalentName] = useState("");
    const [minTalentExperience, setMinTalentExperience] = useState("");
    const [maxTalentExperience, setMaxTalentExperience] = useState("");
    const [talentLevel, setTalentLevel] = useState("");
    const [talentStatus, setTalentStatus] = useState("");
    const [employeeStatus, setEmployeeStatus] = useState("");
    const [talentLevelData, setTalentLevelData] = useState([]);
    const [talentStatusData, setTalentStatusData] = useState([]);
    const [employeeStatusData, setEmployeeStatusData] = useState([]);

    //handleChange
    const handleChangeSortBy = (event) => {
        setSortBy(event.target.value);
    };
    const handleChangeTalentLevel = (event) => {
        setTalentLevel(event.target.value);
    };
    const handleChangeTalentStatus = (event) => {
        setTalentStatus(event.target.value);
    };
    const handleChangeEmployeeStatus = (event) => {
        setEmployeeStatus(event.target.value);
    };

    //Fetch Data Talent
    useEffect(() => {
        const fetchDataTalent = async () => {
            setIsLoading(true); 
            try {
                const response = await getTalentList(
                    page,
                    entries,
                    sortBy,
                    talentName,
                    minTalentExperience,
                    maxTalentExperience,
                    talentLevel,
                    talentStatus,
                    employeeStatus,
                );
                console.log('Response:', response); 
                if (response && response.data && response.data.mappingResponse && response.status === 200) {
                    setTotalPage(Math.ceil(response.data.mappingParameter/entries));
                    setTalentData(response.data.mappingResponse);
                    setIsLoading(false);
                    setIsEmpty(false);
                } else {
                    console.log('Error: Invalid response format');
                }

                if(response.data.mappingResponse.length === 0) {
                    setIsEmpty(true);
                }
            } catch(error) {
                if (error.response && error.response.status === 500 ) {
                    toast.dismiss();
                    toast.error("Terjadi Kesalahan Server. Silahkan Coba Kembali", {
                        duration: Infinity,
                        icon: null,
                        style: {
                            background: Colors.red,
                            borderRadius: 5,
                            color: Colors.white,
                            fontSize: "0.9rem",
                            fontWeight: "bold",
                            padding: "10px"
                        }
                    })
                }
                console.log("error : ", error);
                setIsError(true);
            }
        };
        fetchDataTalent();
    },[
        page,
        entries,
        sortBy,
        talentName,
        minTalentExperience,
        maxTalentExperience,
        talentLevel,
        talentStatus,
        employeeStatus
    ]);

    //Fetch Data Level
    useEffect(() => {
        async function fetchDataLevel() {
            try {
                const response = await getLevel();
                setTalentLevelData(response.data.mappingResponse);
            } catch(error) {
                console.log("error", error);
            }
        }
        fetchDataLevel();
    },[]);

    //Fetch Data Status
    useEffect(() => {
        async function fetchDataStatus() {
            try {
                const response = await getTalentStatus();
                setTalentStatusData(response.data.mappingResponse);
            } catch(error) {
                console.log("error", error);
            }
        }
        fetchDataStatus();
    },[]);

    //Fetch Data EmployeeStatus
    useEffect(() => {
        async function fetchDataEmployeeStatus() {
            try {
                const response = await getEmployeeStatus();
                setEmployeeStatusData(response.data.mappingResponse);
            } catch(error) {
                console.log("error", error);
            }
        }
        fetchDataEmployeeStatus();
    },[]);

    return (
        <>
        <Grid className={isError ? "disabled" : null}>
                <Navbar isTalentList={true} setOpenBar={setOpenBar}/>
                <Grid container sx={{ paddingLeft: openBar ? "none" : { xs: "none", md : "17.6vw"}, marginBottom: 10}}>
                    <TalentCard
                        //Data 
                        employeeStatusData={employeeStatusData}
                        talentData={talentData}
                        talentLevelData={talentLevelData}
                        talentStatusData={talentStatusData}

                        employeeStatus={employeeStatus}
                        entries={entries}
                        handleChangeEmployeeStatus={handleChangeEmployeeStatus}
                        handleChangeSortBy={handleChangeSortBy}
                        handleChangeTalentLevel={handleChangeTalentLevel}
                        handleChangeTalentStatus={handleChangeTalentStatus}
                        page={page}
                        isEmpty={isEmpty}
                        isLoading={isLoading}
                        setEntries={setEntries}
                        setMinTalentExperience={setMinTalentExperience}
                        setMaxTalentExperience={setMaxTalentExperience}
                        setPage={setPage}
                        setTalentName={setTalentName}
                        setTotalPage={setTotalPage}
                        sortBy={sortBy}
                        talentLevel={talentLevel}
                        talentStatus={talentStatus}
                        totalPage={totalPage}
                    />
                </Grid>
                <Footer />
        </Grid>
        
        </>
    )
}

export default DaftarTalent;