import { Route, Routes } from "react-router-dom";
import DaftarTalent from "../pages/DaftarTalent";
import '../style.css'
import DetailTalent from "../pages/DetailTalent";
import TambahTalent from "../pages/TambahTalent";
import DaftarPersetujuanTalent from "../pages/DaftarPersetujuanTalent";
import EditTalent from "../pages/EditTalent";

function Layout() {
    return (
            <Routes>
                <Route path="/daftar-talent" element={<DaftarTalent />} />
                <Route path="detail-talent/:talentId" element={ <DetailTalent />} />
                <Route path="tambah-talent" element={ <TambahTalent />} />
                <Route path="/edit-talent/:talentId" element={ <EditTalent /> } />
                <Route path="/daftar-persetujuan-talent" element={ <DaftarPersetujuanTalent /> } />
            </Routes>
    )
}


export default Layout;