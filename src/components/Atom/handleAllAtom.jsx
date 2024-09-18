import { useNavigate } from "react-router-dom";

export default function useHandleNavigate () {
    const navigate = useNavigate();
    const handleNavigateToHome = () => {
        navigate("/daftar-talent");
    }
    return handleNavigateToHome;
};

export const handleChangeValue = (event, setValue) => {
    setValue(event.target.value);
};