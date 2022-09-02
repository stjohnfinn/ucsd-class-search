import { useNavigate } from "react-router-dom"
import MajorSection from "./MajorSection"


export default function SelectClasses() {

    const navigate = useNavigate()
    
    return (
        <div className="selectClassesComponent" >
            <h1>Select Major</h1>
            <button onClick={() => navigate("/search-classes")}>Search Classes</button>
            <MajorSection title="Cognitive Science" classes={["COGS 118", "COGS 112"]}/>
        </div>
    )
}