import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import TalentDetailCard from "../components/TalentDetailCard";
import Footer from "../components/Footer";
import { getTalentById } from "../services/apis";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const DetailTalent = () => {
    const { talentId } = useParams();
    const [talentData, setTalentData] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const [openBar, setOpenBar] = useState(false);

    useEffect(() => {
        async function fetchDataTalentId() {
            try {
                const response = await getTalentById(talentId);
                setTalentData(response.data.mappingResponse);
                setIsLoading(false);
            } catch(error) {
                console.log(error.message);
                setIsLoading(false);
            }
        }
        fetchDataTalentId();
    }, []);
    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <>
            <Navbar isTalentList={true} setOpenBar={setOpenBar} />
            <Grid container sx={{ flexgrow: 12, paddingLeft: openBar ? "none" : { xs: "none", md: "17.6vw"}, marginBottom: 10}}>
                <TalentDetailCard
                    position={talentData.position}
                    skillSet={talentData.skillSet}
                    talentData={talentData}
                />
            </Grid>
            <Footer talentData={talentData}/>
        </>
    )
}

export default DetailTalent;