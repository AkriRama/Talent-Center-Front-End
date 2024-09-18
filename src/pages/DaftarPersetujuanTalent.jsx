import { Grid } from "@mui/material";
import Navbar from "../components/Navbar";
import PersetujuanTalentCard from "../components/PersetujuanTalentCard";
import Footer from "../components/Footer";
import { getTalentApproval } from "../services/apis";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { Colors } from "../components/Atom/Colors";

const DaftarPersetujuanTalent = () => {
    const [agencyName, setAgencyName] = useState("");
    const [approvalStatus, setApprovalStatus] = useState();
    const [endRequestDate, setEndRequestDate] = useState("");
    const [entries, setEntries] = useState(8);
    const [isError, setIsError] = useState(false);
    const [isEmpty, setIsEmpty] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [openBar, setOpenBar] = useState(false);
    const [page, setPage] = useState(1);
    const [sortBy, setSortBy] = useState("talentWishlist.client.agencyName,desc");
    const [startRequestDate, setStartRequestate] = useState("");
    const [talentApprovalData, setTalentApprovalData] = useState([]);
    const [talentName, setTalentName] = useState("");
    const [totalPage, setTotalPage] = useState("");


    async function fetctDataTalentApproval(
        page,
        entries,
        sortBy,
        agencyName,
        talentName,
        approvalStatus,
    ) {
        try {
            setIsLoading(true);
            const response = await getTalentApproval(
                page,
                entries,
                sortBy,
                agencyName,
                talentName,
                approvalStatus,
                startRequestDate,
                endRequestDate
            );
            if(response && response.data && response.data.mappingResponse) {
                setIsLoading(false);
                setIsEmpty(false);
                setTalentApprovalData(response.data.mappingResponse);
                setTotalPage(Math.ceil(response.data.totalData/entries));
            } 
            if(response.data.mappingResponse.length === 0) {
                setIsEmpty(true);
            }
            console.log("response", response);
        } catch(error) {
            if(error && error.response.status === 500) {
                setIsLoading(false);
                setIsError(true);
            }
            console.log("error : ", error);
        }
    };
    
    useEffect(() => {
        fetctDataTalentApproval(
            page,
            entries,
            sortBy,
            agencyName,
            talentName,
            approvalStatus,
            startRequestDate,
            endRequestDate
            
        );
    }, [
        page,
        entries,
        sortBy,
        agencyName,
        talentName,
        approvalStatus,
        startRequestDate,
        endRequestDate
    ]);

    if(isError) {
        toast.dismiss();
        toast.error("Terjadi Kesalahan Server. Silahkan Coba Kembali", {
            duration: Infinity,
            icon: null,
            style: {
                backgroundColor: Colors.red,
                color: Colors.white,
                fontWeight: 400,
                padding: 10,
            }
        })
    }

    return (
        <>
            <Grid item className={isError ? "disabled" : ""}>
                <Navbar isTalentApprovalList={true} setOpenBar={setOpenBar}/>
                <Grid container sx={{ paddingLeft: openBar ? "none" : {xs: "none", md : "17.6vw"}, marginBottom: 10 }}>
                    <PersetujuanTalentCard 
                        approvalStatus={approvalStatus}
                        entries={entries}
                        isEmpty={isEmpty}
                        isLoading={isLoading}
                        page={page}
                        setAgencyName = {setAgencyName}
                        setApprovalStatus={setApprovalStatus}
                        setEntries={setEntries}
                        setPage={setPage}
                        setSortBy={setSortBy}
                        setTalentName={setTalentName}
                        sortBy={sortBy}
                        setStartRequestDate={setStartRequestate}
                        setEndRequestDate={setEndRequestDate}
                        talentApprovalData= {talentApprovalData} 
                        totalPage={totalPage}
                    />
                </Grid>
                <Footer />
            </Grid>
        </>
    )
}

export default DaftarPersetujuanTalent;