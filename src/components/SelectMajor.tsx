import { useNavigate } from "react-router-dom";
import NavigationButton from "./NavigationButton";

export default function SelectMajor() {

    const navigate = useNavigate()

    return (
        <div className="selectMajorComponent" >
            <label>Select your major:</label>
            <select name="major">
                <option>Cognitive Science</option>
                <option>Computer Science</option>
            </select>
            <button onClick={() => navigate("/select-classes")}>Select Classes</button>
        </div>
    )
}