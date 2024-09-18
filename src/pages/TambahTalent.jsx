import { Box, Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import TambahTalentCard from "../components/TambahTalentCard";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { getEmployeeStatus, getLevel, getPosition, getSkillset } from "../services/apis";
import Footer from "../components/Footer";
import { Colors } from "../components/Atom/Colors";

const TambahTalent = () => {
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const [openBar, setOpenBar] = useState(false);

    useEffect(() => {
        if(isError) {
            toast.dismiss();
            toast.error("Terjadi Kesalahan Server. Silahkan coba kembali", {
                duration: Infinity,
                icon: null,
                style: {
                    backgroundColor: Colors.red,
                    color: "#FFFFFF",
                    borderRadius: 3,
                }
            })

        } else if(isSuccess) {
            toast.dismiss();
            toast.success("Berhasil tambah talent", {
                duration: Infinity,
                icon: null,
                style: {
                    backgroundColor: "green",
                    color: "#FFFFFF",
                    borderRadius: 3,
                    width: "100%",
                }
            })
        }
    })

    const [levelData, setLevelData] = useState([]);
    const [employeeStatusData, setEmployeeStatusData] = useState([]);
    const [positionData, setPositionData] = useState([]);
    const [skillsetData, setSkillsetData] = useState([]);
     
    async function fetchDataLevel () {
        try {
            const response = await getLevel();
            setLevelData(response.data.mappingResponse);
        } catch(error) {
            setIsError(true);
        }
    }

    async function fetchDataEmployeeStatus () {
        try {
            const response = await getEmployeeStatus();
            setEmployeeStatusData(response.data.mappingResponse);
        } catch(error) {
            console.log("error", error);
        }
    }

    async function fetchDataPosition () {
        try {
            const response = await getPosition();
            setPositionData(response.data.mappingResponse);
        } catch(error) {
            console.log("error", error);
        }
    }

    async function fetchDataSkillset() {
        try {
            const response = await getSkillset();
            setSkillsetData(response.data.mappingResponse);
        } catch(error) {
            console.log("error", error);
        }
    }

    useEffect(() => {
        fetchDataLevel();
        fetchDataEmployeeStatus();
        fetchDataPosition();
        fetchDataSkillset();
    }, []);

    if(levelData) {
        <Box><Typography>Level Data Ada</Typography></Box>
    }

    return (
        <>  {isLoading || isError ? <Typography sx={{ 
                fontSize: "1.5em",
                fontWeight: 700,
                position: 'absolute', 
                top: '50%', 
                right: '50%', 
                zIndex: 9999, 
                transform: 'translate(50%, -50%)' 
        }}>{isLoading ? "Loading..." : null}</Typography> : null}
            <Grid className= {isLoading || isError ? "disabled" : ""} >
                <Navbar isTalentList={true} setOpenBar={setOpenBar}/>
                <Grid container sx={{ flexGrow: 1, paddingLeft: openBar ? "none" : {md: "17.6vw"}, marginBottom: 15}}>
                    <TambahTalentCard 
                        employeeStatusData={employeeStatusData}
                        levelData={levelData}
                        positionData={positionData}
                        setIsLoading={setIsLoading}
                        skillsetData={skillsetData}
                    />
                </Grid>
                <Footer />
            </Grid>
        </>
    )
}

export default TambahTalent;