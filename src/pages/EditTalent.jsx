import { Grid, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import EditTalentCard from "../components/EditTalentCard";
import { getEmployeeStatus, getLevel, getPosition, getSkillset, getTalentById } from "../services/apis";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Footer from "../components/Footer";
import toast from "react-hot-toast";
import { Colors } from "../components/Atom/Colors";

const EditTalent = () => {
    const { talentId } = useParams();
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);


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
        }
    })

    const [employeeStatusData, setEmployeeStatusData] = useState([]);
    const [openBar, setOpenBar] = useState(false);
    const [positionData, setPositionData] = useState([]);
    const [skillsetData, setSkillsetData] = useState([]);
    const [talentData, setTalentData] = useState([]);
    const [talentLevelData, setTalentLevelData] = useState([]);

    async function fetchDataTalent() {
        try {
            const response = await getTalentById(talentId);
            setTalentData(response.data.mappingResponse);
        } catch(error) {
            setIsError(true);
            console.log("response : ", error);
        }
    };

    async function fetchDataEmployeeStatus() {
        try {
            const response = await getEmployeeStatus();
            setEmployeeStatusData(response.data.mappingResponse);
        } catch(error) {
            console.log("error", error);
        }
    };

    async function fetchDataPosition() {
        try {
            const response = await getPosition();
            setPositionData(response.data.mappingResponse);
        } catch(error) {
            console.log("error", error);
        }
    };

    async function fetchDataSkillset() {
        try {
            const response = await getSkillset();
            setSkillsetData(response.data.mappingResponse);
        } catch(error) {
            console.log("error", error);
        }
    };
    
    async function fetchDataTalentLevel() {
        try {
            const response = await getLevel();
            setTalentLevelData(response.data.mappingResponse);
        } catch(error) {
            console.log("error", error);
        }
    };

    useEffect(() => {
        fetchDataEmployeeStatus();
        fetchDataPosition();
        fetchDataSkillset();
        fetchDataTalent();
        fetchDataTalentLevel();
    }, []);

    return (
        <>{isLoading || isError ? <Typography sx={{ 
            fontSize: "1.5em",
            fontWeight: 700,
            position: 'absolute', 
            top: '50%', 
            right: '50%', 
            zIndex: 9999, 
            transform: 'translate(50%, -50%)' 
    }}>{isLoading ? "Loading..." : null}</Typography> : null}
            <Grid className={isLoading || isError ? "disabled" : ""}>
                <Navbar isTalentList={true} setOpenBar={setOpenBar} />
                <Grid container sx={{ flexGrow: 1, paddingLeft: openBar ? "none" : { md: "17.6vw"}, marginBottom: 15 }}>
                    <EditTalentCard 
                        employeeStatusData={employeeStatusData}
                        positionData={positionData}
                        setIsLoading={setIsLoading}
                        skillsetData={skillsetData}
                        talentData={talentData}
                        talentId={talentId}
                        talentLevelData={talentLevelData}
                    />
                </Grid>
                <Footer />
            </Grid>
        </>
    )
}

export default EditTalent;