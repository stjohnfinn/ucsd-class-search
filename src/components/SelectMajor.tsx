import { useNavigate } from "react-router-dom";
import NavigationButton from "./NavigationButton";

export default function SelectMajor() {

    const navigate = useNavigate()

    return (
        <div className="selectMajorComponent" >
            <h1>Select Major</h1>
            <button onClick={() => navigate("/select-classes")}>Select Classes</button>
        </div>
    )
}